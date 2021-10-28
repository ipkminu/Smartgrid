import React from "react";
import { Link } from "react-router-dom";
export default function Niveaujeu() {
    return (
        <div>

            <div className="sous-titre">
                <div>
                    Niveau de jeu
                </div>
            </div>
            <div className="container boutons boutons-nbrejoueurs">
                <div className="row">
                    <Link to="/grille">
                        <button className="btn ">
                            Facile
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/grille">
                        <button className="btn ">
                            Moyen
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/grille">
                        <button className="btn ">
                            Hard
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    );
}