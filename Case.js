class Case {
    color = '#FF0000';
    tailleCase = "50px";
    constructor(objet, taille) {
        this.posX = objet.posX;
        this.posY = objet.posY;
        this.wallUp = objet.walls[0];
        this.wallRight = objet.walls[1];
        this.wallDown = objet.walls[2];
        this.wallLeft = objet.walls[3];
        this.taille = taille
    }

    createCase() { //Création de mon labyrinthe

        let carre = document.createElement('div');
        carre.style.width = '50px';
        carre.style.height = '50px';
        carre.style.backgroundColor = '#000000'
        carre.setAttribute("id", this.posX + "-" + this.posY)
        if (this.wallUp) {
            carre.style.borderTop = 'solid 2px' + this.color
        }
        if (this.wallRight) {
            carre.style.borderRight = 'solid 2px' + this.color
        }
        if (this.wallDown) {
            carre.style.borderBottom = 'solid 2px' + this.color
        }
        if (this.wallLeft) {
            carre.style.borderLeft = 'solid 2px' + this.color
        }
        if (this.posX === 0 && this.posY === 0) {  //Ma case de depart en bleu
            carre.style.backgroundImage = "url('https://static.cnews.fr/sites/default/files/styles/image_640_360/public/capture_decran_2021-08-04_a_11.02.26_610a5a7501f26_0.png?itok=TpULSAME')"
            carre.style.backgroundSize = "50px 50px"
        }
        if (this.posX === (this.taille - 1) && this.posY === (this.taille - 1)) { //Ma case d'arrivé en rouge
            carre.style.backgroundImage = "url('https://i.ytimg.com/vi/Y7UerxH5jf8/maxresdefault.jpg')"
            carre.style.backgroundSize = "50px 50px"
        }
        return carre
    }
}

