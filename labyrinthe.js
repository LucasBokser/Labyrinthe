class Labyrinthe {
    //tab = [];
    constructor(data, taille, exemple) {
        this.exemple = data[taille.toString()]['ex-' + exemple.toString()]; // mon fichier laby
        this.taille = taille;
    }

    getExemple() {
        return this.exemple;
    }

    createLab() {
        if (document.getElementById('board')) {
            document.getElementById('board').remove(); // pour supprimer mon element board quand je change de datayrinthe
        }
        let board = document.createElement('div');
        board.setAttribute('id', 'board');
        board.style.width = (this.taille * 50) + 'px';
        board.style.height = (this.taille * 50) + 'px';

        for (let elem of this.exemple) {
            let carre = new Case(elem, this.taille);
            board.append(carre.createCase());
            // console.log(carre)
        }
        document.querySelector('body').append(board);
    }


    resolutionDuLaby() {
        //boucle while à faire

        let currentPosition = 0;
        this.exemple[currentPosition].cailloux = true;
        let intersection = [];
        while (currentPosition != this.exemple.length - 1) {
            let showMyN = this.GetMyN(currentPosition, parseInt(this.taille));

            if (showMyN.length === 0) {
                console.log("it's a trap")
                currentPosition = intersection.pop();
            }
            if (showMyN.length === 2 || showMyN.length === 3) {
                console.log("oss 117 style")
                intersection.push(currentPosition);
            }
            for (let i = 0; i < showMyN.length; i++) {
                if (!this.exemple[showMyN[i]].cailloux) {
                    currentPosition = showMyN[i];
                    this.colorCase(this.exemple[currentPosition]);
                    this.exemple[currentPosition].cailloux = true;
                    i = showMyN.length;
                }
            }
        }
    }

    colorCase(myCase) {
        myCase = document.getElementById(myCase.posX + "-" + myCase.posY);
        //myCase.style.backgroundColor = "#00FFFF"
        myCase.style.backgroundImage = "url('https://i.pinimg.com/originals/8c/c6/6f/8cc66f457cccbc799681d1f189bae077.jpg')"
        myCase.style.backgroundSize = "cover";
    }

    GetMyN(position, taille) {
        let labNeighbour = [];

        if (!this.exemple[position].walls[0] && this.exemple[position - taille].cailloux !== true) {
            labNeighbour.push(position - taille)
        }
        if (!this.exemple[position].walls[1] && this.exemple[position + 1].cailloux !== true) {
            labNeighbour.push(position + 1)
        }
        if (!this.exemple[position].walls[2] && this.exemple[position + taille].cailloux !== true) {
            labNeighbour.push(position + taille)
        }
        if (!this.exemple[position].walls[3] && this.exemple[position - 1].cailloux !== true) {
            labNeighbour.push(position - 1)
        }
        return labNeighbour;
    }
}

