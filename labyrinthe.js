class Labyrinthe {
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
        }
        document.querySelector('body').append(board);
    }

// Mon algo maison
    async resolutionDuLaby() {
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
                    await this.colorCase(this.exemple[currentPosition]); // colorie ma case cf fonction colorCase
                    this.exemple[currentPosition].cailloux = true; // visité oui
                    i = showMyN.length; // empecher qu'il continue même à la fin du laby
                }
            }
        }
    }

    //Methode DFS
    async resolutionDuLabyDFS() {
        let currentPosition = 0;
        console.log(this.exemple.length - 1);
        let stack = [];
        stack.push(currentPosition)
        console.log(stack)
        this.exemple[currentPosition].cailloux = true;
       // let labNeighbour;

        while (stack.length != 0) { // tant que la taille de stack est différente de 0

            currentPosition = stack.pop(); // recupere le dernier element
            console.log(currentPosition)
            this.exemple[currentPosition].cailloux = true;// je pose mon cailloux si visité
            console.log(currentPosition)

            if (currentPosition === this.exemple.length - 1) {// suis je arrivé à la fin ?
                console.log("tu as gagné")
                return stack;
            }
            let labNeighbour = this.GetMyN(currentPosition, parseInt(this.taille)); // je fais appel à ma fonction et verifie si il y a des voisins pas encore visités
            for (let voisin of labNeighbour) {
                if (labNeighbour.cailloux === undefined) {// si pas visité
                    stack.push(voisin)// push dans le voisin
                    console.log(stack)
                }
            }
            console.log(currentPosition);
            await this.colorCase(this.exemple[currentPosition]);// color ma case d'avancement
        }
    }

    //Methode BFS
    async resolutionDuLabyBFS() {
        let currentPosition = 0;
        console.log(this.exemple.length - 1);
        let queue = [];
        queue.push(currentPosition)
        console.log(queue)
        let labNeighbour;

        while (queue.length != 0) { // tant que la taille de stack est différente de 0

            currentPosition = queue.shift(); // Je recupere le premier element
            console.log(currentPosition)
            this.exemple[currentPosition].cailloux = true; // je pose mon cailloux si visité
            console.log(currentPosition)

            if (currentPosition === this.exemple.length - 1) { // suis je arrivé à la fin ?
                console.log("tu as gagné")
                return queue; // retourne le chemin
            }
            labNeighbour = this.GetMyN(currentPosition, parseInt(this.taille)); // je fais appel à ma fonction et verifie si il y a des voisins pas encore visités
            for (let voisin of labNeighbour) {
                if (labNeighbour.cailloux === undefined) { // si pas visité
                    queue.push(voisin) // push dans le voisin
                    console.log(queue)
                }
            }
            console.log(currentPosition);
            await this.colorCase(this.exemple[currentPosition]); // color ma case d'avancement
        }
    }


    async colorCase(myCase) {
        myCase = document.getElementById(myCase.posX + "-" + myCase.posY);
        myCase.style.backgroundImage = "url('https://i.pinimg.com/originals/8c/c6/6f/8cc66f457cccbc799681d1f189bae077.jpg')"
        myCase.style.backgroundSize = "cover";
        await delay(300);
    }

    GetMyN(position, taille) {
        let labNeighbour = [];

        if (!this.exemple[position].walls[0] && this.exemple[position - taille].cailloux !== true) {
           // console.log(this.exemple[position].walls[0])
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

    delay(delayInms) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }
}



