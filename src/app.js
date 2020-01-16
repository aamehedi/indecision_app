console.log('app is running!');

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <h3>{app.subtitle}</h3>
            <p>{app.options.length ? app.optionTitle : app.noOptionTitle}</p>
            <button disabled={!app.options.length} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option, index) => <li key={index}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <input type="submit" value="Add Option"/>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    optionTitle: 'Here are your options',
    noOptionTitle: 'No options',
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    if (option)
        alert(option);
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

render();
