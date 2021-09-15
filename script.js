function getValue() // fonction qui recupère ma valeur taille dans data lorsque j'appuie sur mon input
{
    var takeId = document.getElementById("taille").value;
    let laby = new Labyrinthe(data, takeId, 0);
    laby.createLab();

}
function start(){
    var takeId = document.getElementById("taille").value;
    let laby = new Labyrinthe(data, takeId, 0);
    laby.resolutionDuLaby();
}
document.querySelector('body').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getValue();
    }
});

