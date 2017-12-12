import * as React from "react";
import * as ReactDOM from "react-dom";

// stateful component
type AppProps = {
    message: string
};

type AppState = {
    count: number
};

class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increment = this.increment.bind(this);
    }

    public increment() {
        this.setState({
            count: this.state.count + 1
        });
    }

    public render() {
        return (
            <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
        );
    }
}

ReactDOM.render(
    <App message="Hello World! :)"/>,
    document.getElementById("root")
);
