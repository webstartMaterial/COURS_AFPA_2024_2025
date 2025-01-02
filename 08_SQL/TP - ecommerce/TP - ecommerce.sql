-- création bdd tables-

CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    created_at DATE
);

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(10, 2),
    stock_quantity INT,
    category VARCHAR(100)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    order_date DATE,
    total_price DECIMAL(10, 2),
    status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT CHECK (quantity >= 0),
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);




-- 1. Insérez des données dans les tables. Exemple :


INSERT INTO users VALUES
(1, 'Alice', 'alice@example.com', 'password123', '2024-01-01'),
(2, 'Bob', 'bob@example.com', 'securepass', '2024-02-01');

INSERT INTO products VALUES
(1, 'Laptop', 999.99, 10, 'Electronics'),
(2, 'Headphones', 49.99, 50, 'Accessories');

INSERT INTO orders (id, users_id, order_date, total_price, status) VALUES
(1, 1, '2024-03-01', 1099.98, 'Completed'),
(2, 2, '2024-03-05', 49.99, 'Pending');

INSERT INTO order_details (id, quantity, products_id, orders_id, subtotal) VALUES
(1, 1, 1, 1, 999.99),
(2, 1, 2, 2, 99.98);


   -- Afficher tous les produits commandés avec le nom de l'utilisateur, triés par `order_date`.

    SELECT o.order_date, u.name, p.name FROM orders o
    INNER JOIN order_details od ON od.orders_id = o.id
    INNER JOIN users u ON u.id = o.users_id
    INNER JOIN products p ON p.id = od.products_id
    ORDER BY o.order_date;

   -- Filtrer les commandes dont le statut est "Pending".

    SELECT * FROM orders WHERE status = 'Pending';


   -- Trouver le produit le plus cher vendu.

    SELECT MAX(price) AS max_price FROM products;

   -- Calculer le total des ventes par catégorie.

   SELECT p.category, SUM(od.subtotal) FROM order_details od
   INNER JOIN products p ON p.id = od.products_id
   GROUP BY p.category;

   -- Lister les utilisateurs n'ayant passé aucune commande.
    SELECT * FROM users WHERE id NOT IN (SELECT users_id FROM orders);



    5. Modification de données (20 min)

    1. Modifiez le stock du produit "Laptop" en le diminuant de 1.

    UPDATE products SET stock_quantity = stock_quantity - 1 WHERE name = 'Laptop';

    2. Changez le statut de la commande de Bob à "Completed".

    UPDATE orders SET status = 'Completed' WHERE users_id = (SELECT id FROM users WHERE name = 'Bob');

    3. Mettez à jour le prix des produits de la catégorie "Accessories" en appliquant une réduction de 10%.

    UPDATE products SET price = price * 0.9 WHERE category = 'Accessories';


    -- 6. Les contraintes (15 min)


1. Ajoutez une contrainte UNIQUE sur la colonne `email` de la table `users`.

ALTER TABLE users ADD UNIQUE(email);

2. Ajoutez une contrainte de clé étrangère entre `user_id` de `orders` et `id` de `users`.

ALTER TABLE orders ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id);

3. Assurez-vous que la quantité dans `order_details` ne peut pas être négative.

ALTER TABLE order_details MODIFY quantity INT CHECK (quantity >= 0);


-- 7. Les jointures (20 min)


1. Affichez tous les détails des commandes, avec le nom du produit et l'email de l'utilisateur.

SELECT od.id, od.orders_id, p.name, u.email FROM order_details od 
INNER JOIN products p ON p.id = od.products_id
INNER JOIN orders o ON o.id = od.orders_id 
INNER JOIN users u ON u.id = o.users_id; 


2. Affichez le total dépensé par chaque utilisateur.

SELECT u.name, SUM(o.total_price) AS montant_total
FROM orders o
INNER JOIN users u ON o.users_id = u.id
GROUP BY o.users_id;

3. Trouvez tous les produits jamais commandés.
SELECT * FROM products WHERE id NOT IN (SELECT products_id FROM order_details);

