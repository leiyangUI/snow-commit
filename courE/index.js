const body = document.body;
let color_value = 50;

// CRÉATION D'UN FLOCON
function snow_fall() {
  let snow = document.createElement("div");
  // JE CRÉER UN CHIFFRE ALÉATOIRE ENTRE 1 ET 7 QUI VA ME PERMETTRE DE RENDRE INTERDÉPENDANT
  // LA TAILLE, LA COULEUR, LE BLUR ET LA DURÉE DE L'ANIMATION
  let ratio = Math.random() * 7 + 1;
  // J'AFFECTE UNE CLASS POUR MODIFIER LES FLOCONS CÔTÉ CSS
  snow.className = "snow";
  // LA TAILLE
  snow.style.width = ratio * 2 + "px";
  snow.style.height = ratio * 2 + "px";
  // LA COULEUR QUI VARIE EN FONCTION DE LA TAILLE DU FLOCON
  snow.style.backgroundColor = `rgb(${color_value * ratio}, ${
    color_value * ratio
  }, ${color_value * ratio})`;
  // LE BLUR QUI VARIE EN FONCTION DE LA TAILLE DU FLOCON
  snow.style.filter = `blur(${10 / ratio}px)`;
  // JE POSITIONNE MON FLOCON ALÉATOIREMENT SUR L'AXE DES ORDONNÉE ENTRE 0 ET LA LONGUEUR DE MON ÉCRAN
  snow.style.left = Math.random() * window.innerWidth + "px";
  // UNE DURÉE D'ANIMATION QUI DÉPEND DE LA TAILLE DU FLOCON
  // POUR S'ASSURER QUE LES GROS FLOCONS TOMBENT PLUS VITE QUE LES PETITS
  snow.style.animationDuration = 10 / ratio + "s";
  // J'AFFECTE LES FLOCONS AU CORPS DE LA PAGE
  body.appendChild(snow);
  // LES FLOCONS SONT SUPPRIMÉS APRÈS UN CERTAIN TEMPS
  // POUR ÉVITER DE SURCHARGER LA PAGE HTML DE DIV
  setTimeout(() => {
    snow.remove();
    // COMME LES FLOCONS N'ATTEIGNENT PAS LE BAS DE LA PAGE EN MÊME TEMPS
    // LE TEMPS APRÈS LE-QUEL EST SUPPRIMÉ EST DYNAMIQUE
  }, (15 / ratio) * 1000);
}

// GÉNÉRER DES FLOCONS TOUTES LES 50 MILLISECONDES
setInterval(snow_fall, 50);
