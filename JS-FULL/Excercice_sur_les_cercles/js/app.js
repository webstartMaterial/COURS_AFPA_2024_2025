// JE VAIS ATTENDRE QUE MA PAGE SOIT ENTIRREMENT CHARGÉE

// a mettre tout le temps (sécurité)
document.addEventListener("DOMContentLoaded", function (event) {

    // FAUDRA CAPTER L'ÉVÉNEMENT CLICK SUR LE BODY (DOCUMENT)

    this.addEventListener("click", function(e) {

        // FAUDRA RÉCUPÉRER LA POSITION EN X ET Y DU CLICK (EVENT)
        let x = e.clientX;
        let y = e.clientY;
    
        // FAUDRA GÉNÉRER UNE WIDTH/HEIGHT ALÉATOIRE POUR GÉNÉRER LE CERCLE (50 ET 150PX) (MATH RANDOM)
        
        let random_width_height = Math.floor(Math.random() * 150) + 50;
        // FAUDRA GÉNÉRER UNE COULEUR ALÉATOIRE (3 couleurs primaires (0-256))
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let red = Math.floor(Math.random() * 256);
    
        // FAUDRA CRÉER LE CERCLE (DIV)
        // AVEC LA WIDTH/HEIGHT ALÉATOIRE
        // LA POSITION DU CLICK
        // POSITION ABSOLUTE
        // X : LEFT
        // Y : TOP

        let circle = document.createElement("div");
        circle.style.width = random_width_height + "px";
        circle.style.height = random_width_height + "px";
        circle.style.backgroundColor = `rgb(${blue}, ${green}, ${red})`;
        circle.style.borderRadius = "50%";
        circle.style.position = "absolute";
        circle.style.left = x + "px";
        circle.style.top = y + "px";

        // FAUDRA AJOUTER LE CERCLE CRÉÉ DANS LE BODY (append)
        document.body.append(circle);
    
        // FAUDRA FAIRE DESCENDRE LE CERCLE JUSQU'AU BORD DE L'ÉCRAN EN BAS (animate/onfinish)
        let windowHeigth = window.innerHeight; // objet il contient l'objet document (l'objet le plus grand pour le DOM)
        circle.animate(
            { top: (windowHeigth - random_width_height) + "px" },
            {
                duration:2000,
                easing:"linear",
                iterations: 1,
                fill:"forwards"
            }
        ).onfinish = function() {
            // AU BOUT DE DEUX SECONDES FAUDRA FAIRE DISPARAÎTRE LE CERCLE AVEC UNE ANIMATIONS/TRANSITION
            // SET TIMEOUT
            circle.animate(
                {opacity : 0},
                {
                    duration:1000,
                    easing:"linear",
                    iterations: 1,
                    fill:"forwards"
                }
            );
            setTimeout(function(){
                circle.remove()
            }, 1000);
        };

    
        // your code here



    });

});