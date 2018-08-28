import React from 'react';
import './assets/css/argon.css';
import './assets/css/argon.min.css';
import {Progress} from 'reactstrap';

class App extends React.Component {

    render() {
        return(
            <div>
                <h1>App</h1>
                <div style={{width : "300px"}}>
                    <div className="progress-info">
                        <div className="progress-label">
                            <span>Task completed</span>
                        </div>
                        <div className="progress-percentage">
                            <span>60%</span>
                        </div>
                    </div>
                    <Progress/>
                </div>
            </div>
        )
    }
}

export default App;
