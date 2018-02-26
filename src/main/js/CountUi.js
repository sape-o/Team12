var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class CountForm extends React.Component {
    constructor() {
        super();
        this.state = {
            sum: 0,
            room: [],
            familyName: '',
            familyPhone: '',
            familyLine: '',
            familyBankName: '',
            familyBankAccount: ''
        };

        this.theRoom = function (objArray, name) {
            for (var prop in objArray) {
                if (objArray[prop].patientsave.firstName === name) { return objArray[prop]; }
            }
        }

        this.theDate = function (start, stop) {
            var startDate = new Date(start);
            var stopDate = new Date(stop);
            return Math.floor((Date.UTC(stopDate.getFullYear(), stopDate.getMonth(), stopDate.getDate()) - Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate())) / (1000 * 60 * 60 * 24));
        }

        this.theTime = function (length, price) {
            return length * price;
        }
    }

    componentDidMount() {
        var room = this.theRoom(this.props.room, this.props.patient.firstName);
        this.setState({ room: [room] });
        var length = this.theDate(room.dateIn, room.dateOut);
        var sum = this.theTime(length, room.room.pricebed);
        this.setState({ sum: sum });
    }

    handleSave() {
        var patientId = this.props.patient._links.self.href.split('/').pop()
        var roomId = this.state.room[0].id
        var bankId = this.props.bank[0]._links.self.href.split('/').pop()
        var idCard = this.props.bank[0].idCard
        var name = this.props.bank[0].name
        var line = this.props.bank[0].line - this.state.sum

        client({
            method: 'GET', path: '/patient_id/' + patientId + '/sum/' + this.state.sum + '/bank_id/' + bankId + '/room_id/' + roomId
        }).done(response => {
            client({
                method: 'GET', path: '/bank_id/' + bankId + '/id_card/' + idCard + '/name/' + name + '/line/' + line
            }).done(response => {
                ons.notification.alert('done!')
            })
        }, response => {
            ons.notification.alert(response.status.code + '!');
        })
    }

    handleFamily() {
        var roomId = this.state.room[0].id
        var patientId = this.props.patient._links.self.href.split('/').pop();     
        client({  
            method: 'GET', path: '/family_name/' + this.state.familyName + '/family_phone/' + this.state.familyPhone + '/family_line/' + this.state.familyLine + '/family_bank_name/' + this.state.familyBankName + '/family_bank_account/' + this.state.familyBankAccount + '/patient_id/' + patientId + '/cost/' + this.state.sum + '/room_id/' + roomId
        }).done(response => {
            ons.notification.alert('done!')
        }, response => {
            ons.notification.alert(response.status.code + '!');
        })
    }

    renderRoom(row, index) {
        var dateIn = new Date(row.dateIn);
        var dateOut = new Date(row.dateOut);
        return (
            <Ons.ListItem
                tappable
                key={row}
                data={row}
            >
                <label className='center'>
                    {dateIn.getDate() + "/" + (dateIn.getMonth() + 1) + "/" + dateIn.getFullYear()}
                    &nbsp;{'-'}&nbsp;
                    {dateOut.getDate() + "/" + (dateOut.getMonth() + 1) + "/" + dateOut.getFullYear()}&nbsp;&nbsp;&nbsp;
                    {row.room.function}
                </label>
                <label className='right'>
                    {this.state.sum}
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
                        {this.props.patient.firstName}
                    </div>
                </Ons.Toolbar>
            }>
                <Ons.Card>
                    <div className="content">
                        <Ons.List
                            dataSource={this.state.room}
                            renderHeader={() => <Ons.ListHeader>Room</Ons.ListHeader>}
                            renderRow={this.renderRoom.bind(this)}
                        />
                    </div>
                    <p>
                        <section style={{ textAlign: 'center' }}>
                            <ons-button modifier="outline" onClick={this.handleSave.bind(this)}>
                                <ons-icon size="40px" icon="ion-ios-checkmark-outline" ></ons-icon>
                            </ons-button>
                        </section>
                    </p>
                </Ons.Card>
                <Ons.Card>
                    <section style={{ textAlign: 'center' }}>
                        <p>
                            <Ons.Input
                                placeholder='Name: [a-zA-Z/s]*'
                                modifier='material'
                                value={this.state.familyName}
                                onChange={event => this.setState({ familyName: event.target.value })}
                            />
                        </p>
                        <p>
                            <Ons.Input
                                placeholder='Phone: 0[689]-xxxx-xxxx'
                                modifier='material'
                                value={this.state.familyPhone}
                                onChange={event => this.setState({ familyPhone: event.target.value })}
                            />
                        </p>
                        <p>
                            <Ons.Input
                                placeholder='Line: w*'
                                modifier='material'
                                value={this.state.familyLine}
                                onChange={event => this.setState({ familyLine: event.target.value })}
                            />
                        </p>
                        <p>
                            <Ons.Input
                                placeholder='Bangkok|Kasikorn|Krungthai'
                                modifier='material'
                                value={this.state.familyBankName}
                                onChange={event => this.setState({ familyBankName: event.target.value })}
                            />
                        </p>
                        <p>
                            <Ons.Input
                                placeholder='Acccount: d{10}'
                                modifier='material'
                                value={this.state.familyBankAccount}
                                onChange={event => this.setState({ familyBankAccount: event.target.value })}
                            />
                        </p>
                        <p>
                            <ons-button modifier="outline" onClick={this.handleFamily.bind(this)}>
                                <ons-icon size="40px" icon="ion-ios-checkmark-outline" ></ons-icon>
                            </ons-button>
                        </p>
                    </section>
                </Ons.Card>
            </Ons.Page>
        );
    }
}

