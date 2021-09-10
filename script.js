function getValue() // fonction qui recupère ma valeur taille dans data lorsque j'appuie sur mon input
{
    var takeId = document.getElementById("taille").value;
    //alert("Nombre de case du tableau selectionné : "+takeId);
    let laby = new Labyrinthe(data, takeId, 0);
    console.log(laby.exemple)
    laby.createLab();
}

document.querySelector('body').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getValue();
    }
});
