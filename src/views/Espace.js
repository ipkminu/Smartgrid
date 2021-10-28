import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
export default class Espace extends React.Component {
    create_joueur(pseudo) {
        return (
            <li className="player">{pseudo}<button className="btn btn-info match">Match</button></li>
        )
    }
    render() {
        return (
            <div>
                <div className="sous-titre">
                    <div>
                        Mon espace personnel
                    </div>
                </div>
                <div className="container boutons">
                    <div className="row">
                        <Link to="/espace">
                            <button className="btn ">
                                Connexion
                            </button>
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/espace">
                            <button className="btn " class="btn btn-primary" data-toggle="modal" data-target="#playersModal">
                                Joeurs Connectés
                            </button>
                        </Link>
                    </div>
                    <div className="row">
                        <Link to="/espace">
                            <button className="btn ">
                                Mes scores
                            </button>
                        </Link>
                    </div>

                </div>

                {/**Login form */}


                {/**Players list */}


                <div className="modal fade" id="playersModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Joeurs</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul>
                                    {this.create_joueur("Patrick")}
                                    {this.create_joueur("kdjf")}
                                    {this.create_joueur("Phenix")}
                                    {this.create_joueur("Fire")}
                                    {this.create_joueur("Ipkminu")}
                                    {this.create_joueur("Boxer")}
                                    {this.create_joueur("King_smart")}
                                    {this.create_joueur("Fire_taker")}
                                    {this.create_joueur("Blouball")}
                                    {this.create_joueur("Tiktifer")}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}