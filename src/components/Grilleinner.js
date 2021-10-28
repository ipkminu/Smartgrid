import React from "react"
import IA from "./IA";

export default class Grilleinner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            messageFin: "Fin du jeu"
        };

    }
    messageFin = ""
    color(i, j) {
        var num = this.props.data.grille[i][j]
        //console.log(num)
        //var num = 2;
        if (num === 0) return "white"
        else if (num === 1) return "yellow"
        else if (num === 2) return "red";

    }
    update_color(joueur) {

        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 6; i++) {

                var el = document.getElementById("col" + j).querySelector(".l" + i);
                var num = this.props.data.grille[i][j]
                var couleur = "";
                if (num === 0) couleur = "white"
                else if (num === 1) couleur = "yellow"
                else if (num === 2) couleur = "red";
                el.style.backgroundColor = couleur;
            }
        }

        this.fin_jeu(joueur);
    }
    placement_machine() {
        //console.log("Placement de la machine");
        if (this.props.data.jeu.courant === 3 - this.props.data.joueur.couleur) {
            var libres = [];
            for (let j = 0; j < 7; j++) {
                if (this.props.data.grille[5][j] === 0) {
                    libres.push(j);
                }
            }
            //console.log("libres:" + libres)
            //var choix = libres[Math.floor(Math.random() * libres.length)] //Choix de la machine

            var choix = (new IA()).choix((new IA()).cp_grille(this.props.data.grille), 2)
            console.log("choix machine:" + choix)
            for (let i = 0; i < 6; i++) {
                if (this.props.data.grille[i][choix] === 0) {
                    this.props.data.grille[i][choix] = 3 - this.props.data.joueur.couleur
                    this.update_color(3 - this.props.data.joueur.couleur);
                    this.props.data.jeu.courant = 3 - this.props.data.jeu.courant;
                    //console.log(this.props.data.grille)
                    return;
                }
            }
        }
    }
    handleClick(j) {
        //console.log("Click handled");

        //console.log("courant: " + this.props.data.jeu.courant)
        if (this.props.data.jeu.courant === this.props.data.joueur.couleur) {
            for (let i = 0; i < 6; i++) {
                if (this.props.data.grille[i][j] === 0) {
                    this.props.data.grille[i][j] = this.props.data.joueur.couleur
                    this.update_color(this.props.data.joueur.couleur);
                    this.props.data.jeu.courant = 3 - this.props.data.jeu.courant;

                    //console.log(this.props.data.grille)

                    this.placement_machine()
                    return;
                }
            }
        } this.placement_machine()


    }

    fin_jeu(joueur) {

        if (this.smart(joueur)) {

            //this.state.messageFin = "Jeu terminé. Le vainqueur est le joueur n°" + joueur;
            this.setState({
                messageFin: "Jeu terminé. Le vainqueur est le joueur n°" + joueur
            })
            console.log(this.state.messageFin)
            this.props.data.jeu.courant = 0;
            this.props.data.jeu.messageFin = "Jeu terminé. Vainqueur; joueur n°" + joueur
            document.getElementById("finjeu").click();
            return true;
        }

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                if (this.props.data.grille[i][j] === 0) return false;
            }
        }
        this.props.data.jeu.courant = 0;
        console.log("Jeu terminé, grille pleine");
        this.props.data.jeu.messageFin = "Jeu terminé, grille pleine";
        document.getElementById("finjeu").click();
        return true;
    }
    smart(joueur) {
        const grille = this.props.data.grille;
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


    render() {
        return (
            <div>
                <div className="grille">
                    <div id="col0" onClick={() => this.handleClick(0)}>
                        <div className={"l5 p "}></div>
                        <div className={"l4 p "}></div>
                        <div className={"l3 p "}></div>
                        <div className={"l2 p "}></div>
                        <div className={"l1 p "}></div>
                        <div className={"l0 p "}></div>
                    </div>
                    <div id="col1" onClick={() => this.handleClick(1)}>
                        <div className={"l5 p "}></div>
                        <div className={"l4 p "}></div>
                        <div className={"l3 p "}></div>
                        <div className={"l2 p "}></div>
                        <div className={"l1 p "}></div>
                        <div className={"l0 p "}></div>
                    </div>
                    <div id="col2" onClick={() => this.handleClick(2)}>
                        <div className={"l5 p"}></div>
                        <div className={"l4 p"}></div>
                        <div className={"l3 p"}></div>
                        <div className={"l2 p"}></div>
                        <div className={"l1 p"}></div>
                        <div className={"l0 p"}></div>
                    </div>
                    <div id="col3" onClick={() => this.handleClick(3)}>
                        <div className={"l5 p"}></div>
                        <div className={"l4 p"}></div>
                        <div className={"l3 p"}></div>
                        <div className={"l2 p"}></div>
                        <div className={"l1 p"}></div>
                        <div className={"l0 p"}></div>
                    </div>
                    <div id="col4" onClick={() => this.handleClick(4)}>
                        <div className={"l5 p"}></div>
                        <div className={"l4 p"}></div>
                        <div className={"l3 p"}></div>
                        <div className={"l2 p"}></div>
                        <div className={"l1 p"}></div>
                        <div className={"l0 p"}></div>
                    </div>
                    <div id="col5" onClick={() => this.handleClick(5)}>
                        <div className={"l5 p"}></div>
                        <div className={"l4 p"}></div>
                        <div className={"l3 p"}></div>
                        <div className={"l2 p"}></div>
                        <div className={"l1 p"}></div>
                        <div className={"l0 p"}></div>
                    </div>
                    <div id="col6" onClick={() => this.handleClick(6)}>
                        <div className={"l5 p"}></div>
                        <div className={"l4 p"}></div>
                        <div className={"l3 p"}></div>
                        <div className={"l2 p"}></div>
                        <div className={"l1 p"}></div>
                        <div className={"l0 p"}></div>
                    </div>
                </div>


                {/*-- Pause Modal --*/}
                <div className="modal fade" id="pauseModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="pauseModalLongTitle"> Pause</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Arrêt de jeu
                                Vous pouvez continuer à tout moment.
                            </div>
                            <div className="modal-footer">

                                <button type="button" className="btn btn-secondary" data-dismiss="modal" >Quitter</button>

                                <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">Continuer</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/**Fin jeu Modal  */}
                <div id="finjeu" data-toggle="modal" data-target="#finjeuModal" >

                </div>
                <div className="modal fade" id="finjeuModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">The end!!!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.messageFin}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Quitter</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">Nouvelle Partie</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}