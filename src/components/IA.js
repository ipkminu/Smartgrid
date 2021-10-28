
export default class IA {
    constructor(grille, couleur_machine) {
        this.grille = grille;
        this.couleur = couleur_machine;

    }

    cp_grille(grille) {
        var tab = new Array(6)
        for (let i = 0; i < 6; i++) {
            tab[i] = new Array(7)
            for (let j = 0; j < 7; j++) {
                tab[i][j] = grille[i][j];
            }
        }
        return tab;
    }

    create_fils(pere, joueur, colonne) {
        var copie = this.cp_grille(pere);
        for (let i = 0; i < 6; i++) {
            if (copie[i][colonne] === 0) {
                copie[i][colonne] = joueur;
                return copie;
            }
        }
        return null;
    }
    smart4(grille, joueur) {
        if (grille === null) return 0;
        //Verticales
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 3; i++) {
                if (grille[i][j] === joueur && grille[i + 1][j] === joueur && grille[i + 2][j] === joueur && grille[i + 3][j] === joueur) {
                    //console.log(grille)
                    //console.log("Verticales")
                    return true;
                }
            }
        }
        //Horizontales
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                if (grille[i][j] === joueur && grille[i][j + 1] === joueur && grille[i][j + 2] === joueur && grille[i][j + 3] === joueur) {
                    //console.log("Horiontales")
                    return true;
                }
            }
        }
        //Oblique /
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (grille[i][j] === joueur && grille[i + 1][j + 1] === joueur && grille[i + 2][j + 2] === joueur && grille[i + 3][j + 3] === joueur) {
                    return true;
                }
            }
        }
        //Oblique \
        for (let i = 0; i < 3; i++) {
            for (let j = 3; j < 7; j++) {
                if (grille[i][j] === joueur && grille[i + 1][j - 1] === joueur && grille[i + 2][j - 2] === joueur && grille[i + 3][j - 3] === joueur) {
                    return true;
                }
            }
        }
        return false;
    }
    smart3(grille, joueur) {

        //Verticales
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 4; i++) {
                if (grille[i][j] === joueur && grille[i + 1][j] === joueur && grille[i + 2][j] === joueur) {
                    //console.log(grille)
                    //console.log("Verticales")
                    return true;
                }
            }
        }
        //Horizontales
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 5; j++) {
                if (grille[i][j] === joueur && grille[i][j + 1] === joueur && grille[i][j + 2] === joueur) {
                    //console.log("Horiontales")
                    return true;
                }
            }
        }
        //Oblique /
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 5; j++) {
                if (grille[i][j] === joueur && grille[i + 1][j + 1] === joueur && grille[i + 2][j + 2] === joueur) {
                    return true;
                }
            }
        }
        //Oblique \
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j < 7; j++) {
                if (grille[i][j] === joueur && grille[i + 1][j - 1] === joueur && grille[i + 2][j - 2] === joueur) {
                    return true;
                }
            }
        }
        return false;
    }

    smart2(grille, joueur) {
        //Verticales
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 5; i++) {
                if (grille[i][j] === joueur && grille[i + 1][j] === joueur) {
                    //console.log(grille)
                    //console.log("Verticales")
                    return true;
                }
            }
        }
        //Horizontales
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                if (grille[i][j] === joueur && grille[i][j + 1] === joueur) {
                    //console.log("Horiontales")
                    return true;
                }
            }
        }
        //Oblique /
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 6; j++) {
                if (grille[i][j] === joueur && grille[i + 1][j + 1] === joueur) {
                    return true;
                }
            }
        }
        //Oblique \
        for (let i = 0; i < 5; i++) {
            for (let j = 1; j < 7; j++) {
                if (grille[i][j] === joueur && grille[i + 1][j - 1] === joueur) {
                    return true;
                }
            }
        }
        return false;

    }

    heuristique(grille, joueur, colonne) { //Notation des colonnes 
        var fils = this.create_fils(grille, joueur, colonne);
        if (fils === null) return 0;
        var note = 0;
        if (this.smart4(fils, joueur)) note += 100000;
        //Vérifier que l'adversaire ne fait pas un smart au prochain coup
        if (this.smart4(this.create_fils(grille, 3 - joueur, colonne), 3 - joueur)) note += 10000;

        if (this.smart3(this.create_fils(grille, 3 - joueur, colonne), 3 - joueur)) note += 1000;
        if (this.smart3(fils, joueur)) note += 1000;
        if (this.smart2(fils, joueur)) note += 100;
        if (this.smart2(this.create_fils(grille, 3 - joueur, colonne), 3 - joueur)) note += 10;
        return note;
    }

    choix(grille, joueur) {
        var note = 0, col = 0;
        for (let j = 0; j < 7; j++) {
            var h = this.heuristique(grille, joueur, j);
            if (h > note) {
                note = h;
                col = j;
            }

        }
        return col;
    }


}