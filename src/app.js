class IndecissionApp extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                {/*<p>{app.options.length ? app.optionTitle : app.noOptionTitle}</p>*/}
                <Action/>
                {/*<button onClick={onRemoveAll}>Remove All</button>*/}
                <Options/>
                <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision app</h1>
                <h3>Put your life in the hands of a computer</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                <Option/>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option component here
            </div>
        );
    }
}

class AddOption extends React.Component{
    render() {
        return (
            <div>
                AddOption component here
            </div>
        );
    }
}

ReactDOM.render(<IndecissionApp/>, document.getElementById('app'));