-- 8. Transactions et procédures (15 min)

-- Insère une nouvelle commande pour un utilisateur.
START TRANSACTION;
INSERT INTO orders VALUES ('2024-12-16', 99, 'Pending', 2);

-- vérifier le stock du produit
SET @product_id = 1;
SET @quantity = 2

SELECT stock_quantity INTO @current_stock
FROM products
WHERE id = @product_id

IF @current_stock >= @quantity THEN
    UPDATE products
    SET stock_quantity = stock_quantity - @quantity
    WHERE id = @product_id

    -- GÉNÉRER UN DÉTAIL DE COMMANDE
    INSERT INTO order_details VALUES(@quantity, 99, @product_id, @order_id)

    -- Confirmer la transaction 
    COMMIT;
ELSE
    -- Annuler la transaction si le stock est insuffisant
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = CONCAT('STOCK insuffisant pour ce produit', @product_id)
    ROLLBACK;
END IF;



-- PROCÉDURE STOCKÉE

DELIMITER //

CREATE PROCEDURE create_order_and_update_stock(
    IN user_id INT,
    IN product_id INT,
    IN quantity INT
)
BEGIN
    DECLARE current_stock INT;
    DECLARE new_order_id INT;
    DECLARE product_price DECIMAL(10,2);
    DECLARE total_price DECIMAL(10,2);

    START TRANSACTION;

    -- 1. Récupérer le stock actuel et le prix du produit
    SELECT stock_quantity, price
    INTO current_stock, product_price
    FROM products
    WHERE id = product_id;

    -- 2. Vérifier si le stock est suffisant
    IF current_stock >= quantity THEN

        -- Calculer le prix total
        SET total_price = product_price * quantity;

        -- 3. Insérer la commande dans 'orders'
        INSERT INTO orders (users_id, order_date, total_price, status)
        VALUES (user_id, NOW(), total_price, 'Pending');

        -- Récupérer l'ID de la commande créée
        SET new_order_id = LAST_INSERT_ID();

        -- 4. Mettre à jour le stock du produit
        UPDATE products
        SET stock_quantity = stock_quantity - quantity
        WHERE id = product_id;

        -- 5. Insérer les détails de la commande
        INSERT INTO order_details (orders_id, products_id, quantity, subtotal)
        VALUES (new_order_id, product_id, quantity, total_price);

        -- 6. Valider la transaction
        COMMIT;

    ELSE
        -- 7. Envoyer un message d'erreur
        SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'STOCK insuffisant pour ce produit';

        ROLLBACK;
    END IF;

END //

DELIMITER ;


-- 9. Fonction, variables, tables temporaires et vue (20 min)

-- 1. Créer une fonction utilisateur :
-- Écrivez une fonction appelée `get_user_orders` qui prend l'ID d'un utilisateur en paramètre et -- retourne tous les détails des commandes passées par cet utilisateur.
   
    DELIMITER //
    CREATE FUNCTION get_user_orders(userId INT)
    RETURNS TABLE
    RETURN
    SELECT * FROM orders WHERE users_id = userId;
    // DELIMITER ;


-- 2. Utilisation des variables :
-- Déclarez une variable pour stocker la quantité totale de produits commandés par un utilisateur -- spécifique.

SET @user_id = 1;

SELECT SUM(od.quantity) AS total_quantity
FROM orders o
INNER JOIN order_details od ON od.orders_id = o.id
WHERE o.users_id = @user_id;
   
-- 3. Créer une table temporaire :
   -- Créez une table temporaire pour stocker les produits dont le stock est inférieur à une -- certaine limite.

   CREATE TEMPORARY TABLE low_stock_products AS
   SELECT * FROM products WHERE stock_quantity < 5;

-- 4. Créer une vue :-- 
   -- Créez une vue pour afficher les utilisateurs et leur total dépensé sur le site e-commerce.

   CREATE VIEW user_spending AS
   SELECT u.name, SUM(o.total_price) AS total_spent
   FROM users u
   INNER JOIN orders o ON o.users_id = u.id
   GROUP BY u.name;