class CountPatient extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            patient: [],
            room: [],
            bank: []
        };
    }

    componentDidMount() {
        client({
            method: 'GET', path: '/api/saveRooms'
        }).done(response => {
            this.setState({ room: response.entity._embedded.saveRooms });
        });
    }

    handleSearch() {
        if (this.state.search === '') {
            ons.notification.alert('empty!');
        } else {
            client({
                method: 'GET', path: '/api/patientSaves/search/findByFirstName?FirstName=' + this.state.search
            }).done(response => {
                this.setState({ patient: [response.entity] });
                client({
                    method: 'GET', path: '/api/countBanks/search/findByName?Name=' + this.state.search
                }).done(response => {
                    this.setState({ bank: [response.entity] });
                })
            }, response => {
                ons.notification.alert(response.status.code + '!');
            })
        }
    }

    renderRow(row, index) {
        return (
            <Ons.ListItem
                key={row}
                data={row}
            >
                <div className='center'>
                    {row.firstName} &nbsp;&nbsp;&nbsp;
            </div>
                <div className='right'>
                    <ons-button
                        modifier="outline" onClick={this.handleClick}
                        onClick={event => this.props.navigator.pushPage({ component: CountForm, props: { key: 'CountForm', patient: row, medicine: this.state.medicine, room: this.state.room, bank: this.state.bank } }, { animation: 'fade-ios' })}
                    >
                        <ons-icon size="40px" icon="ion-ios-eye-outline" ></ons-icon>
                    </ons-button>
                </div>
            </Ons.ListItem>
        );
    }

    render() {
        return (
            <Ons.Page renderToolbar={() =>
                <Ons.Toolbar>
                    <div className='center'>{'Counter'}</div>
                </Ons.Toolbar>
            }>
                <Ons.Card>
                    <section style={{ textAlign: 'center' }}>
                        <p>
                            <Ons.SearchInput
                                placeholder='Patient Name'
                                value={this.state.search}
                                onChange={event => this.setState({ search: event.target.value })}
                            />
                        </p>
                        <p>
                            <ons-button modifier="outline" onClick={this.handleSearch.bind(this)}>
                                <ons-icon size="40px" icon="ion-ios-search" ></ons-icon>
                            </ons-button>
                        </p>
                    </section>
                </Ons.Card>
                <Ons.Card>

                    <Ons.List
                        dataSource={this.state.patient}
                        renderHeader={() => <Ons.ListHeader>Patient</Ons.ListHeader>}
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
                    <Ons.Navigator initialRoute={{ component: CountPatient, props: { key: 'CountPatient' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
}