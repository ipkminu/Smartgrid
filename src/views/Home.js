import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <div className="container boutons">
                <div className="row">
                    <Link to="/jouer">
                        <button className="btn ">
                            Jouer
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/espace">
                        <button className="btn ">
                            Mon espace
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/aide">
                        <button className="btn ">
                            Aide
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <Link to="/cgus">
                        <button className="btn ">
                            CGUs
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
}