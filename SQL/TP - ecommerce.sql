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

