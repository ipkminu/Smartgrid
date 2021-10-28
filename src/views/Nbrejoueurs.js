import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

export default class Nbrejoueurs extends React.Component {


    render() {
        return (
            <div>

                <div className="sous-titre">
                    <div>
                        Nombre de Joueurs
                    </div>
                </div>
                <div className="container boutons boutons-nbrejoueurs">
                    <div className="row">
                        <Link to="/nbr1">
                            <button className="btn ">
                                Un
                            </button>
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/grille">
                            <button className="btn ">
                                Deux
                            </button>
                        </Link>
                    </div>

                </div>

            </div>

        );
    }

}