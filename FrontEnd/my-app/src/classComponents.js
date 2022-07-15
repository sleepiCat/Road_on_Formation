import React from 'react';
import ReactDOM from 'react-dom/client';





class Board extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    render () {
        return (
            <div>
                
                <div className="column">
                <button className="row1" onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
                <button className="row2" onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
                <button className="row3" onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
                <button className="row4" onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
                <button className="row5" onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
                <button className="row6" onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
                <button className="row7" onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment
                </button>
                </div>
            </div>
        );
    }
}

