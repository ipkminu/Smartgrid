import Grilleinner from "../components/Grilleinner"
import ReactDOM from 'react-dom';
import React from "react"
import { Link } from "react-router-dom"

class Grille extends React.Component {
    constructor(props) {
        super(props);
        var courant = Math.floor(Math.random() * 2 + 1);
        this.state = ({
            grille: ([
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
            ]),
            grille_hist: ([
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
                [0, 0, 0, 0, 0, 0, 0,],
            ]),
            joueur: {
                pseudo: "",
                couleur: 1
            },
            jeu: {
                identifiant: null,
                niveau: 1,
                Vainqueur: null,
                courant: Math.floor(Math.random() * 2 + 1),
                messageFin: "fin"
            }


        })
    }
    Color(i) {
        if (i === 0) {
            return "white";
        }
        else if (i === 1) {
            return "red"
        }
        else if (i === 2) return "yellow";
    }
    render() {
        return (
            <div>

                <div className="sous-titre">
                    <div>
                        Jeu {/**Pion du joueur et bouton de pause à ajouter */}
                    </div>
                </div>
                <div className="controles" >
                    <div className="sous-titre">
                        <div data-toggle="modal" data-target="#pauseModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white" className="bi bi-pause-fill" viewBox="0 0 16 16">
                                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                            </svg>
                            {/* Modal à ajouter pour la pause */}
                        </div>
                    </div>
                    <div className="sous-titre">
                        <div>Player:</div>
                    </div>
                    <div className="sous-titre">
                        <div>
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle fill={this.Color(this.state.jeu.courant)} cx="30" cy="30" r="30" />
                            </svg>
                        </div>
                    </div>
                </div>

                <Grilleinner data={this.state} />

            </div >
        )
    }

}

export default Grille;