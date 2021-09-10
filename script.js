

function getValue()
{
    var takeId = document.getElementById("taille").value;
    //alert("Nombre de case du tableau selectionné : "+takeId);
    let laby = new Labyrinthe(data, takeId, 0);
    console.log(laby.exemple)
    laby.createLab();
}

//let takeId = document.getElementById("taille").value;

/*
function randomMaze(min,max){
    min = Math.ceil(3);
    max = Math.floor(25);
return Math.floor(Math.random()*(max-min+1))+min;
}
*/