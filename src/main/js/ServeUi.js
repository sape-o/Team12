var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class ServeMeal extends React.Component {
    constructor() {
        super();
        this.state = {
            dish: [],
            drink: [],
            dessert: [],
            selectedDish: '',
            selectedDrink: '',
            selectedDessert: ''
        };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/serveDishes' }).done(response => {
            this.setState({ dish: response.entity._embedded.serveDishes });
        });
        client({ method: 'GET', path: '/api/serveDrinks' }).done(response => {
            this.setState({ drink: response.entity._embedded.serveDrinks });
        });
        client({ method: 'GET', path: '/api/serveDesserts' }).done(response => {
            this.setState({ dessert: response.entity._embedded.serveDesserts });
        });
    }

    handleFood() {
        if( typeof this.state.selectedDish === 'string' || typeof this.state.selectedDrink === 'string' || typeof this.state.selectedDrink === 'string') {
            ons.notification.alert('select!')
        } else {
            var dishId = this.state.selectedDish._links.self.href.split('/').pop()
            var drinkId = this.state.selectedDrink._links.self.href.split('/').pop()
            var dessertId = this.state.selectedDessert._links.self.href.split('/').pop()
            var patientId = this.props.patient._links.self.href.split('/').pop()
            client({
                method: 'GET', path: '/dish_id/' + dishId + '/drink_id/' + drinkId + '/dessert_id/' + dessertId + '/patient_id/' + patientId
            }).done(response => {
                ons.notification.alert('done!')
            }, response => {
                ons.notification.alert(response.status.code + '!');
            });
        }
    }

    renderDish(row) {
        return (
            <Ons.ListItem
                tappable
                key={row._links.self.href}
                data={row}
            >
                <label className='left'>
                    <Ons.Radio
                        inputId={`checkbox-${row.name}`}
                        checked={row === this.state.selectedDish}
                        onChange={() => this.setState({ selectedDish: row })}
                    />
                </label>
                <label htmlFor={`checkbox-${row.name}`} className='center'>
                    {row.name}
                </label>
            </Ons.ListItem>
        );
    }

    renderDrink(row) {
        return (
            <Ons.ListItem
                tappable
                key={row._links.self.href}
                data={row}
            >
                <label className='left'>
                    <Ons.Radio
                        inputId={`checkbox-${row.name}`}
                        checked={row === this.state.selectedDrink}
                        onChange={() => this.setState({ selectedDrink: row })}
                    />
                </label>
                <label htmlFor={`checkbox-${row.name}`} className='center'>
                    {row.name}
                </label>
            </Ons.ListItem>
        );
    }

    renderDessert(row) {
        return (
            <Ons.ListItem
                tappable
                key={row._links.self.href}
                data={row}
            >
                <label className='left'>
                    <Ons.Radio
                        inputId={`checkbox-${row.name}`}
                        checked={row === this.state.selectedDessert}
                        onChange={() => this.setState({ selectedDessert: row })}
                    />
                </label>
                <label htmlFor={`checkbox-${row.name}`} className='center'>
                    {row.name}
                </label>
            </Ons.ListItem>
        );
    }

    render() {
        return (
            <Ons.Page renderToolbar={() =>
                <Ons.Toolbar>
                    <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                    <div className='center'>
                        {this.props.patient.firstName} &nbsp;&nbsp;&nbsp;
                        {this.props.patient.patientLastName} &nbsp;&nbsp;&nbsp;
                        {this.props.patient.allergy}
                    </div>
                </Ons.Toolbar>
            }>
                <div className="content">
                    <Ons.Card>
                        <Ons.List
                            dataSource={this.state.dish}
                            renderHeader={() => <Ons.ListHeader>Dishs</Ons.ListHeader>}
                            renderRow={this.renderDish.bind(this)}
                        />
                    </Ons.Card>
                    <Ons.Card>
                        <Ons.List
                            dataSource={this.state.drink}
                            renderHeader={() => <Ons.ListHeader>Drinks</Ons.ListHeader>}
                            renderRow={this.renderDrink.bind(this)}
                        />
                    </Ons.Card>
                    <Ons.Card>
                        <Ons.List
                            dataSource={this.state.dessert}
                            renderHeader={() => <Ons.ListHeader>Dessert</Ons.ListHeader>}
                            renderRow={this.renderDessert.bind(this)}
                        />
                    </Ons.Card>
                </div>
                <Ons.Card>
                    <section style={{ textAlign: 'center' }}>
                        <ons-button modifier="outline" onClick={this.handleFood.bind(this)}>
                            <ons-icon size="40px" icon="ion-ios-checkmark-outline" ></ons-icon>
                        </ons-button>
                    </section>
                </Ons.Card>
            </Ons.Page>
        );
    }
}

class ServePatient extends React.Component {
    constructor() {
        super();
        this.state = { patient: [] };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/patientSaves' }).done(response => {
            this.setState({ patient: response.entity._embedded.patientSaves });
        });
    }

    renderRow(row, index) {
        return (
            <Ons.ListItem
                key={row._links.self.href}
                data={row}
                onClick={event => this.props.navigator.pushPage({ component: ServeMeal, props: { key: 'serveMeal', patient: row } }, { animation: 'fade-ios' })}
            >
                <div className='center'>{row.firstName} &nbsp;&nbsp;&nbsp;{row.patientLastName}</div>
                <div className='right'>{row.allergy}</div>
            </Ons.ListItem>
        );
    }

    render() {
        return (
            <Ons.Page renderToolbar={() => <Ons.Toolbar><div className='center'>{'Nutritionist'}</div></Ons.Toolbar>}>
                <Ons.Card>
                    <Ons.List
                        dataSource={this.state.patient}
                        renderHeader={() => <Ons.ListHeader>Patients</Ons.ListHeader>}
                        renderRow={this.renderRow.bind(this)}
                    />
                </Ons.Card>
            </Ons.Page>
        );
    }
}

export default class ServeApp extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.loadPage = this.loadPage.bind(this);
    }

    hide() {
        this.setState({ isOpen: false });
    }

    show() {
        this.setState({ isOpen: true });
    }

    loadPage(page) {
        this.hide();
        this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade-ios' });
    }

    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;
        route.props.showMenu = this.show.bind(this);
        return React.createElement(route.component, route.props);
    }

    render() {
        return (
            <Ons.Splitter>
                <Ons.SplitterContent>
                    <Ons.Navigator initialRoute={{ component: ServePatient, props: { key: 'servePatient' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
}