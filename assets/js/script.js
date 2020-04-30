// Création de la fonction de calcul et action onclick
document.getElementById('submit').onclick = function calculation() {
// Récupération des valeurs
var shoeSize = document.getElementById('shoesize').value;
var yearBirth = document.getElementById('yearBirth').value;
// création de l'alerte
alert((shoeSize * 2 + 5) * 50 - yearBirth + 1769);
}
