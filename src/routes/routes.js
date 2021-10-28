import React from "react";
import Home from '../views/Home';
import Nbrejoueurs from '../views/Nbrejoueurs';
import Niveaujeu from "../views/Niveaujeu";
import Grille from "../views/Grille";
import Aide from '../views/Aide';
import Cgus from '../views/Cgus';
import Espace from '../views/Espace'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <div>
                <div className="titre">
                    <div>
                        <Link to="/">
                            SMARTGRID
                        </Link>
                    </div>
                </div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/jouer">
                        <Nbrejoueurs />
                    </Route>
                    <Route path="/nbr1">
                        <Niveaujeu />
                    </Route>
                    <Route path="/grille">
                        <Grille />
                    </Route>

                    <Route path="/aide">
                        <Aide />
                    </Route>
                    <Route path="/cgus">
                        <Cgus />
                    </Route>

                    <Route path="/espace">
                        <Espace />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


