import React from 'react';
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Login from "./views/Login";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {

    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </Router>
        )
    }
}

export default App;
