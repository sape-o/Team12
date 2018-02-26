import ServeApp from './ServeUi';
import CountApp from './CountUi';


var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');


var datetime = new Date().toLocaleString();
var JSONDATA = {};
var firstName;
var patientLastName;
var patientPersonId;
var patientAge;
var patientSexx;
var patientHight;
var patientWeight;
var patientBloodtype;
var patientAddress;
var patientCareer;
var patientStatus;
var patientPhone;
var patientSymptom;
var allergy;

const userData = this;
var data;
var fullname;

// phakphum 1123
var nfemp;
var nlemp;
var lid;
var le;
var pid;
var did;
var d_patient;
var urin;
var spinal_cord;
var infection;
var microbiological_culture;
var x_sray;
var ultraSound;
var mri;
var biopsy;
var autopsy;
/*var type_room;*/

var tewich;
var tewich1;



//===========================================================================================================================
class Page2 extends React.Component {
  constructor(props) {
        super(props);
        isOpen: false
		this.state = {id_nurse:props.id_nurse,id_patient:props.id_patient,nn:props.nn,nl:props.nl,pn:props.pn,pl:props.pl,job:null,date:null};

    }
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>การทำหัตถการ</div>
      </Ons.Toolbar>
    );
  }

  getTarget() {
    return this.refs.button;
  }

  show() {
    if(this.state.job==null || this.state.job=='' || this.state.date==null || this.state.date==''){
      ons.notification.alert('คุณกรอกช้อมูลไม่ครบ');
    }else{
      client({method: 'GET', path: '/id_nurse/'+this.state.id_nurse+'/id_patient/'+this.state.id_patient+'/job/'+this.state.job+'/date/'+this.state.date}).done(
      )
    this.setState({isOpen: true});
    }
  }

  hide() {
    this.setState({isOpen: false});

  }
  manu(){
   this.setState({isOpen: false});
   this.props.navigator.popPage();
  }
  report(){
    this.setState({isOpen: false});
    this.props.navigator.pushPage({ component: report, props: { key: 'report',id_nurse:this.state.id_nurse,id_patient:this.state.id_patient,job:this.state.job,date:this.state.date,nn:this.state.nn,nl:this.state.nl,pn:this.state.pn,pl:this.state.pl} });
   }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
      <p>
      id พยาบาล: {this.state.id_nurse} : ชื่อพยาบาล : {this.state.nn} นามสกุล {this.state.nl}
      </p>
      <p>
      id ผู้ป่วย : {this.state.id_patient} : ผู้ป่วย : {this.state.pn}  นามสกุล {this.state.pl}
      </p>
      <p>
       หัตถการ&nbsp;&nbsp;
        <Ons.Select id="choose-sel" value={this.state.job} job={this.state.job} onChange={evt => this.setState({ job: evt.target.value })}>
            <option value="Pressure_gauge">Pressure_gauge</option>
            <option value="brine">brine</option>
            <option value="Blood">Blood</option>
            <option value="inject">inject</option>
            <option value="suture">suture</option>
          </Ons.Select>
        </p>

        วันเวลา&nbsp;&nbsp;
        <Ons.Input input-id="datetest"
             value={this.state.date}
             onChange={evt => this.setState({ date: evt.target.value })}
             type='date'
             /><br/>

        <section style={{margin: '16px'}}>
          <p style={{textAlign: 'center'}}>
            <Ons.Button ref='button' onClick={this.show.bind(this)}>บันทึก</Ons.Button>
          </p>
        </section>

        <Ons.Popover
          isOpen={this.state.isOpen}
          onOpen={this.show.bind(this)}
          onHide={this.hide.bind(this)}
          isCancelable={false}
          getTarget={this.getTarget.bind(this)}
        >
          <section style={{margin: '3px'}}>
           <center> <p>
              <Ons.Button onClick={this.manu.bind(this)}>
                กลับ
              </Ons.Button>&nbsp;&nbsp;
               <Ons.Button onClick={this.report.bind(this)}>
                ยืนยัน
              </Ons.Button>
            </p>
           </center>
          </section>
        </Ons.Popover>

        </Ons.Card>

      </Ons.Page>
    );
  }
}


class report extends React.Component {
   constructor(props) {
        super(props);
        this.state = {id_nurse:props.id_nurse,id_patient:props.id_patient,nn:props.nn,nl:props.nl,pn:props.pn,pl:props.pl,job:props.job,date:props.date};

    }
  renderToolbar() {
    return (
      <Ons.Toolbar>

        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>Report</div>
        <div className='right'><Ons.Icon icon='home'onClick={this.pushPage.bind(this)}/>&nbsp;&nbsp;&nbsp;</div>

      </Ons.Toolbar>
    );
  }



  pushPage(event) {
     ReactDOM.render(<Menu />, document.getElementById('react'));
    //this.props.navigator.pushPage({ component: Home, props: { key: 'Home', cardTitle: event.target.textContent } });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <center>
        <Ons.Card style={{textAlign:'left',width:'70%'}}>
        id พยาบาล : {this.state.id_nurse} : ชื่อพยาบาล : {this.state.nn} นามสกุล {this.state.nl}<br/>
         id ผู้ป่วย : {this.state.id_patient} : ชื่อผู้ป่วย : {this.state.pn}  นามสกุล {this.state.pl}<br/>
        การทำหัตถการ :{this.state.job}<br/>
        เวลาทำหัตถการ :  {this.state.date}

        </Ons.Card>
      </center>
      </Ons.Page>
    );
  }
}

class Home2 extends React.Component {
   constructor(props) {
        super(props);
        this.state = {id_nurse:null,id_patient:null,nurses: [],patients: [],nurseslength:null,patientslength:null};

		this.state = {nn:'',nl:'',pn:'',pl:''};

    }

  renderToolbar() {
    return (
      <Ons.Toolbar>
	  <div className='left'><Ons.BackButton onClick={this.pushPageManu.bind(this)}>Back</Ons.BackButton></div>
        <div className='center'>ค้นหา id พยาบาล และ id ผู้ป่วย</div>

      </Ons.Toolbar>
    );
  }
	componentDidMount() {
      client({method: 'GET', path: '/api/nurses'}).done(response => {
          this.setState({nurses: response.entity._embedded.nurses});
      });
	   client({method: 'GET', path: '/api/patients'}).done(response => {
          this.setState({patients: response.entity._embedded.patients});
      });
      client({method: 'GET', path: '/api/nurses'}).done(response => {
        this.setState({nurseslength: response.entity._embedded.nurses.length});
      });
	  client({method: 'GET', path: '/api/patients'}).done(response => {
        this.setState({patientslength: response.entity._embedded.patients.length});
      });
	}
	pushPage() {
        var i=0;
        var k=0;
		var k1=0,k2=0,sum=0;


        for(var i=0 ; i<this.state.nurseslength ; i++){
            if(i === this.state.id_nurse-1 ){
				this.state.nn = this.state.nurses[i].firstName;
				this.state.nl = this.state.nurses[i].lastName;
                k1=1;
                break;
            }
            else{
                k++;
                if(k>0 && i=== this.state.nurseslength-1){

                    k = 0;
                }
            }
        }
		// Patient
		var i=0;
        var k=0;
        for(var i=0 ; i<this.state.patientslength ; i++){
            if(i === this.state.id_patient-1 ){
				this.state.pn = this.state.patients[i].firstName;
				this.state.pl = this.state.patients[i].lastName;
                k2=1;
                break;
            }
            else{
                k++;
                if(k>0 && i=== this.state.patientslength-1){

                    k = 0;
                }
            }
        }
		if(k1==0 && k2==0){
			ons.notification.alert('ID Nurse และ ID Patient ไม่ถูกต้อง');
		}else if(k1==0){
			ons.notification.alert('ID Nurse ไม่ถูกต้อง');
		}else if(k2==0){
			ons.notification.alert('ID Patient ไม่ถูกต้อง');
		}else{
			ons.notification.alert('ถูกต้อง');
			this.props.navigator.pushPage({ component: Page2, props: { key: 'Page2' ,id_nurse:this.state.id_nurse,id_patient:this.state.id_patient,idnn:this.state.nn,nl:this.state.nl,pn:this.state.pn,pl:this.state.pl} });
		}


    }


  pushPageManu() {
     ReactDOM.render(<Menu />, document.getElementById('react'));
    //this.props.navigator.pushPage({ component: Home, props: { key: 'Home', cardTitle: event.target.textContent } });
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

        <div style={{ textAlign: 'center' }}>
          <br />
           <p>
            <Ons.SearchInput
             value={this.state.id_nurse}
             onChange={evt => this.setState({ id_nurse: evt.target.value })}
             placeholder='findNurseID' />
          </p>
          <p>
            <Ons.SearchInput
             value={this.state.id_patient}
             onChange={evt => this.setState({ id_patient: evt.target.value })}
             placeholder='findPatientID' />
          </p>
          <Ons.Button onClick={this.pushPage.bind(this)}>
           ค้นหา
          </Ons.Button>
        </div>

      </Ons.Page>
    );
  }
}

class AppH extends React.Component {
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
    const currentPage = this.navigator.pages.slice(-1)[0] // --- or [this.navigator.pages.length - 1]
    if(currentPage.key != page.name){
      this.navigator.resetPage({ component: page, props: { key: page.name } }, { animation: 'fade' });
    }
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
        <Ons.SplitterSide side='right' width={20} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
          <Ons.Page>

          </Ons.Page>
        </Ons.SplitterSide>
        <Ons.SplitterContent>
          <Ons.Navigator initialRoute={{ component: Home2, props: { key: Home2.name } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        </Ons.SplitterContent>
      </Ons.Splitter>
    );
  }
}


var App  = React.createClass({
    getInitialState: function() {
        return {
            userId: '',
            userPassword: '',
            isOpen: false

        };
    },




    handleClick() {
        fetch('http://localhost:8080/api/userLogins/search/findByUserIdAndUserPassword?'+
            'UserId=' + this.state.userId + '&UserPassword=' + this.state.userPassword)

            .then((response)=> response.json())
            .then((responseJson) => {
                ons.notification.alert('เข้าสู่ระบบสำเร็จ' );
                data = responseJson;
                fullname = data.userId;

                //phakphum
                nfemp = data.userFirstName;
                nlemp = data.userLastName;
                tewich = this.state.userId;
                le = data._links.self.href.length-1;
                lid = data._links.self.href.charAt(le);

                console.log('data =>' + data);
                ReactDOM.render(<Menu />, document.getElementById('react'));

            })
            .catch((error) => {
                ons.notification.alert('โปรดตรวจสอบไอดีและรหัสผ่านอีกครั้ง');
                // console.error();
                console.log('data not found !!!')
            });
    },

    handleClick2() {
        ReactDOM.render(<CreateEmployee />, document.getElementById('react'));
    },

    handleUserId(e) {
        this.setState({userId: e.target.value});
    },

    handlePassword(e) {
        this.setState({userPassword: e.target.value});
    },

    handleNidChange(e) {
        this.setState({nid: e.target.value});
    },

    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    },
    render: function() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar}>


                <section style={{textAlign: 'center'}}>
                    <h1>เข้าสู่ระบบ</h1>

                    <img src={"http://www.publicdomainpictures.net/pictures/230000/velka/red-first-aid-cross.jpg"} alt="Onsen UI" style={{ width: '15%' }} />
                    <p>
                        <Ons.Input
                            value={this.state.userId}
                            onChange={this.handleUserId}
                            modifier='underbar'
                            float
                            placeholder='ไอดี' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.userPassword}
                            onChange={this.handlePassword}
                            modifier='underbar'
                            type='password'
                            float
                            placeholder='รหัสผ่าน' />
                    </p>
                    <p>
                        <Ons.Button onClick={this.handleClick}>เข้าสู่ระบบ</Ons.Button>
                    </p>
                </section>
            </Ons.Page>

        );
    }
});
//==========================================================================================================================

var Menu = React.createClass({
    getInitialState: function() {
        return {
            aid: '',
            isOpen: false

        };
    },

    handleBlack: function() {
        ReactDOM.render(<App />, document.getElementById('react'));
    },

    renderToolbar: function(){
        return (
            <Ons.Toolbar>
                <div className='center'>ระบบคนไข้ใน</div>



            </Ons.Toolbar>

        );

    },



    handleClick2: function() {
        ReactDOM.render(<Search />, document.getElementById('react'));
    },
    handleClick3: function() {
        ReactDOM.render(<CreatePatientHistory />, document.getElementById('react'));
    },

    handleClick4: function() {
        ReactDOM.render(<AppA />, document.getElementById('react'));
    },

    handleClick5: function(){
        ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
    },
    handleClick7: function(){
        ReactDOM.render(<AppAe />, document.getElementById('react'));
    },
    handleClick12: function(){
        ReactDOM.render(<AppAe2 />, document.getElementById('react'));
    },
    handleClick8: function(){
    ReactDOM.render(<AppTwo />, document.getElementById('react'));
    },

    handleServeApp: function(){
        ReactDOM.render(<ServeApp />, document.getElementById('react'));
    },
    handleClick9: function(){
        ReactDOM.render(<Search />, document.getElementById('react'));
    },
    handleClick10: function(){
        ReactDOM.render(<AppBB />, document.getElementById('react'));
    },

    handleCountApp: function(){
        ReactDOM.render(<CountApp />, document.getElementById('react'));
    },
	handleClick11: function(){
    ReactDOM.render(<AppH />, document.getElementById('react'));
    },


    handleClickSearchFollowP: function(){
        ReactDOM.render(<SearchFollowP />, document.getElementById('react'));
    },

    handleUsernameChange(e) {
        this.setState({aid: e.target.value});
    },

    handlePasswordChange(e) {
        this.setState({nursePassword: e.target.value});
    },

    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    },

    render: function() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar}>
                <section style={{textAlign: 'center'}}>
                    <p>


                    </p>
                    <section style={{margin: '16px'}}>
                        <h1>เ ม นู</h1>
                        <Ons.ListTitle>&nbsp;<h5>เลือกรายการ</h5></Ons.ListTitle>
                        <h2>
                            <Ons.List>
                                <Ons.ListItem tappable onClick = {this.handleClick3.bind(this)}>
                                    <ons-icon icon="ion-android-clipboard"></ons-icon>
                                    &nbsp;&nbsp;ลงทะเบียนผู้ป่วย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick4.bind(this)}>
                                    <ons-icon icon="ion-ios-contact"></ons-icon>
                                    &nbsp;&nbsp;จัดการห้องผู้ป่วย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick5.bind(this)}>
                                    <ons-icon icon="ion-ios-pulse-strong"></ons-icon>
                                    &nbsp;&nbsp;วินิจฉัย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick8.bind(this)}>
                                    <ons-icon icon="ion-android-contacts"></ons-icon>
                                    &nbsp;&nbsp;จัดเวรพยาบาล
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick7.bind(this)}>
                                    <ons-icon icon="ion-clock"></ons-icon>
                                    &nbsp;&nbsp;นัดหมายผู้ป่วยใน
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick12.bind(this)}>
                                    <ons-icon icon="ion-clock"></ons-icon>
                                    &nbsp;&nbsp;จ่ายยา
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleServeApp.bind(this)}>
                                    <Ons-icon icon="ion-ios-nutrition-outline" ></Ons-icon>
                                    &nbsp;&nbsp;โภชนาการ
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleCountApp.bind(this)}>
                                    <Ons-icon icon="ion-social-bitcoin-outline" ></Ons-icon>
                                    &nbsp;&nbsp;คิดค่ารักษาพยาบาล
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick9.bind(this)}>
                                    <ons-icon icon="md-car"></ons-icon>
                                    &nbsp;&nbsp;ส่งต่อผู้ป่วย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClickSearchFollowP.bind(this)}>
                                <ons-icon icon="ion-ios-people"></ons-icon>
                                &nbsp;&nbsp;ระบบติดตามอาการผู้ป่วย
                                </Ons.ListItem>
                                <Ons.ListItem tappable onClick = {this.handleClick10.bind(this)}>
                                    <ons-icon icon="ion-ios-contact"></ons-icon>
                                    &nbsp;&nbsp;เยี่ยมผู้ป่วย
                                </Ons.ListItem>
								<Ons.ListItem tappable onClick = {this.handleClick11.bind(this)}>
                                    <ons-icon icon="ion-ios-contact"></ons-icon>
                                    &nbsp;&nbsp;ทำหัตการ
                                </Ons.ListItem>
                            </Ons.List>
                        </h2>

                        <br/><br/>
                        <div style={{ textAlign: 'center' }}>
                            <Ons.Button onClick={this.handleBlack.bind(this)}><h3>ออกจากระบบ</h3></Ons.Button>
                        </div>
                        <br /><br /><br /><br />
                    </section>




                </section>
            </Ons.Page>



        );
    }
});
//========================================================================================================================================================================

var CreatePatientHistory = React.createClass({
    getInitialState: function() {
        return {

            firstName: '',
            patientLastName: '',
            patientAge: '',
            patientSexx:'',
            patientHight: '',
            patientSymptom:'',
            patientAddress: '',
            patientBloodtype: '',
            patientWeight : '',
            patientCareer : '',
            patientPersonId:'',
            patientStatus: '',
            patientPhone: '',
            allergy:'',
            id:'',
            userId:''
        };
    },
    handleBlack: function(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    renderToolbar: function() {
        return (
            <Ons.Toolbar>
                <div className='center'>ลงทะเบียนผู้ป่วย</div>
                <div className='left'><Ons.BackButton onClick={this.handleBlack}>ถอยกลับ</Ons.BackButton></div>


            </Ons.Toolbar>
        );
    },


    handleClick: function() {

        if(this.state.firstName == ''|| this.state.patientLastName =='' || this.state.patientPersonId == ''|| this.state.patientAge =='' || this.state.patientHight == ''|| this.state.patientWeight =='' || this.state.patientBloodtype == ''
            || this.state.patientAddress =='' || this.state.patientCareer == ''|| this.state.patientStatus =='' || this.state.patientPhone == ''|| this.state.patientSymptom =='' || this.state.allergy == ''){

            (ons.notification.alert("Validation failed for classes"));

        }
        else {

            firstName = this.state.firstName;
            patientLastName = this.state.patientLastName;
            patientPersonId = this.state.patientPersonId;
            patientAge = this.state.patientAge;
            patientSexx = this.state.patientSexx;
            patientHight = this.state.patientHight;
            patientWeight = this.state.patientWeight;
            patientBloodtype = this.state.patientBloodtype;
            patientAddress = this.state.patientAddress ;
            patientCareer = this.state.patientCareer;
            patientStatus = this.state.patientStatus;
            patientPhone = this.state.patientPhone;
            patientSymptom = this.state.patientSymptom;
            allergy = this.state.allergy;


            client({method: 'GET', path:"/firstName/"+this.state.firstName+"/patientLastName/"+this.state.patientLastName+"/patientPersonId/"+this.state.patientPersonId+"/patientAge/"+this.state.patientAge+"/patientSexx/"+this.state.patientSexx+"/patientHight/"+this.state.patientHight
            +"/patientWeight/"+this.state.patientWeight+"/patientBloodtype/"+this.state.patientBloodtype+"/patientAddress/"+this.state.patientAddress+"/patientCareer/"+this.state.patientCareer+"/patientStatus/"+this.state.patientStatus+"/patientPhone/"+this.state.patientPhone
            +"/patientSymptom/"+this.state.patientSymptom+"/allergy/"+this.state.allergy+"/userLogin/"+tewich}).done(ons.notification.alert("บันทึกสำเร็จ"));


            ReactDOM.render(<Showinfo1 />, document.getElementById('react'));}


    },

    handleuserId1(e) {
        this.setState({id: e.target.value});
    },
    handleId(e) {
        this.setState({patientId: e.target.value});
    },

    handleFirstName(e) {
        this.setState({firstName: e.target.value});
    },

    handleLastName(e) {
        this.setState({patientLastName: e.target.value});
    },

    handlePersonId(e) {
        this.setState({patientPersonId: e.target.value});
    },

    handleAge(e) {
        this.setState({patientAge: e.target.value});
    },

    handleSexx(e) {
    this.setState({patientSexx: e.target.value});
    },


    handleHight(e) {
        this.setState({patientHight: e.target.value});
    },

    handleWeight(e) {
        this.setState({patientWeight: e.target.value});
    },

    handleBloodtype(e) {
        this.setState({patientBloodtype: e.target.value});
    },

    handleAddress(e) {
        this.setState({patientAddress: e.target.value});
    },

    handleCareer(e) {
        this.setState({patientCareer: e.target.value});
    },

    handleStatus(e) {
        this.setState({patientStatus: e.target.value});
    },

    handlePhone(e) {
        this.setState({patientPhone: e.target.value});
    },

    handleSymptom(e) {
        this.setState({patientSymptom: e.target.value});
    },
    handleAllergy(e) {
        this.setState({allergy: e.target.value});
    },
    handleuserId(e) {
        this.setState({userId: e.target.value});
    },


    hide() {
        this.setState({isOpen: false});
    },

    show() {
        this.setState({isOpen: true});
    },


    render: function() {
        return (

            <Ons.Splitter>

                <Ons.SplitterContent>

                    <Ons.Page renderToolbar={this.renderToolbar}>
                        <section style={{textAlign: 'center'}}>
                            <img src={"http://pdr.suth.go.th/wp-content/uploads/2017/05/Capture-1-300x138.jpg"} alt="Onsen UI" style={{ width: '30%' }} />
                            <section style={{fontSize:'15px',margin:'5px',textAlign:'center'}}>
                                <center><table>

                                    <tr><td>ชื่อ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.firstName}
                                        id = '1'
                                        onChange={this.handleFirstName}
                                    /></td></tr>
                                    <tr><td>นาสกุล</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientLastName}
                                        id = '2'
                                        onChange={this.handleLastName}
                                    /></td></tr>
                                    <tr><td>รหัสบัตรประชาชน</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientPersonId}
                                        id = '3'
                                        onChange={this.handlePersonId}
                                    /></td></tr>
                                    <tr><td>อายุ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientAge}
                                        id = '4'
                                        onChange={this.handleAge}
                                    /></td></tr>
                                    <tr><td>เพศ</td><td style={{color:'blue'}}><Ons.Select id="choose-sel" value={this.state.patientSexx} modifier={this.state.patientSexx} onChange={this.handleSexx}>
                                        id = '5'
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </Ons.Select></td></tr>
                                    <tr><td>ส่วนสูง</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientHight}
                                        id = '6'
                                        onChange={this.handleHight}
                                    /></td></tr>
                                    <tr><td>น้ำหนัก</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientWeight}
                                        id = '7'
                                        onChange={this.handleWeight}
                                    /></td></tr>
                                    <tr><td>กรุ๊ปเลือด</td><td style={{color:'blue'}}><Ons.Select id="choose-sel" value={this.state.patientBloodtype} modifier={this.state.patientBloodtype} onChange={this.handleBloodtype}>
                                        <option value="A">A</option>
                                        id = '8'
                                        <option value="B">B</option>
                                        <option value="O">O</option>
                                        <option value="AB">AB</option>
                                    </Ons.Select></td></tr>
                                    <tr><td>ที่อยู่</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientAddress}
                                        id = '9'
                                        onChange={this.handleAddress}
                                    /></td></tr>
                                    <tr><td>อาชีพ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientCareer}
                                        id = '10'
                                        onChange={this.handleCareer}
                                    /></td></tr>
                                    <tr><td>สถานะ</td><td style={{color:'blue'}}><Ons.Select id="choose-sel" value={this.state.patientStatus} modifier={this.state.patientStatus} onChange={this.handleStatus}>
                                        <option value="Single">Single</option>
                                        id = '11'
                                        <option value="Married">Married</option>
                                        <option value="Divorce">Divorce</option>
                                    </Ons.Select></td></tr>
                                    <tr><td>เบอร์โทรศัพท์</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientPhone}
                                        id = '12'
                                        onChange={this.handlePhone}
                                    /></td></tr>
                                    <tr><td>อาการ</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.patientSymptom}
                                        id = '13'
                                        onChange={this.handleSymptom}
                                    /></td></tr>
                                    <tr><td>แพ้อาหาร</td><td style={{color:'blue'}}><Ons.Input
                                        value={this.state.allergy}
                                        id = '14'
                                        onChange={this.handleAllergy}
                                    /></td></tr>




                                </table></center>
                            </section>


                            <p style={{paddingTop:'30px'}}>
                                <Ons.Button onClick={this.handleClick.bind(this)}>บันทึก</Ons.Button>
                            </p>


                        </section>
                    </Ons.Page>
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
});


//=======================================================================================================================

var Search = React.createClass({
    getInitialState: function() {
        return {
            pid:'',
            firstName: '',
            isOpen: false

        };
    },

    handleBlack() {
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='center'>ค้นหาผู้ป่วย</div>
                <div className='left'><Ons.BackButton onClick={this.handleBlack}>ถอยกลับ</Ons.BackButton></div>
            </Ons.Toolbar>

        );

    },


    handleClick: function(){
        fetch('http://localhost:8080/api/patientSaves/search/findByPid?'+
            'Pid=' + this.state.pid )
            .then((response)=> response.json())
            .then((responseJson) => {

                data = responseJson;
                tewich1 = this.state.pid;
                var pid = data.pid;
                ons.notification.alert('เจอแล้ว !!!');
                console.log('data =>' + data);
                ReactDOM.render(<SentPatient />, document.getElementById('react'));

            })
            .catch((error) => {
                ons.notification.alert('ไม่พบข้อมูล !!!');
                // console.error();
                console.log('data not found !!!')
            });
    },

    handleFirstName(e) {
        this.setState({pid: e.target.value});
    },

    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
    },

    render: function() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar}>
                <section style={{textAlign: 'center'}}>
                    <p>
                        <Ons.SearchInput
                            value={this.state.pid}
                            onChange={this.handleFirstName}
                            modifier='underbar'
                            float
                            placeholder='ค้นหาผู้ป่วยจากไปดี'/>

                    </p>


                    <p>
                        <Ons.Button onClick={this.handleClick}>ค้นหา</Ons.Button>
                    </p>
                </section>
            </Ons.Page>

        );
    }
});
// =====================================================================================================================


var Showinfo1 = React.createClass({

    getInitialState: function() {
        return {
            pid:'',
            firstName: '',
            patientLastName: '',
            patientAge: '',
            patientSexx:'',
            patientHight: '',
            patientSymptom:'',
            patientAddress: '',
            patientBloodtype: '',
            patientWeight : '',
            patientCareer : '',
            patientPersonId:'',
            patientStatus: '',
            patientPhone: '',
            allergy:''
        };
    },
    handleBlack: function() {
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    renderToolbar: function() {
        return (
            <Ons.Toolbar>
                <div className='center'>แสดงข้อมูล</div>


            </Ons.Toolbar>
        );
    },

    handleClick: function(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    handleId(e) {
        this.setState({patientId: e.target.value});
    },

    handleFirstName(e) {
        this.setState({firstName: e.target.value});
    },

    handleLastName(e) {
        this.setState({patientLastName: e.target.value});
    },

    handlePersonId(e) {
        this.setState({patientPersonId: e.target.value});
    },

    handleAge(e) {
        this.setState({patientAge: e.target.value});
    },

    handleHight(e) {
        this.setState({patientHight: e.target.value});
    },

    handleWeight(e) {
        this.setState({patientWeight: e.target.value});
    },
    handleBloodtype(e) {
        this.setState({patientBloodtype: e.target.value});
    },

    handleAddress(e) {
        this.setState({patientAddress: e.target.value});
    },

    handleCareer(e) {
        this.setState({patientCareer: e.target.value});
    },

    handleStatus(e) {
        this.setState({patientStatus: e.target.value});
    },

    handlePhone(e) {
        this.setState({patientPhone: e.target.value});
    },

    handleSymptom(e) {
        this.setState({patientSymptom: e.target.value});
    },

    hide() {
        this.setState({isOpen: false});
    },

    show() {
        this.setState({isOpen: true});
    },


    render: function() {
        return (
            <Ons.Splitter>

                <Ons.SplitterContent>
                    <Ons.Page renderToolbar={this.renderToolbar}>
                        <section style={{fontSize:'15px',margin:'5px',textAlign:'center'}}>
                            <center><table>
                                <tr><td>ชื่อ</td><td style={{color:'blue'}}>{firstName}</td></tr>
                                <tr><td>นาสกุล</td><td style={{color:'blue'}}>{patientLastName}</td></tr>
                                <tr><td>รหัสบัตรประชาชน</td><td style={{color:'blue'}}>{patientPersonId}</td></tr>
                                <tr><td>อายุ</td><td style={{color:'blue'}}>{patientAge}</td></tr>
                                <tr><td>เพศ</td><td style={{color:'blue'}}>{patientSexx}</td></tr>
                                <tr><td>ส่วนสูง</td><td style={{color:'blue'}}>{patientHight}</td></tr>
                                <tr><td>น้ำหนัก</td><td style={{color:'blue'}}>{patientWeight}</td></tr>
                                <tr><td>กรุ๊ปเลือด</td><td style={{color:'blue'}}>{patientBloodtype}</td></tr>
                                <tr><td>ที่อยู่</td><td style={{color:'blue'}}>{patientAddress}</td></tr>
                                <tr><td>อาชีพ</td><td style={{color:'blue'}}>{patientCareer}</td></tr>
                                <tr><td>สถานะ</td><td style={{color:'blue'}}>{patientStatus}</td></tr>
                                <tr><td>เบอร์โทรศัพท์</td><td style={{color:'blue'}}>{patientPhone}</td></tr>
                                <tr><td>อาการ</td><td style={{color:'blue'}}>{patientSymptom}</td></tr>
                                <tr><td>แพ้อาหาร</td><td style={{color:'blue'}}>{allergy}</td></tr>

                            </table></center>
                        </section>




                        <div style={{ textAlign: 'center' }}>
                            <Ons.Button onClick={this.handleBlack.bind(this)}><h3>กลับไปเมนู</h3></Ons.Button>
                        </div>


                    </Ons.Page>
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
});
// =====================================================================================================================

var SentPatient = React.createClass({

    getInitialState: function() {
        return {
            pid:'',
            firstName: '',
            patientLastName: '',
            patientPersonId:'',
            hostdate:'',
            namehost:'',
            thostdate:''

        };
    },
    handleBlack: function() {
        ReactDOM.render(<Menu />, document.getElementById('react'));
    },

    renderToolbar: function() {
        return (
            <Ons.Toolbar>
                <div className='center'>ส่งตัวผู้ป่วย</div>


            </Ons.Toolbar>
        );
    },


    handleClick: function(){
        if(this.state.hostdate == ''|| this.state.thostdate =='' || this.state.namehost == ''){

            (ons.notification.alert("Validation failed for classes"));

        }
        else {


            client({method: 'GET', path:"/hostdate/"+this.state.hostdate+"/thostdate/"+this.state.thostdate+"/namehost/"+this.state.namehost+"/patientSave/"+tewich1+"/userLogin/"+tewich}).done(ons.notification.alert("บันทึกสำเร็จ"));

            ReactDOM.render(<Menu />, document.getElementById('react'));}
    },

    hide() {
        this.setState({isOpen: false});
    },

    show() {
        this.setState({isOpen: true});
    },

    handlenamehost(e) {
        this.setState({namehost: e.target.value});
    },

    handledate1(e) {
        this.setState({hostdate: e.target.value});
    },
    handledate2(e) {
        this.setState({thostdate: e.target.value});
    },


    render: function() {
        return (
            <Ons.Splitter>

                <Ons.SplitterContent>
                    <Ons.Page renderToolbar={this.renderToolbar}>
                        <section style={{textAlign: 'center'}}>
                            <img src={"http://pdr.suth.go.th/wp-content/uploads/2017/05/Capture-1-300x138.jpg"} alt="Onsen UI" style={{ width: '30%' }} />
                            <section style={{fontSize:'15px',margin:'5px',textAlign:'center'}}>
                                <center><table>
                                    <tr><td>ชื่อ</td><td style={{color:'blue'}}>{data.firstName}</td></tr>
                                    <tr><td>นาสกุล</td><td style={{color:'blue'}}>{data.patientLastName}</td></tr>
                                    <tr><td>รหัสบัตรประชาชน</td><td style={{color:'blue'}}>{data.patientPersonId}</td></tr>
                                    <tr><td>โรงพยาบาล</td><td style={{color:'blue'}}><Ons.Select id="choose-sel" value={this.state.namehost} modifier={this.state.namehost} onChange={this.handlenamehost}>
                                        <option value="Naresuan_University_Hospital">Naresuan_University_Hospital</option>
                                        <option value="The_Veterans_General_Hospital">The_Veterans_General_Hospital</option>
                                        <option value="Banphaeo_Hospital">Banphaeo_Hospita</option>
                                        <option value="King_Chulalongkorn_Memorial_Hospital ">King_Chulalongkorn_Memorial_Hospital</option>
                                    </Ons.Select></td></tr>
                                    <tr><td>วันที่ส่งผุ้ป่วย</td><td style={{color:'blue'}}><Ons.Input input-id="datetest"
                                        value={this.state.hostdate}
                                        onChange={this.handledate1}
                                        id = '1'
                                        modifier='underbar'
                                        type = 'date'
                                        float
                                        placeholder='Date' />
                                    </td></tr>
                                    <tr><td>เวลาที่ส่งผุ้ป่วย</td><td style={{color:'blue'}}><Ons.Input Input-id="timetest"

                                        value={this.state.thostdate}
                                        onChange={this.handledate2}
                                        id = '2'
                                        modifier='underbar'
                                        type = 'time'
                                        float
                                        placeholder='Time' />
                                    </td></tr>
                                </table></center>
                            </section>




                            <div style={{ textAlign: 'center' }}>
                                <Ons.Button onClick={this.handleClick.bind(this)}>บันทึก</Ons.Button>
                            </div>
                        </section>

                    </Ons.Page>
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
});

//=================================================เSefe==========================================================
//=============================================Sprint 2========================================================

//============================================ของกูอย่าลบ=======================================================

class SumVisit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:props.id,visit:[]};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/visits'}).done(response => {
            this.setState({visit: response.entity._embedded.visits});
        });
    }

    renderRow1(row,index) {
        return(

                <Ons.Card style={{width: '100%'}}
                          tappable
                          key={row._links.self.href}
                          data={row}
                >
                    <td style={{width:'20px'}}>
                        <center>{index+1}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center>{row.firstname}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center>{row.lastname}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center>{row.tel}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center> {row._embedded.saveroom.room.type_room}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center> {row._embedded.saveroom.room.number_bed}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center>{row._embedded.saveroom.patientsave.firstName}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center>{new Date(row.date).getDate()}-{new Date(row.date).getMonth()+1}-{new Date(row.date).getFullYear()}</center>
                    </td>
                    <td style={{width:"150px"}}>
                        <center>{new Date(row.date).getHours()} : {new Date(row.date).getMinutes()}</center>
                    </td>


                </Ons.Card>
        )
    }
    //{new Date(row.dateIn).getDate()}{new Date(row.dateIn).getMonth()+1}{new Date(row.dateIn).getFullYear()}

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>สรุปผลการเยี่ยม</div>
            </Ons.Toolbar>
        );
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>สรุปผลทั้งหมด</h4>

                <Ons.Card style={{width:'100%'}}>
                        <td style={{width:'20px'}}><center>ที่</center></td>
                        <td style={{width:"150px"}}><center>ชื่อผู้ที่มาเยี่ยม</center></td>
                        <td style={{width:"150px"}}><center>นามสกุล ผู้ที่มาเยี่ยม</center></td>
                        <td style={{width:"150px"}}><center>เบอร์โทรศัพท์</center></td>
                        <td style={{width:"150px"}}><center>ประเภทห้องที่เยี่ยม</center></td>
                        <td style={{width:"150px"}}><center>เลขเตียงที่เยี่ยม</center></td>
                        <td style={{width:"150px"}}><center>ชื่อผู้ป่วย</center></td>
                        <td style={{width:"150px"}}><center>วันที่มาเยี่ยม</center></td>
                        <td style={{width:"150px"}}><center>เวลาที่เยี่ยม</center></td>
                </Ons.Card>
                    <Ons.List
                        dataSource={this.state.visit}
                        renderRow={this.renderRow1}
                    />
            </Ons.Page>
        );
    }
}


class Visit_Insert extends React.Component {
   constructor(props) {
        super(props);
        this.state = {idd:props.id,
                      visit: [],
                      rooms: [],
                      firstname:null,
                      lastname:null,
                      PersonalID:null,
                      tel:null,
                      visitslength:null,
                      saveRoomslength:null,
                      showroom:null,
                      n:props.n,
                      type:props.type,
                      num:props.num};
    }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
        <div className='center'>เยี่ยมผู้ป่วย</div>
        <div className='right'>ชื่อพนักงาน : {fullname} [ ID Patient: {this.state.idd} ]</div>
      </Ons.Toolbar>
    );
  }

  pushPage() {
    if(this.state.firstname==null || this.state.firstname=='' || this.state.lastname==null || this.state.lastname=='' || this.state.PersonalID==null || this.state.PersonalID=='' || this.state.tel==null || this.state.tel==''){
              ons.notification.alert("คุณป้อนข้อมูลไม่ครบ");
    }else if(this.state.PersonalID.length !=13){
        ons.notification.alert(" คุณกรอก Personal ID ไม่ถูกต้อง");
    }else if (this.state.tel.length !=10){
        ons.notification.alert("คุณกรอกเบอร์ไม่ถูกต้อง");
    }else{
        client({method: 'GET', path: '/ID_SaveRoom/'+this.state.idd+'/firstname/'+this.state.firstname+'/lastname/'+this.state.lastname+'/perID/'+this.state.PersonalID+'/tel/'+this.state.tel+'/user/'+lid}).done(
        ons.notification.alert("บันทึกเสร็จสิ้น"))
        ReactDOM.render(<Menu />, document.getElementById('react'));
    }
  }

//OK
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <p style={{ textAlign: 'center', opacity: '0.9'}}>กรุณากรอกข้อมูล   </p>
      <center>
        <Ons.Card style={{ textAlign: 'center',width:'350px'}}>
        <center>
         ชื่อผู้ป่วย : {this.state.n} &nbsp;&nbsp;ห้อง : {this.state.num}&nbsp;&nbsp;{this.state.type}
          <Ons.Card style={{ textAlign: 'center',width:'250px'}}>
            <Ons.Input
                    value={this.state.firstname}
                    id='1'
                    onChange={evt => this.setState({ firstname: evt.target.value })}
                    modifier='underbar'
                    placeholder='Firstname' />
          </Ons.Card>
          <Ons.Card style={{ textAlign: 'center',width:'250px'}}>
            <Ons.Input
                    value={this.state.lastname}
                    id='2'
                    onChange={evt => this.setState({ lastname: evt.target.value })}
                    modifier='underbar'
                    placeholder='Lastname' />
          </Ons.Card>
          <Ons.Card style={{ textAlign: 'center',width:'250px'}}>
          <Ons.Input
                    value={this.state.PersonalID}
                    id='3'
                    onChange={evt => this.setState({ PersonalID: evt.target.value })}
                    modifier='underbar'
                    placeholder='Personal ID' />
          </Ons.Card>
          <Ons.Card style={{ textAlign: 'center',width:'250px'}}>
          <Ons.Input
                    value={this.state.tel}
                    id='4'
                    onChange={evt => this.setState({ tel: evt.target.value })}
                    modifier='underbar'
                    placeholder='Telephone Number' />
          </Ons.Card>
          <Ons.Button modifier='outline' onClick={this.pushPage.bind(this)}>
            Submit
          </Ons.Button>
        </center>
        </Ons.Card>
      </center>
      </Ons.Page>
    );
  }
}


class Visit_Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {saveRooms: [],saveRoomslength:[]};
        this.state = {ids:null,
                      n:null,
                      type:null,
                      num:null};
    }
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'> <Ons.Button modifier='outline' onClick={this.back.bind(this)}>ย้อนกลับ</Ons.Button> </div>
        <div className='center'>เยี่ยมผู้ป่วย</div>
        <div className='right'>ชื่อพนักงาน : {fullname}</div>
      </Ons.Toolbar>
    );
  }
  back(){ReactDOM.render(<Menu />, document.getElementById('react'));}
  componentDidMount() {
      client({method: 'GET', path: '/api/saveRooms'}).done(response => {
          this.setState({saveRooms: response.entity._embedded.saveRooms});
      });
      client({method: 'GET', path: '/api/saveRooms'}).done(response => {
        this.setState({saveRoomslength: response.entity._embedded.saveRooms.length});
      });

  }
  pushPage1() {
    var i=0;
    var k=0;
    for(var i=0 ; i<this.state.saveRoomslength ; i++){
      if(i === this.state.ids-1 ){
        this.state.n = this.state.saveRooms[i].patientsave.firstName;
        this.state.type = this.state.saveRooms[i].room.type_room;
        this.state.num = this.state.saveRooms[i].room.number_bed;
        ons.notification.alert('Plese Insert Data!');
        this.props.navigator.pushPage({ component: Visit_Insert,
             props: { key: 'Visit_Insert',id:i+1,n:this.state.n,type:this.state.type,num:this.state.num
        } });
        break;
      }
      else{
        k++;
        if(k>0 && i=== this.state.saveRoomslength-1){
          ons.notification.alert('incorrect!');
          k = 0;
        }
      }
      }
    }
  SumVisit() {
    this.props.navigator.pushPage({ component: SumVisit , props:{ key: 'SumVisit' }} ,{animation:"none"});
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <h2><p style={{ textAlign: 'center', opacity: '0.9', paddingTop: '1px' }}>กรุณาป้อน ID เพื่อค้นหา</p></h2>
        <div style={{ textAlign: 'center' }}>
            <Ons.SearchInput
              value={this.state.ids}
              onChange={evt => this.setState({ ids: evt.target.value })}
              placeholder='Search ID Save Room' />

            <br/><br/>
          <Ons.Button modifier='outline' onClick={this.pushPage1.bind(this)}>
            ค้นหาID
          </Ons.Button>
          <br/>
          <center>
          <Ons.Card style={{width:'180px'}}>
          <center>
            <Ons.Button modifier='outline' onClick={this.SumVisit.bind(this)}>
              ดูประวัติการเยี่ยม
            </Ons.Button>
          </center>
          </Ons.Card>
          </center>
        </div>

      </Ons.Page>
    );
  }
}

class AppBB extends React.Component {
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
    const currentPage = this.navigator.pages.slice(-1)[0] // --- or [this.navigator.pages.length - 1]
    if(currentPage.key != page.name){
      this.navigator.resetPage({ component: page, props: { key: page.name } }, { animation: 'fade' });
    }
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
        <Ons.SplitterSide side='right' width={20} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
          <Ons.Page>
            <Ons.List>
              <Ons.ListItem key={Visit_Search.name} onClick={this.loadPage.bind(this, Visit_Search)} tappable>Visit_Search</Ons.ListItem>
            </Ons.List>
          </Ons.Page>
        </Ons.SplitterSide>
        <Ons.SplitterContent>
          <Ons.Navigator initialRoute={{ component: Visit_Search, props: { key: Visit_Search.name } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        </Ons.SplitterContent>
      </Ons.Splitter>
    );
  }
}


//=================================================เSefe==========================================================
//================================================================================================================

class SumRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:props.id,saveRooms:[],rooms:[]};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/saveRooms'}).done(response => {
            this.setState({saveRooms: response.entity._embedded.saveRooms});
        });
    }

    renderRow1(row,index) {
        return(

                <Ons.List style={{width: '100%'}}
                          tappable
                          key={row._links.self.href}
                          data={row}
                >

                    <td style={{width:'20px'}}>
                        <center>{index+1}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.patientsave.firstName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.patientsave.patientLastName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.patientsave.patientPhone}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center> {row.room.type_room}</center>
                    </td>
                    <td style={{width:"100px"}}>
                        <center> {row.room.number_bed}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.room.function}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{new Date(row.dateIn).getDate()}-{new Date(row.dateIn).getMonth()+1}-{new Date(row.dateIn).getFullYear()}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{new Date(row.dateOut).getDate()}-{new Date(row.dateOut).getMonth()+1}-{new Date(row.dateOut).getFullYear()}</center>
                    </td>


                </Ons.List>
        )
    }
    //{new Date(row.dateIn).getDate()}{new Date(row.dateIn).getMonth()+1}{new Date(row.dateIn).getFullYear()}

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>สรุปผล</div>
            </Ons.Toolbar>
        );
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>สรุปผลทั้งหมด</h4>

                <Ons.Card style={{width:'100%'}}>
                    <Ons.List>

                        <td style={{width:'20px'}}><center>ที่</center></td>
                        <td style={{width:"200px"}}><center>ชื่อ ผู้ป่วย</center></td>
                        <td style={{width:"200px"}}><center>นามสกุล ผู้ป่วย</center></td>
                        <td style={{width:"200px"}}><center>เบอร์โทรศัพท์</center></td>
                        <td style={{width:"200px"}}><center>ชนิดห้องที่พัก</center></td>
                        <td style={{width:"100px"}}><center>เลขเตียง</center></td>
                        <td style={{width:"200px"}}><center>Fucntion Bed</center></td>
                        <td style={{width:"200px"}}><center>วันที่เข้าพัก</center></td>
                        <td style={{width:"200px"}}><center>วันที่ออกพัก</center></td>
                    </Ons.List>
                </Ons.Card>

                <Ons.Card>
                    <Ons.List
                        dataSource={this.state.saveRooms}
                        renderRow={this.renderRow1}
                    />
                </Ons.Card>

            </Ons.Page>
        );
    }
}


class SpecialRoom extends React.Component{
    constructor(props) {
        alertDialogShown: false
        super(props);
        this.state = {id:props.id,
            Nbed:null,
            dateIn:null,
            dateOut:null,
            roomsent:"พิเศษ"
        };
    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>Select Femele Room</div>
            </Ons.Toolbar>
        );
    }
    showAlertDialog(temp) {this.state.Nbed=temp; this.setState({alertDialogShown: true});   }
    hideAlertDialog() {this.setState({alertDialogShown: false});   }

    BCheck1(id,nbed){
        nbed=nbed-16;
        if(this.state.dateIn == null || this.state.dateOut == null){
          ons.notification.alert("คุณไม่ได้กรอกวันที่");
        }else if(this.state.dateIn > this.state.dateOut){
          ons.notification.alert("คุณกรอก วันที่ ไม่สัมพันธ์กัน");
        }else{
        client({method: 'GET', path: '/ID_Patient/'+this.state.id+'/ID_Room/'+this.state.Nbed+'/dateIn/'+this.state.dateIn+'/dateOut/'+this.state.dateOut}).done(
            ons.notification.alert("Patient ID ="+id+"<br/>ห้องเบอร์ ="+nbed))
            ReactDOM.render(<Menu />, document.getElementById('react'));
          }
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรุณาเลือกห้องให้ Patient ID:{this.state.id}</h4>

                <Ons.AlertDialog
                    isOpen={this.state.alertDialogShown}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>กรุณาเลือกวันเข้าและออก<br/>(ห้องเบอร์:{this.state.Nbed})</div>
                    <div className='alert-dialog-content'>
                        <p>วันที่เข้า
                            <Ons.Input input-id='datatest' id='1' type='date' value={this.state.value} onChange={evt => this.setState({ dateIn: evt.target.value })}/>
                        </p>
                        <p>วันที่ออก
                            <Ons.Input input-id='datatest2' id='2' type='date' value={this.state.value} onChange={evt => this.setState({ dateOut: evt.target.value })}/>
                        </p>
                    </div>
                    <div className='alert-dialog-footer'>

                        <button onClick={this.hideAlertDialog.bind(this)} className='alert-dialog-button'>
                            Cancel
                        </button>
                        <button onClick={this.BCheck1.bind(this,this.state.id,this.state.Nbed)} className='alert-dialog-button'>
                            Ok
                        </button>
                    </div>
                </Ons.AlertDialog>


                <div style={{ textAlign: 'center' }}>
                    <img src={"image/BedSpecial/Bed_Special1.png"} alt="Bed_Special1.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,17)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special2.png"} alt="Bed_Special2.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,18)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special3.png"} alt="Bed_Special3.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,19)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special4.png"} alt="Bed_Special4.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,20)} />&nbsp;&nbsp;<br/>
                    <img src={"image/BedSpecial/Bed_Special5.png"} alt="Bed_Special5.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,21)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special6.png"} alt="Bed_Special6.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,22)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special7.png"} alt="Bed_Special7.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,23)} />&nbsp;&nbsp;
                    <img src={"image/BedSpecial/Bed_Special8.png"} alt="Bed_Special8.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,24)} />&nbsp;&nbsp;

                </div>
            </Ons.Page>
        );
    }

}

class Room1Femele extends React.Component{
    constructor(props) {
        alertDialogShown: false
        super(props);
        this.state = {id:props.id,
            Nbed:null,
            dateIn:null,
            dateOut:null,
            roomsent:"รวมหญิง"
        };


    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>Select Femele Room</div>
            </Ons.Toolbar>
        );
    }
    showAlertDialog(temp) {this.state.Nbed=temp; this.setState({alertDialogShown: true});   }
    hideAlertDialog() {this.setState({alertDialogShown: false});   }

    BCheck1(id,nbed){
        nbed=nbed-8;
        if(this.state.dateIn == null || this.state.dateOut == null){
          ons.notification.alert("คุณไม่ได้กรอกวันที่");
        }else if(this.state.dateIn > this.state.dateOut){
          ons.notification.alert("คุณกรอก วันที่ ไม่สัมพันธ์กัน");
        }else{
        client({method: 'GET', path: '/ID_Patient/'+this.state.id+'/ID_Room/'+this.state.Nbed+'/dateIn/'+this.state.dateIn+'/dateOut/'+this.state.dateOut}).done(
            ons.notification.alert("Patient ID ="+id+"<br/>ห้องหญิงรวม<br/>เตียงเบอร์ ="+nbed))
            ReactDOM.render(<Menu />, document.getElementById('react'));
          }
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรุณาเลือกห้องให้ Patient ID:{this.state.id}</h4>

                <Ons.AlertDialog
                    isOpen={this.state.alertDialogShown}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>กรุณาเลือกวันเข้าและออก<br/>(เตียงเบอร์:{this.state.Nbed-8})</div>
                    <div className='alert-dialog-content'>
                        <p>วันที่เข้า
                            <Ons.Input input-id='datatest' id='1' type='date' value={this.state.value} onChange={evt => this.setState({ dateIn: evt.target.value })}/>
                        </p>
                        <p>วันที่ออก
                            <Ons.Input input-id='datatest2' id='2' type='date' value={this.state.value} onChange={evt => this.setState({ dateOut: evt.target.value })}/>
                        </p>
                    </div>
                    <div className='alert-dialog-footer'>
                        <button onClick={this.hideAlertDialog.bind(this)} className='alert-dialog-button'>
                            Cancel
                        </button>
                        <button onClick={this.BCheck1.bind(this,this.state.id,this.state.Nbed)} className='alert-dialog-button'>
                            Ok
                        </button>
                    </div>
                </Ons.AlertDialog>


                <div style={{ textAlign: 'center' }}>
                    <img src={"image/bed/Bed1.png"} alt="Bed1.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,9)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed2.png"} alt="Bed2.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,10)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed3.png"} alt="Bed3.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,11)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed4.png"} alt="Bed4.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,12)} />&nbsp;&nbsp;<br/>
                    <img src={"image/bed/Bed5.png"} alt="Bed5.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,13)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed6.png"} alt="Bed6.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,14)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed7.png"} alt="Bed7.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,15)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed8.png"} alt="Bed8.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,16)} />&nbsp;&nbsp;

                </div>
            </Ons.Page>
        );
    }

}

class Room1Man extends React.Component{
    constructor(props) {
        alertDialogShown: false
        super(props);
        this.state = {id:props.id,
            Nbed:null,
            dateIn:null,
            dateOut:null,
            roomsent:"รวมชาย"
        };


    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>Select Man Room</div>
            </Ons.Toolbar>
        );
    }
    showAlertDialog(temp) {this.state.Nbed=temp; this.setState({alertDialogShown: true});   }
    hideAlertDialog() {this.setState({alertDialogShown: false});   }

    BCheck1(id,nbed){
      if(this.state.dateIn == null || this.state.dateOut == null){
        ons.notification.alert("คุณไม่ได้กรอกวันที่");
      }else if(this.state.dateIn > this.state.dateOut){
        ons.notification.alert("คุณกรอก วันที่ ไม่สัมพันธ์กัน");
      }else{
        client({method: 'GET', path: '/ID_Patient/'+this.state.id+'/ID_Room/'+this.state.Nbed+'/dateIn/'+this.state.dateIn+'/dateOut/'+this.state.dateOut}).done(
            ons.notification.alert("Patient ID ="+id+"<br/>ห้องชายรวม<br/>เตียงเบอร์ ="+nbed))
            ReactDOM.render(<Menu />, document.getElementById('react'));
          }
    }
    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรุณาเลือกห้องให้ Patient ID:{this.state.id}</h4>

                <Ons.AlertDialog
                    isOpen={this.state.alertDialogShown}
                    isCancelable={false}>
                    <div className='alert-dialog-title'>กรุณาเลือกวันเข้าและออก<br/>(เตียงเบอร์:{this.state.Nbed})</div>
                    <div className='alert-dialog-content'>
                        <p>วันที่เข้า
                            <Ons.Input input-id='datatest' id='1' type='date' value={this.state.value} onChange={evt => this.setState({ dateIn: evt.target.value })}/>
                        </p>
                        <p>วันที่ออก
                            <Ons.Input input-id='datatest2' id='2' type='date' value={this.state.value} onChange={evt => this.setState({ dateOut: evt.target.value })}/>
                        </p>
                    </div>
                    <div className='alert-dialog-footer'>
                        <button onClick={this.hideAlertDialog.bind(this)} className='alert-dialog-button'>
                            Cancel
                        </button>
                        <button onClick={this.BCheck1.bind(this,this.state.id,this.state.Nbed)} className='alert-dialog-button'>
                            Ok
                        </button>
                    </div>
                </Ons.AlertDialog>


                <div style={{ textAlign: 'center' }}>
                    <img src={"image/bed/Bed1.png"} alt="Bed1.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,1)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed2.png"} alt="Bed2.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,2)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed3.png"} alt="Bed3.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,3)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed4.png"} alt="Bed4.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,4)} />&nbsp;&nbsp;<br/>
                    <img src={"image/bed/Bed5.png"} alt="Bed5.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,5)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed6.png"} alt="Bed6.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,6)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed7.png"} alt="Bed7.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,7)} />&nbsp;&nbsp;
                    <img src={"image/bed/Bed8.png"} alt="Bed8.png" style={{width: '6%'}} onClick={this.showAlertDialog.bind(this,8)} />&nbsp;&nbsp;

                </div>
            </Ons.Page>
        );
    }

}

class SelectRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state={id:props.id};
        dialogShown: false
    }
    showDialog(){this.setState({dialogShown: true});  }
    hideDialog(){this.setState({dialogShown: false});  }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
                <div className='center'>SelectRoom</div>
                <div className='right'>
                    <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
                        <Ons.Icon icon='ion-navicon, material:md-menu' />
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }
    showMenu() {this.props.showMenu();  }

    pushRoom1Femele() {this.setState({dialogShown: false}); this.props.navigator.pushPage({ component: Room1Femele, props: { key: 'Room1Femele',id:this.state.id } },{animation:"none"});  }
    pushRoom1Man() {this.setState({dialogShown: false}); this.props.navigator.pushPage({ component: Room1Man, props: { key: 'Room1Man',id:this.state.id } },{animation:"none"});  }
    SpecialRoom() {this.props.navigator.pushPage({ component: SpecialRoom, props: { key: 'SpecialRoom',id:this.state.id } },{animation:"none"});  }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>Please select type of room for Patient ID: {this.state.id}</h4>
                <div style={{ textAlign: 'center' }}>
                    <br />

                    <Ons.Dialog isOpen={this.state.dialogShown} isCancelable={true} onCancel={this.hideDialog}>
                        <div style={{textAlign: 'center', margin: '20px'}}>
                            <p style={{opacity: 0.5}}>Please Select Sex of patient</p>
                            <p>
                                <Ons.Button style={{margin: '6px'},{width: '100px'}} modifier='outline' onClick={this.pushRoom1Man.bind(this)}>Man</Ons.Button>
                                &nbsp;&nbsp;
                                <Ons.Button style={{margin: '6px'},{width: '100px'}} modifier='outline' onClick={this.pushRoom1Femele.bind(this)}>Female</Ons.Button>
                            </p>
                        </div>
                    </Ons.Dialog>

                    <Ons.Button style={{margin: '6px'}} modifier='outline' onClick={this.showDialog.bind(this)}>ห้องรวม</Ons.Button>
                    <Ons.Button style={{margin: '5px'}} modifier='outline' onClick={this.SpecialRoom.bind(this)}>ห้องพิเศษ</Ons.Button>
                </div>

            </Ons.Page>
        );
    }
}

class FindID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {patients: []};
        this.state = {id:null,patientslength:null};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/patientSaves'}).done(response => {
            this.setState({patients: response.entity._embedded.patientSaves});
        });
        client({method: 'GET', path: '/api/patientSaves'}).done(response => {
            this.setState({patientslength: response.entity._embedded.patientSaves.length});
        });

    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
            <div className='left'> <Ons.Button modifier='outline' onClick={this.back.bind(this)}>ย้อนกลับ</Ons.Button> </div>
                <div className='center'>Find ID Patient</div>
                <div className='right'>
                    <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
                        <Ons.Icon icon='ion-navicon, material:md-menu' />
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }

  back(){ReactDOM.render(<Menu />, document.getElementById('react'));}

    showMenu() {this.props.showMenu();  }
    pushPage() {
        var i=0;
        var k=0;
        for(var i=0 ; i<this.state.patientslength ; i++){
            if(i === this.state.id-1 ){
                ons.notification.alert('Plese Select Type of Room!');
                this.props.navigator.pushPage({ component: SelectRoom, props: { key: 'SelectRoom',id:i+1 } },{animation:"none"});
                break;
            }
            else{
                k++;
                if(k>0 && i=== this.state.patientslength-1){
                    ons.notification.alert('incorrect!');
                    k = 0;
                }
            }
        }
    }



    pushPageSum() {this.props.navigator.pushPage({ component: SumRoom, props: { key: 'SumRoom',id:this.state.id } },{animation:"none"});  }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <h4 style={{textAlign:'center'}}>กรอกID Patient เพื่อทำการเลือกห้อง</h4>
                <div style={{ textAlign: 'center' }}>
                    <p>
                        <Ons.SearchInput
                            value={this.state.id}
                            onChange={evt => this.setState({ id: evt.target.value })}
                            placeholder='Search ID Patient' />
                    </p>

                    <Ons.Button onClick={this.pushPage.bind(this)}>Search</Ons.Button>
                    &nbsp;&nbsp;&nbsp;
                    <Ons.Button onClick={this.pushPageSum.bind(this)}>สรุปผลการใช้ห้อง</Ons.Button>
                </div>

            </Ons.Page>
        );
    }
}

class AppA extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.loadPage = this.loadPage.bind(this);
    }
    hide() {this.setState({ isOpen: false });  }
    show() {this.setState({ isOpen: true });  }

    loadPage(page) {this.hide();
        this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
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
                <Ons.SplitterSide side='right' width={90} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
                    <Ons.Page>
                        <Ons.List>
                            <Ons.ListItem key='FindID' onClick={this.loadPage.bind(this, FindID)} tappable>FindID</Ons.ListItem>
                        </Ons.List>
                    </Ons.Page>
                </Ons.SplitterSide>
                <Ons.SplitterContent>
                    <Ons.Navigator initialRoute={{ component: FindID, props: { key: 'FindID' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
}
//=================================================================================================================
//============================================================P.Two===============================================================================

class Oreo extends React.Component {
    constructor(props) {
        super(props);
        this.state={schedules:[]};

    }
    handleBlack(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBlack.bind(this)}>ถอยกลับ</Ons.BackButton></div>
                <div className='center'>สรุป</div>

            </Ons.Toolbar>
        );
    }
    componentDidMount() {
        client({method: 'GET', path: '/api/schedules'}).done(response => {
            this.setState({schedules: response.entity._embedded.schedules});
        });
        client({method: 'GET', path: '/api/schedules'}).done(response => {
            this.setState({scheduleslength: response.entity._embedded.schedules.length});
        });

    }
    renderRow1(row,index) {
        return(
            <center>
                <Ons.List style={{width: '100%'}}
                          tappable
                          key={row._links.self.href}
                          data={row}
                >

                    <td style={{width:'20px'}}>
                        <center>{index+1}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.nurse.firstName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row._embedded.nurse.lastName}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.department}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{new Date(row.time).getDate()}-{new Date(row.time).getMonth()+1}-{new Date(row.time).getFullYear()}</center>
                    </td>
                    <td style={{width:"200px"}}>
                        <center>{row.timeType}</center>
                    </td>


                </Ons.List>
            </center>
        )
    }



    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <center><h2>สรุปผล</h2></center>
                <Ons.Card style={{width:'100%'},{textAlign:'center'}}>
                    <Ons.List>
                        <td style={{width:'20px'}}><center>ที่</center></td>
                        <td style={{width:"200px"}}><center>ชื่อ พยาบาล</center></td>
                        <td style={{width:"200px"}}><center>นามสกุล พยาบาล</center></td>
                        <td style={{width:"200px"}}><center>เข้าเวร แผนก</center></td>
                        <td style={{width:"200px"}}><center>วันที่เข้า</center></td>
                        <td style={{width:"200px"}}><center>กะเข้างาน</center></td>
                    </Ons.List>
                </Ons.Card>
                <Ons.Card>
                    <Ons.List
                        dataSource={this.state.schedules}
                        renderRow={this.renderRow1}
                    />

                </Ons.Card>
            </Ons.Page>
        );
    }
}
class Setassign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id:props.id,
            department:'',
            date:'',
            time_type:''
        };
    }
    handleBlack(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBlack.bind(this)}>ถอยกลับ</Ons.BackButton></div>
                <div className='center'>จัดเวรพยาบาล</div>

            </Ons.Toolbar>
        );
    }



    pushPageSum(){
        client({method: 'GET', path: '/ID/'+this.state.id+'/department/'+this.state.department+'/date/'+this.state.date+'/timeType/'+this.state.time_type}).done(response => {
            ons.notification.alert("ID Nurse: "+this.state.id+"<br/>Department: "+this.state.department+"Date: "+this.state.date);
			this.props.navigator.resetPage({ component: Oreo, props: { key: 'Oreo' } },{animation:"none"});
		});
    }



    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <center><h2>จัดเวร</h2></center>
                <Ons.Card>
                    <div style={{textAlign: 'center'}}>
                        เลือกแผนก
                        <Ons.Select value={this.state.department} modifier={this.state.department} onChange={evt => this.setState({ department: evt.target.value })}>
                            <option value="อายุรกรรม">อายุรกรรม</option>
                            <option value="ICU">ICU</option>
                        </Ons.Select>
                        <br/>
                        วันเวลาทำเวร
                        <Ons.Input input-id="datetest"
                            value={this.state.date}
                            onChange={evt => this.setState({ date: evt.target.value })}
                            type='date'
                        />
                        <br/>
                        เลือกเวร
                        <Ons.Select id="choose-sel" value={this.state.time_type} modifier={this.state.time_type} onChange={evt => this.setState({ time_type: evt.target.value })}>
                            <option value="เช้า">เช้า</option>
                            <option value="บ่าย">บ่าย</option>
                            <option value="ดึก">ดีก</option>
                        </Ons.Select>

                    </div>
                </Ons.Card>

                <center>
                    <Ons.Button onClick={this.pushPageSum.bind(this)}>
                        Submit
                    </Ons.Button>
                </center>

            </Ons.Page>
        );
    }
}

class AssignTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nurses: [],i:1};
        this.state = {id:null,
            password:null,
            nurseslength:null};
    }

    handleBlack(){
        ReactDOM.render(<Menu />, document.getElementById('react'));
    }
    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBlack.bind(this)}>ถอยกลับ</Ons.BackButton></div>
                <div className='center'>จัดเวรพยาบาล</div>
                <div className='right'>
                    <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
                        <Ons.Icon icon='ion-navicon, material:md-menu' />
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }

    showMenu() {
        this.props.showMenu();
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/nurses'}).done(response => {
            this.setState({nurses: response.entity._embedded.nurses});
        });
        client({method: 'GET', path: '/api/nurses'}).done(response => {
            this.setState({nurseslength: response.entity._embedded.nurses.length});
        });

    }
    pushPage1(){
        this.props.navigator.resetPage({ component: Oreo, props: { key: 'Oreo'} },{animation:"none"});

    }
    pushPage() {
        var i=0;
        var k=0;
        for(var i=0 ; i<this.state.nurseslength ; i++){
            if(i === this.state.id-1 ){
                ons.notification.alert('Plese in put Data!');
                this.props.navigator.resetPage({ component: Setassign, props: { key: 'Setassign',id:i+1 } },{animation:"none"});
                break;
            }
            else{
                k++;
                if(k>0 && i=== this.state.nurseslength-1){
                    ons.notification.alert('incorrect!');
                    k = 0;
                }
            }
        }

    }

    render() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

                <div style={{ textAlign: 'center' }}>
                    <h3>กรุณาล็อกอินเพื่อจัดตารางเวร</h3>

                    <p>
                        <Ons.Input
                            value={this.state.id}
                            onChange={evt => this.setState({ id: evt.target.value })}
                            modifier='underbar'
                            float
                            placeholder='ID Nurse' />
                    </p>

                    <Ons.Button onClick={this.pushPage.bind(this)}>
                        Find Nurse
                    </Ons.Button>
                    &nbsp;&nbsp;&nbsp;
                    <Ons.Button onClick={this.pushPage1.bind(this)}>
                        ประวัติการจัดเวร
                    </Ons.Button>
                </div>

            </Ons.Page>
        );
    }
}

class AppTwo extends React.Component {
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
        this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
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
                <Ons.SplitterSide side='right' width={220} collapse={true} swipeable={true} isOpen={this.state.isOpen} onClose={this.hide.bind(this)} onOpen={this.show.bind(this)}>
                    <Ons.Page>
                        <Ons.List>
                            <Ons.ListItem key='AssignTime' onClick={this.loadPage.bind(this, AssignTime)} tappable>ล็อกอิน</Ons.ListItem>

                            <Ons.ListItem key='Setassign' onClick={this.loadPage.bind(this, Setassign)} tappable>จัดตารางเวร</Ons.ListItem>
                        </Ons.List>
                    </Ons.Page>
                </Ons.SplitterSide>
                <Ons.SplitterContent>
                    <Ons.Navigator initialRoute={{ component: AssignTime, props: { key: 'AssignTime' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
                </Ons.SplitterContent>
            </Ons.Splitter>
        );
    }
}

/////////////////////////////////////////////PAK////////////////////////////////////////////////////////
class ManageDiagnose extends React.Component {
    constructor(props) {
      super(props);
      this.state = {diagnoses: []};
      this.state = {
        title: props.title ? props.title : 'Custom Page',
        nextTitle: null,
       // d_patient:data.firstName+" "+data.patientLastName,
        dialogShown: false

      };

    }
    componentDidMount() {

      client({method: 'GET', path: '/api/diagnoses'}).done(response => {
        this.setState({diagnoses: response.entity._embedded.diagnoses});
    });

    }



    renderToolbar() {
      return (
        <Ons.Toolbar>

          {/*<div className='left'><Ons.BackButton>Back</Ons.BackButton></div>*/}
          <div className='center'>วินิจฉัยโรค</div>
          <div className="right" paddingRight="20px" paddingLeft="20px"></div>
        </Ons.Toolbar>
      );
    }

    showDialog() {
      this.setState({dialogShown: true});

    }
    showDialog1() {
      this.setState({dialogShown1: true});

    }

    hideDialog() {
      this.setState({dialogShown: false});

      client({method: 'GET', path: '/api/diagnoses'}).done(response => {
        this.setState({diagnoses: response.entity._embedded.diagnoses});
    });
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
      ReactDOM.render(<Menu />, document.getElementById('react'));

    }

    pushPageAddDiagnose() {
     // this.props.navigator.pushPage({ component: SearchP, props: { key: 'SearchP' } });
      ReactDOM.render(<SearchP />, document.getElementById('react'));
     // <Ons.Button onClick={this.pushPageSum.bind(this)}>สรุปผลการใช้ห้อง</Ons.Button>

    }

    pushPagePrintDiagnose() {
     // this.props.navigator.pushPage({ component: PrintDiagnose, props: { key: 'PrintDiagnose' } });
      ReactDOM.render(<SearchPrintDiagnose />, document.getElementById('react'));
    }

    resetPage(){
      //this.props.navigator.resetPage({component : ManageDiagnose, props: {key : 'ManageDiagnose' } });
      ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
    }



    handleClickDelete(diagnose,index) {
      client({method: 'DELETE', path: diagnose._links.self.href   }).done(response =>{
        ons.notification.alert('เลือก ' + diagnose.d_patient );
      });
    };

    handlePushManager(){
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
      ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
    }


    renderRow(row, index) {
      return(
        <Ons.ListItem
            key={row._links.self.href}
            data={row}
            >
            <div className='left' style={{width: '100px'}}>
                {index+1}
            </div>
            <div className="center">
            {row.d_patient}
            </div>
            <div className='right'>
              <Ons.Icon icon='md-delete' size="30px"/>
              &nbsp;&nbsp;&nbsp;
              <Ons.Checkbox
              inputId={`checkbox-${row}`}
              onClick={this.handleClickDelete.bind(this, row, index)}
              />
            </div>
        </Ons.ListItem>
      )
    }

    render() {
      return (

        <Ons.Page renderToolbar={this.renderToolbar}>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <section style={{textAlign: 'center'}}>
                            <img src={"http://jvkorat.go.th/th/wp-content/uploads/2017/11/30.jpg"} alt="Onsen UI" style={{ width: '25%' }} />
                         </section>
      <p style={{textAlign: 'right', paddingTop:'10px', paddingRight:'20px'}}>
      <Ons.Button
            onClick={this.pushPagePrintDiagnose.bind(this)}>
          <Ons.Icon icon='ion-printer' /> พิมพ์ผล วินิจฉัยโรคทั้งหมด
          </Ons.Button>
          &nbsp;&nbsp;&nbsp;
          <Ons.Button
          modifier='outline'
            onClick={this.pushPageAddDiagnose.bind(this)}>
          <Ons.Icon icon='ion-android-clipboard' /> เพิ่มรายละเอียด วินิจฉัยโรค
          </Ons.Button>
        &nbsp;&nbsp;&nbsp;
        <Ons.Button
          style={{backgroundColor: 'red'}}
          onClick={this.showDialog.bind(this)}>
          <Ons.Icon icon='md-delete' size="30px"/>
          &nbsp;&nbsp;
          ลบ
        </Ons.Button>
        &nbsp;&nbsp;&nbsp;
        <Ons.Button
          onClick={this.showDialog1.bind(this)}>
          <Ons.Icon icon='ion-navicon-round' size="30px"/>
          &nbsp;&nbsp;
          Menu
        </Ons.Button>
      </p>

      <section style={{textAlign: 'center'}}>
        <Ons.List>
          <Ons.ListItem style={{backgroundColor: '#c6c6c6'}}>
            <div className='left' style={{width: '100px'}}>
              <b>No.</b>
            </div>
            <div className="center" >
            <b>Patient</b>
            </div>
            <div className='right'>
            <b>Delete</b>
            </div>
          </Ons.ListItem>
       </Ons.List>
       <Ons.List
          dataSource={this.state.diagnoses}
          renderRow={this.renderRow}
          handleClickDelete={this.handleClickDelete}
        />
          </section>

          <Ons.Dialog
        isOpen={this.state.dialogShown1}
      >
              <div style={{textAlign: 'center', margin: '20px'}}>
                <p style={{opacity: 0.5}}>ต้องการ กลับไปหน้า menu ?</p>
                <p>
                  <Ons.Button
                  onClick={this.hideDialog.bind(this)}
                  >
                   ใช่
                  </Ons.Button>
                </p>
              </div>
            </Ons.Dialog>

      <Ons.Dialog
        isOpen={this.state.dialogShown}
      >
              <div style={{textAlign: 'center', margin: '20px'}}>
                <p style={{opacity: 0.5}}>ต้องการ "ลบ" ?</p>
                <p>
                  <Ons.Button
                  onClick={this.hideDialog.bind(this)}
                  >
                   ลบเเล้ว
                  </Ons.Button>
                </p>
              </div>
            </Ons.Dialog>

        </Ons.Page>
      );
    }
  }
  //----------------------------------------------------

  class SearchP extends React.Component {

      constructor(props) {
          super(props);

          this.state = {
              title: props.title ? props.title : 'Custom Page',
              nextTitle: null

          }
      }

      push() {

          fetch('http://localhost:8080/api/patientSaves/search/findByPid?'+
              'Pid=' + this.state.pid )

              .then((response)=> response.json())
              .then((responseJson) => {

                  data = responseJson;
                  console.log('data =>' + data);

          pid = this.state.pid;


                  //this.props.navigator.pushPage({ component: AddDiagnose,props: { key: 'AddDiagnose'} });
                  ReactDOM.render(<AddDiagnose />, document.getElementById('react'));

              })
              .catch((error) => {
                  ons.notification.alert('ไม่พบไอดีคนไข้ !');
                  console.log('data not found !!!')
              });


      }

      handlePushManager(){
          //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
          ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
        }


         renderToolbar() {
          return (
                <Ons.Toolbar>
                  {/* <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>*/}
                   <div className='center'>ระบบวินิจฉัยโรค</div>

                </Ons.Toolbar>
          );
      }

      render() {
          return (
              <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
              <div style={{ textAlign: 'center' }}>

              <h1>ผู้ป่วย</h1>
              <br/>
              <h4>ค้นหา ไอดีคนไข้</h4>
              <p>
              <br/>
                  <Ons.Input
                      value={this.state.pid}
                      onChange={evt => this.setState({pid: evt.target.value})}
                      modifier='underbar'
                      float
                      placeholder='ไอดีผู้ป่วย' />
              </p>
              <br/>
              <Ons.Button onClick={this.push.bind(this)}>Search</Ons.Button>

              <br/><br/><br/>
              <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>
              <section style={{textAlign: 'center'}}>
                  <img src={"https://lisaguru.com/wp-content/uploads/2017/01/ba_v9nvwuRRN5y81ktWR0BrExLtZACQQH_lSYSnrJdePNoR7SNZ1484313638ToqyXa0WNELDlk_chSAJAQ_pDngLe4K8049035300.jpg"} alt="Onsen UI" style={{ width: '20%' }} />
              </section>
        </div>
        </Ons.Page>
          );
      }

  }



  // ----------------------------------------------- AddDiagnose
  class AddDiagnose extends React.Component {
    constructor(props) {
      super(props);
      this.state = {patientSaves: []};
      this.handleClick = this.handleClick.bind(this);
      isOpen: false;
     // this.handleSelectPa = this.handleSelectedPa.bind(this);
      this.state = {
      //  date: new Date(),
        blood:'',
        urin:'',
        spinal_cord:'',
        infection:'',
        microbiological_culture:'',
        x_sray:'',
        ultraSound:'',
        mri:'',
        biopsy:'',
        autopsy:'',
        d_patient: data.firstName+' '+data.patientLastName,
        d_doctor: nfemp+nlemp




      }
    }


    showDialog() {
      if(this.state.blood == null || this.state.urin == null ||
        this.state.spinal_cord == null||
        this.state.infection == null || this.state.microbiological_culture == null || this.state.x_sray == null ||
        this.state.ultraSound == null || this.state.mri == null || this.state.biopsy == null || this.state.autopsy == null ||this.state.d_patient == null ||this.state.d_doctor == null
      ){
        ons.notification.alert('กรุณากรอกข้อมูลให้ครบ!')
      }else{
        this.setState({dialogShown: true});
      }
    }

      renderToolbar() {
        return (
          <Ons.Toolbar>
         {/* <div className='left'><Ons.BackButton>Back</Ons.BackButton></div> */}
          <div className='center'>  <Ons.Icon icon='md-account' /> วินิจฉัยโรคผู้ป่วย
          </div>
          </Ons.Toolbar>
        );
      }

      componentDidMount() {
        client({method: 'GET', path: '/api/patientSaves'}).done(response => {
          this.setState({patientSaves: response.entity._embedded.patientSaves});
        });
      }

     handlePushManager(){
        //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
        ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
      }

      handlePushSearchP(){
          //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
          ReactDOM.render(<SearchP />, document.getElementById('react'));
        }




      handleClick(pid,lid,blood,urin,spinal_cord,infection,microbiological_culture,x_sray,ultraSound,mri,biopsy,autopsy,d_patient,d_doctor) {
        return function () {
          client({method: 'GET', path:'/pid/'+pid+'/lid/'+lid+'/blood/'+blood+'/urin/'+urin+'/spinal_cord/'+spinal_cord+'/infection/'+infection+
                                          '/microbiological_culture/'+microbiological_culture+'/x_sray/'+x_sray+'/ultraSound/'+ultraSound+
                                              '/mri/'+mri+'/biopsy/'+biopsy+'/autopsy/'+autopsy+'/d_patient/'+d_patient+'/d_doctor/'+d_doctor}).done(ons.notification.alert("บันทึกสำเร็จ"));

        }

    }





      render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar}>
            <section style={{textAlign: 'center'}}>
            <p><b>
              Date : &nbsp;&nbsp;&nbsp;{datetime}</b></p>

            <Ons.List>
              <Ons.ListHeader> การวินิจฉัยทางห้องปฎิบัติการวิทยา (Laboratory diagnosis) </Ons.ListHeader>
            </Ons.List>
              <center>
                      <p>
                      <center>
                <Ons.Input modifier="underbar"
                  placeholder="ตรวจเลือด"
                  float
                  onChange={evt => this.setState({ blood: evt.target.value })} >

                </Ons.Input>
                </center>
              </p>
                  <p>
                  <center>
                  <table><tr><td><b>ตรวจปัสสาวะ : </b></td><td>

                <Ons.Select id="choose-sel"
                 value={this.state.position}
                 modifier={this.state.position}
                 onChange={evt => this.setState({urin: event.target.value})} >
                 <option >โปรดเลือก..</option>
                   <option value="normal">สีปกติ(เหลืองอ่อน-เหลืองปานกลาง)</option>
                   <option value="red">สีอมแดง</option>
                   <option value="blown">สีน้ำตาล</option>
                   <option value="very white">สีปัสสาวะมีสีขุ่นขาวมาก</option>
                   <option value="like milk">สีคล้ายน้ำนม</option>
                   <option value="orange">สีส้ม</option>
                   <option value="very yellow">สีเหลืองเข้ม</option>
                   <option value="blue-">สีน้ำเงิน-ฟ้าอ่อนๆ</option>

                 </Ons.Select>
                 </td></tr></table>
                  </center>
              </p>
              <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="ตรวจน้ำไขสันหลัง"
                  float
                  onChange={evt => this.setState({ spinal_cord: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>
              <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="ตรวจเชื้อ"
                  float
                  onChange={evt => this.setState({ infection: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>
              <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="ตรวจเพาะเชื้อ"
                  float
                  onChange={evt => this.setState({ microbiological_culture: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>


               </center>

              <Ons.List>
                <Ons.ListHeader> การวินิจฉัยทางรังสีวิทยา  (Radiological diagnosis) </Ons.ListHeader>
              </Ons.List>

                 <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="X-sray"
                  float
                  onChange={evt => this.setState({ x_sray: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>

              <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="อัลตราซาวน์"
                  float
                  onChange={evt => this.setState({ ultraSound: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>

              <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="X-sray คอมพิวเตอร์ (MRI)"
                  float
                  onChange={evt => this.setState({ mri: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>
                <Ons.List>
              <Ons.ListHeader> การวินิจฉัยทางพยาธิวิทยา (Pathological diagnosis)  </Ons.ListHeader>
            </Ons.List>

                  <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="การตัดชิ้นเนื้อไปตรวจ"
                  float
                  onChange={evt => this.setState({ biopsy: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>
               <p>
              <center>
                <Ons.Input modifier="underbar"
                  placeholder="การตรวจศพ"
                  float
                  onChange={evt => this.setState({ autopsy: evt.target.value })} >
                </Ons.Input>
                </center>
              </p>

            </section>

            <Ons.ListHeader></Ons.ListHeader>
            <center>
           <h4><ons-icon  size="25px"  icon="ion-person"></ons-icon >&nbsp;&nbsp;คนไข้</h4>
           {data.firstName}&nbsp;&nbsp;&nbsp;{data.patientLastName}

                <h4><ons-icon size="25px"  icon="ion-person"></ons-icon>&nbsp;&nbsp;แพทย์</h4>
                {nfemp}&nbsp;&nbsp;&nbsp;{nlemp}

                </center>

                <p>
            <center>
           <Ons.Button onClick={this.showDialog.bind(this)}>
                บันทึก
              </Ons.Button>&nbsp; <Ons.Button onClick={this.handlePushSearchP.bind(this)}>กลับสู่หน้า ค้นหาไอดี</Ons.Button>
               </center>
               </p>


            {/*/<center>
            <Ons.Button onClick={this.handleClick(
           pid,lid,this.state.blood,this.state.urin,this.state.spinal_cord,
            this.state.infection,this.state.microbiological_culture,this.state.x_sray,this.state.ultraSound,this.state.mri,
            this.state.biopsy,this.state.autopsy,this.state.d_patient,this.state.d_doctor
            )}>
            <Ons.Icon icon='ion-android-clipboard' /> บันทึก </Ons.Button>
               </center>
                  &nbsp;&nbsp;&nbsp;
          <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>*/}
          <Ons.Dialog
                isOpen={this.state.dialogShown}
              >
              <div style={{textAlign: 'center', margin: '20px'}}>
          <p style={{opacity: 0.5}}>บันทึก</p>
                <p>

            <center>


              <Ons.Button onClick={this.handleClick(
                  pid,lid,this.state.blood,this.state.urin,this.state.spinal_cord,
                  this.state.infection,this.state.microbiological_culture,this.state.x_sray,this.state.ultraSound,this.state.mri,
                  this.state.biopsy,this.state.autopsy,this.state.d_patient,this.state.d_doctor
                  )}>
                  <Ons.Icon icon='ion-android-clipboard' /> Save </Ons.Button>



                  &nbsp;&nbsp;&nbsp;
                  <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>

                  </center>
             </p>

            </div>

                </Ons.Dialog>*
          </Ons.Page>
        );
      }
  }




  // ----------------------------------------------- PrintFollow

  class PrintFollowP extends React.Component {
    constructor(props) {
      super(props);
      this.state = {followPs: []};


    }
    renderToolbar() {
      return (
        <Ons.Toolbar>
          {/*<div className='left'><Ons.BackButton>Back</Ons.BackButton></div>*/}
          <div className='center'>ผลวินิจฉัย โรค ทั้งหมด</div>
          <div className="right" paddingRight="20px" paddingLeft="20px"></div>
        </Ons.Toolbar>
      );
    }
    componentDidMount() {
      client({method: 'GET', path: '/api/followPs'}).done(response => {
          this.setState({followPs: response.entity._embedded.followPs});
      });
    }
    showMenu() {
      this.props.showMenu();
    }

    resetPage(){
      //this.props.navigator.resetPage({component : ManageDiagnose, key : ManageDiagnose})
      ReactDOM.render(<Menu />, document.getElementById('react'));
    }

    print() {
      window.print();
    }

    handlePushMenu(){
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
      ReactDOM.render(<Menu />, document.getElementById('react'));
    }

    renderRow(row, index) {
      return(
        <center>
        <Ons.ListItem style={{textAlign:'center'}}
            key={row._links.self.href}
            data={row}

            >
            <center>
              <center>
                <td  style={{width:'40px'}}>
                <center>{index+1}</center>
                </td><td style={{width:'100px'}}>
                <center>{row.sad}</center>
                </td><td style={{width:'100px'}}>
                <center>{row.worry}</center>
                </td><td style={{width:'100px'}}>
                <center>{row.happy}</center>
                </td><td style={{width:'70px'}}>
                <center>{row.pain}</center>
                </td><td style={{width:'70px'}}>
                <center>{row.tried}</center>
                </td><td style={{width:'40px'}}>
                <center> {row.squeamish}</center>
                </td><td style={{width:'100px'}}>
                <center> {row.sleepy}</center>
                </td><td style={{width:'80px'}}>
                <center>{row.anorexia}</center>
                </td><td style={{width:'120px'}}>
                <center>{row.tried2}</center>
                </td><td style={{width:'80px'}}>
                <center>{row.details} </center>
                </td><td style={{width:'140px'}}>
               <center>{row.f_patient}</center>
               </td><td style={{width:'140px'}}>
               <center> {row.f_nurse}</center>
                </td> <td style={{width:'140px'}}>
                       {new Date(row.datetime).getDate()}/
                      {new Date(row.datetime).getMonth()+1}/
                      {new Date(row.datetime).getFullYear()}&nbsp;
                      {new Date(row.datetime).getHours()}:
                      {new Date(row.datetime).getMinutes()}
                      </td>

             </center>
            </center>
        </Ons.ListItem>
        </center>


      )
    }
    render() {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
           &nbsp;
           <center>
           <center>
           <Ons.List>
              <Ons.ListHeader>&nbsp;</Ons.ListHeader>
            </Ons.List>
           <Ons.Card style={{width:'97%'}}>

                <td style={{width:'40px'}}>
                <center>ลำดับที่</center>
                </td><td style={{width:'100px'}}>
                <center>อาการซึมเศร้า</center>
                </td><td style={{width:'100px'}}>
                <center>อาการวิตกกังวล</center>
                </td><td style={{width:'100px'}}>
                <center>ภาวะความสุขกายและใจ</center>
                </td><td style={{width:'70px'}}>
                <center> อาการเหนื่อยหอบ</center>
                </td><td style={{width:'70px'}}>
                <center>อาการปวด</center>
                </td><td style={{width:'40px'}}>
                <center> อาการเหนื่อย/อ่อนล้า</center>
                </td><td style={{width:'100px'}}>
                <center> อาการคลื่นไส้</center>
                </td><td style={{width:'80px'}}>
                <center>อาการง่วงซึม/สลึมสลือ</center>
                </td><td style={{width:'120px'}}>
                <center>เบื่ออาหาร</center>
                </td><td style={{width:'80px'}}>
                <center>เพิ่มเติม</center></td>
                <td style={{width:'140px'}}>
                <center>คนไข้</center>
                </td><td style={{width:'140px'}}>
                <center> พยาบาลผู้ประเมิณ</center>
                </td><td style={{width:'140px'}}>
                <center> เวลาบันทึกข้อมูล</center>
                </td>
          </Ons.Card>
          </center>
          <Ons.List>
              <Ons.ListHeader>&nbsp;</Ons.ListHeader>
            </Ons.List>
            </center>
          <center>
          <Ons.Card>
          <Ons.List style={{textAlign:'center'}}
          dataSource={this.state.followPs}
          renderRow={this.renderRow}
          />
          </Ons.Card>
          </center>
          &nbsp;&nbsp;&nbsp;

          <div style={{ textAlign: 'center', paddingTop:'15px', paddingBottom:'10px', paddingLeft:'20%', paddingRight:'20%'}}>
            <Ons.Button
                onClick={this.print.bind(this)}>
              <Ons.Icon icon='ion-printer' />&nbsp;
              "พิมพ์" ใบผลวินิจฉัย
            </Ons.Button>
          </div>
          <center>
          <Ons.Button onClick={this.handlePushMenu.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>
          </center>
        </Ons.Page>


      );
    }
  }

  class SearchFollowP extends React.Component {

          constructor(props) {
              super(props);

              this.state = {
                  title: props.title ? props.title : 'Custom Page',
                  nextTitle: null

              }
          }

          push() {

              fetch('http://localhost:8080/api/patientSaves/search/findByPid?'+
                  'Pid=' + this.state.pid )

                  .then((response)=> response.json())
                  .then((responseJson) => {

                      data = responseJson;
                      console.log('data =>' + data);

              pid = this.state.pid;

             ReactDOM.render(<FollowP />, document.getElementById('react'));
                      /*this.props.navigator.pushPage({ component: FollowP,
                      props: { key: 'FollowP'} });*/

                  })
                  .catch((error) => {
                      ons.notification.alert('ไม่พบไอดีคนไข้');
                      console.log('data not found !!!')
                  });


          }

          handleMenu(){
              //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
              ReactDOM.render(<Menu />, document.getElementById('react'));
            }


             renderToolbar() {
              return (
                    <Ons.Toolbar>

                       <div className='center'>ระบบติดตามอาการผู้ป่วย</div>

                    </Ons.Toolbar>
              );
          }

          render() {
              return (
                  <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                        <center>
                   <Ons.Card style={{width:'20%'}}>
                  <div style={{ textAlign: 'center' }}>

                  <h1>ผู้ป่วย</h1>
                  <br/>
                  <h4>ค้นหาชื่อ-สกุลด้วย ไอดีคนไข้</h4>
                  <p>
                  <br/>

                      <Ons.Input
                          value={this.state.pid}
                          onChange={evt => this.setState({pid: evt.target.value})}
                          modifier='underbar'
                          float
                          placeholder='ไอดีคนไข้' />
                  </p>
                  <br/>
                  </div>
                </Ons.Card>
                            </center>
                <center>
                <br/>
                  <Ons.Button onClick={this.push.bind(this)}>Search</Ons.Button>
                  <br/><br/>
              <Ons.Button onClick={this.handleMenu.bind(this)}>กลับสู่หน้า Menu</Ons.Button>
                </center>
                  <br/><br/><br/>
                  <section style={{textAlign: 'center'}}>
                      <img src={"https://f.ptcdn.info/498/026/000/1418462406-B0kyJLeCEA-o.jpg"} alt="Onsen UI" style={{ width: '20%' }} />
                  </section>


            </Ons.Page>
          );
      }

  }

  class FollowP extends React.Component {
      constructor(props) {
        super(props);
        this.state = {patientSaves: []};
        this.handleClick = this.handleClick.bind(this);
        isOpen: false;
       // this.handleSelectPa = this.handleSelectedPa.bind(this);
        this.state = {
        //  date: new Date(),
        sad:null,
        worry:null,
        happy:null,
        pain:null,
        tried:null,
        squeamish:null,
        sleepy:null,
        anorexia:null,
        tried2:null,
        details:' ',
		patientSymptom:'',


       f_patient: data.firstName+' '+data.patientLastName,
       f_nurse: nfemp+ nlemp



        }
      }


      showDialog() {
        if(this.state.sad == null || this.state.worry == null ||
          this.state.happy == null||
          this.state.pain == null || this.state.tried == null || this.state.squeamish == null ||
          this.state.sleepy == null || this.state.anorexia == null || this.state.tried2 == null  ||this.state.f_patient == null ||this.state.f_nurse == null
        ){
          ons.notification.alert('กรุณากรอกข้อมูลให้ครบ!')
        }else{
          this.setState({dialogShown: true});
        }
      }

        renderToolbar() {
          return (
            <Ons.Toolbar>
            <div className='center'>  <Ons.Icon icon='md-account' /> ระบบติดตามอาการผู้ป่วย
            </div>
            </Ons.Toolbar>
          );
        }

        handledetailsChange(e) {
          this.setState({ details: e.target.value });
        }
        componentDidMount() {
          client({method: 'GET', path: '/api/patientSaves'}).done(response => {
            this.setState({patientSaves: response.entity._embedded.patientSaves});
          });
        }

        handletype_room(e) {
            this.setState({ type_room: e.target.value });
        }
		 handlepatientSymptom(e) {
            this.setState({ patientSymptom: e.target.value });
        }


        handlePushPrintFollowP(){
          ReactDOM.render(<PrintFollowP />, document.getElementById('react'));
      }

       handlePushMenu(){
          ReactDOM.render(<Menu />, document.getElementById('react'));
      }
          /*this.props.navigator.resetPage({component: Menu,key: 'Menu',},{ animation: 'fade' });
        }*/

        handlePushSearchFollowP(){
          //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
          ReactDOM.render(<SearchFollowP />, document.getElementById('react'));
        }
        handleClick(pid,lid,sad,worry,happy,pain,tried,squeamish,sleepy,anorexia,tried2,details,f_patient,f_nurse) {
          return function () {
            client({method: 'GET', path:'/pid/'+pid+'/lid/'+lid+'/sad/'+sad+'/worry/'+worry+'/happy/'+happy+'/pain/'+pain+'/tried/'+tried+'/squeamish/'+squeamish+'/sleepy/'+sleepy+
                                                '/anorexia/'+anorexia+'/tried2/'+tried2+'/details/'+details+'/f_patient/'+f_patient+'/f_nurse/'+f_nurse}).done(ons.notification.alert("บันทึกสำเร็จ"));

          }

      }





        render() {
          return (
            <Ons.Page renderToolbar={this.renderToolbar}>

              <section style={{textAlign: 'center'}}>
              <Ons.List>

              </Ons.List>
             <p><b>


 Date : &nbsp;&nbsp;&nbsp;{datetime}</b></p>
           <Ons.ListHeader> **แบบประเมิณด่านล่างผู้ป่วยต้องประเมิณด้วยตนเองเท่านั้น** </Ons.ListHeader>


                <center>

                    <p>
                    <center>
                    <b>อาการซึมเศร้า : </b>


                    <Ons.Input modifier="underbar"
                  placeholder="อาการซึมเศร้า"
                  float
                  onChange={evt => this.setState({ sad: evt.target.value })} >
                </Ons.Input>&nbsp;&nbsp;&nbsp;


                  <b>อาการวิตกกังวล : </b>


                  <Ons.Input modifier="underbar"
                  placeholder="อาการวิตกกังวล"
                  float
                  onChange={evt => this.setState({ worry: evt.target.value })} >
                </Ons.Input>&nbsp;&nbsp;&nbsp;

                     <b>ภาวะความสุขกายและใจ : </b>


                     <Ons.Input modifier="underbar"
                  placeholder="ภาวะความสุขกายและใจ"
                  float
                  onChange={evt => this.setState({ happy: evt.target.value })} >
                </Ons.Input>






                    </center>
                   </p>
              </center>

                <Ons.List>
                  <Ons.ListHeader> แบบประเมิณด่านล่างผู้ดูแลหรือผู้ป่วยสามารถประเมิณได้ </Ons.ListHeader>
                </Ons.List>
                <p>
               <center>
                    <td style={{width:'110px' , backgroundColor: '#DCDCDC'}}><b>อาการปวด : </b>

                   </td><td style={{width:'110px'}}>
                   <Ons.Input modifier="underbar"
                  placeholder="อาการปวด"
                  float
                  onChange={evt => this.setState({ pain: evt.target.value })} >
                </Ons.Input>
                   </td>
              <td style={{width:'110px', backgroundColor: '#DCDCDC'}}><b>อาการเหนื่อยหอบ: </b>

                   </td><td style={{width:'120px'}}>
                   <Ons.Input modifier="underbar"
                  placeholder="อาการเหนื่อยหอบ"
                  float
                  onChange={evt => this.setState({ tried: evt.target.value })} >
                </Ons.Input>
                  </td>

                <td style={{width:'110px', backgroundColor: '#DCDCDC'}}><b>อาการเหนื่อย/อ่อนล้า : </b>

                </td><td style={{width:'110px'}}>
                <Ons.Input modifier="underbar"
                  placeholder="อาการเหนื่อย/อ่อนล้า"
                  float
                  onChange={evt => this.setState({ tried2: evt.target.value })} >
                </Ons.Input>
                   </td>

                   <td style={{width:'110px', backgroundColor: '#DCDCDC'}}><b>อาการคลื่นไส้ : </b>
                   </td><td style={{width:'110px'}}>
                   <Ons.Input modifier="underbar"
                  placeholder="อาการคลื่นไส้"
                  float
                  onChange={evt => this.setState({ squeamish: evt.target.value })} >
                </Ons.Input>
                   </td>

                   <td style={{width:'110px', backgroundColor: '#DCDCDC'}}><b>อาการง่วงซึม/สลึมสลือ : </b>

                   </td><td style={{width:'110px'}}>
                   <Ons.Input modifier="underbar"
                  placeholder="อาการง่วงซึม/สลึมสลือ"
                  float
                  onChange={evt => this.setState({ sleepy: evt.target.value })} >
                </Ons.Input>
                   </td>

                   <td style={{width:'110px', backgroundColor: '#DCDCDC'}}><b>เบื่ออาหาร : </b>

                   </td><td style={{width:'110px'}}>
                   <Ons.Input modifier="underbar"
                  placeholder="เบื่ออาหาร"
                  float
                  onChange={evt => this.setState({ anorexia: evt.target.value })} >
                </Ons.Input>
                  </td>
               </center>
               </p>
               <center>
<Ons.Card style={{width:'15%'}}>
<center>
<ons-icon  size="25px"  icon="ion-heart-broken"></ons-icon >&nbsp;&nbsp;อาการ :  {data.patientSymptom}</center></Ons.Card></center>


           <div style={{ textAlign: 'center',paddingTop:'10px', paddingBottom:'10px' }}>
                        <center>
                            <Ons.List style={{width: '600px'}}>
                        <Ons.ListItem>&nbsp;
                            รายละเอียดเพิ่มเติม &nbsp;&nbsp;: &nbsp;&nbsp;
                            <p>
                                <textarea
                                    rows = "4" cols = "50"
                                    value={this.state.details}
                                    onChange={this.handledetailsChange.bind(this)}
                                >
                                </textarea>
                            </p>

                        </Ons.ListItem>
                            </Ons.List>
                        </center>
                    </div>

                <center>

               <Ons.Card style={{width:'25%'}}>
              <center>
             <h4><ons-icon  size="25px"  icon="ion-person"></ons-icon >&nbsp;&nbsp;คนไข้</h4>
             {data.firstName}&nbsp;&nbsp;&nbsp;{data.patientLastName}

            {/* <h4><ons-icon  size="25px"  icon="ion-person"></ons-icon >&nbsp;&nbsp;ห้อง</h4>
            {data.type_room}*/}

                  <h4><ons-icon size="25px"  icon="ion-person"></ons-icon>&nbsp;&nbsp;พยาบาล </h4>
                  {nfemp}&nbsp;&nbsp;&nbsp;{nlemp}

                  </center>
                 </Ons.Card>

                   </center>

                  <p>
              <center>
             <Ons.Button onClick={this.showDialog.bind(this)}>
                  บันทึก
                </Ons.Button>&nbsp;&nbsp;
                <Ons.Button onClick={this.handlePushSearchFollowP.bind(this)}>
                  กลับสู่หน้า ค้นหาไอดี
                </Ons.Button>
                 </center>
                 </p>


              {/*/<center>
              <Ons.Button onClick={this.handleClick(
             pid,lid,this.state.blood,this.state.urin,this.state.spinal_cord,
              this.state.infection,this.state.microbiological_culture,this.state.x_sray,this.state.ultraSound,this.state.mri,
              this.state.biopsy,this.state.autopsy,this.state.d_patient,this.state.d_doctor
              )}>
              <Ons.Icon icon='ion-android-clipboard' /> บันทึก </Ons.Button>
                 </center>
                    &nbsp;&nbsp;&nbsp;
            <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>*/}
            <Ons.Dialog
                  isOpen={this.state.dialogShown}
                >
                <div style={{textAlign: 'center', margin: '20px'}}>
            <p style={{opacity: 0.5}}>บันทึก</p>
                  <p>

              <center>


                <Ons.Button onClick={this.handleClick(
                    pid,lid,this.state.sad,this.state.worry,this.state.happy,
                    this.state.pain,this.state.tried,this.state.squeamish,this.state.sleepy,this.state.anorexia,
                    this.state.tried2,this.state.details,this.state.f_patient,this.state.f_nurse
                    )}>
                    <Ons.Icon icon='ion-android-clipboard' /> Save </Ons.Button>
                    &nbsp;&nbsp;&nbsp;


                    <Ons.Button onClick={this.handlePushPrintFollowP.bind(this)}>Print</Ons.Button>

                    &nbsp;&nbsp;&nbsp;
                    <Ons.Button onClick={this.handlePushMenu.bind(this)}>กลับสู่หน้า Menu</Ons.Button>


                    </center>
               </p>

              </div>

                  </Ons.Dialog>
                  </section>
            </Ons.Page>
          );
        }
    }

    class PrintDiagnose extends React.Component {
      constructor(props) {
        super(props);
        this.state = {diagnoses: []}
        this.state = {
          //  date: new Date(),
            blood:'',
            urin:'',
            spinal_cord:'',
            infection:'',
            microbiological_culture:'',
            x_sray:'',
            ultraSound:'',
            mri:'',
            biopsy:'',
            autopsy:'',
            d_patient: data.firstName+data.patientLastName,
            d_doctor: nfemp+nlemp



      }
  };

  handlePushManager(){
      //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
      ReactDOM.render(<SearchPrintDiagnose />, document.getElementById('react'));
    }
      renderToolbar() {
        return (
          <Ons.Toolbar>
            <div className='center'> ระบบวินิจฉัย </div>
            <div className="right" paddingRight="20px" paddingLeft="20px"></div>
          </Ons.Toolbar>
        );
      }
      componentDidMount() {
        client({method: 'GET', path: '/api/diagnoses'}).done(response => {
            this.setState({diagnoses: response.entity._embedded.diagnoses});
        });
      }
      showMenu() {
        this.props.showMenu();
      }
      handled_patient(e) {
          this.setState({d_patient: e.target.value});
      }

      handleblood(e) {
          this.setState({blood: e.target.value});
      }

      handleurin(e) {
          this.setState({urin: e.target.value});
      }

      handlespinal_cord(e) {
          this.setState({spinal_cord: e.target.value});
      }

      handleinfection(e) {
          this.setState({infection: e.target.value});
      }

      handlemicrobiological_culture(e) {
          this.setState({microbiological_culture: e.target.value});
      }

      handlex_sray(e) {
          this.setState({x_sray: e.target.value});
      }

      handleultraSound(e) {
          this.setState({ultraSound: e.target.value});
      }

      handlemri(e) {
          this.setState({mri: e.target.value});
      }

      handlebiopsy(e) {
          this.setState({biopsy: e.target.value});
      }

      handleautopsy(e) {
          this.setState({autopsy: e.target.value});
      }


     /* resetPage(){
        this.props.navigator.resetPage({component : ManageDiagnose, key : ManageDiagnose})
      }*/

      print() {
        window.print();
      }


      render() {
        return (
          <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
             &nbsp;
             <center>
             <center>
             <Ons.List>
                <Ons.ListHeader>&nbsp;</Ons.ListHeader>
              </Ons.List>
             <Ons.Card style={{width:'39%'}}>
            <div style={{ textAlign: 'center', paddingTop:'10px', paddingBottom:'10px'}}>
                            <center>
                            <h4><ons-icon size="25px"  icon="ion-clipboard"></ons-icon>&nbsp;&nbsp;ผลวินินิจฉัย</h4>
                              <Ons.ListHeader> การวินิจฉัยทางห้องปฎิบัติการวิทยา (Laboratory diagnosis) </Ons.ListHeader>
                              <Ons.List style={{width: '600px'}}>
                                <Ons.ListItem >


                                    <b>ตรวจเลือด</b>&nbsp;&nbsp;: &nbsp; {data.blood} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                   &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;  &nbsp;
                                                                                                                <p>
                                   <b>ตรวจปัสสาวะ</b> &nbsp;&nbsp;:&nbsp;&nbsp; {data.urin}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                                                                                                </p>

                                  <b>ตรวจน้ำไขสันหลัง</b>&nbsp;&nbsp;: &nbsp;&nbsp;{data.spinal_cord}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                                                                                                                <p>
                               <b> ตรวจเชื้อ</b> &nbsp;&nbsp;:&nbsp;&nbsp; {data.infection}
                                                                                                                </p>
                        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
                          &nbsp;&nbsp;&nbsp; &nbsp;
                          <b>ตรวจเพาะเชื้อ</b>&nbsp;&nbsp;:{data.microbiological_culture}

                                </Ons.ListItem>
                                 </Ons.List>
                                 </center>
                                 <center>

                            <Ons.ListHeader>การวินิจฉัยทางรังสีวิทยา  (Radiological diagnosis) </Ons.ListHeader>
                              <Ons.List style={{width: '600px'}}>
                                <Ons.ListItem >

                                <b>X-sray</b> &nbsp;&nbsp;: &nbsp;&nbsp;{data.x_sray}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                                                                                                                <p>
                               <b> UltraSound</b>  &nbsp;&nbsp;:&nbsp;&nbsp; {data.ultraSound}
                                                                                                                </p>
                        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;

                        <b> X-sray Computer[MRI]</b>&nbsp;&nbsp;:{data.mri}

                                </Ons.ListItem>
                                 </Ons.List>
                                 </center>

                                  <center>
                            <Ons.ListHeader> การวินิจฉัยทางพยาธิวิทยา (Pathological diagnosis) </Ons.ListHeader>
                              <Ons.List style={{width: '600px'}}>
                                <Ons.ListItem >
                                <b> การตัดชิ้นเนื้อไปตรวจ</b> &nbsp;&nbsp;: &nbsp;&nbsp;{data.biopsy}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                      <p>
                            <b>ตรวจศพ</b> &nbsp;&nbsp;:&nbsp;&nbsp; {data.autopsy}
                       </p>

                                </Ons.ListItem>
                                                       <Ons.ListItem >
                              <ons-icon size="25px"  icon="ion-person"> </ons-icon> &nbsp;<b>คนไข้</b> &nbsp;&nbsp;: &nbsp;&nbsp;{}&nbsp;{data.d_patient}&nbsp;{}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                                                                                                                <p>
                  <ons-icon size="25px"  icon="ion-person">	</ons-icon>	&nbsp;<b>	แพทย์</b> &nbsp;&nbsp;:&nbsp;&nbsp; {nfemp}&nbsp;&nbsp; {nlemp}
                                                                                                                </p>
                                </Ons.ListItem>
                                 </Ons.List>
                                 </center>

                                 </div>



           </Ons.Card>
            </center>
            <Ons.List>
                <Ons.ListHeader>&nbsp;</Ons.ListHeader>
              </Ons.List>
              </center>
            <center>
            <Ons.Card>
            <Ons.List style={{textAlign:'center'}}
            dataSource={this.state.diagnoses}

            />
            </Ons.Card>
            </center>
            &nbsp;&nbsp;&nbsp;

            <div style={{ textAlign: 'center', paddingTop:'15px', paddingBottom:'10px', paddingLeft:'20%', paddingRight:'20%'}}>
              <Ons.Button
                  onClick={this.print.bind(this)}>
                <Ons.Icon icon='ion-printer' />&nbsp;
                พิมพ์ ใบผลวินิจฉัย</Ons.Button>
                &nbsp;&nbsp;
                <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า ค้นหาไอดี</Ons.Button>

            </div>
          </Ons.Page>

        );
      }
    }

    class SearchPrintDiagnose extends React.Component {

          constructor(props) {
              super(props);

              this.state = {
                  title: props.title ? props.title : 'Custom Page',
                  nextTitle: null

              }
          }

          push() {

              fetch('http://localhost:8080/api/diagnoses/search/findByDid?'+
                  'Did=' + this.state.did )

                  .then((response)=> response.json())
                  .then((responseJson) => {

                      data = responseJson;
                      console.log('data =>' + data);

              did = this.state.did;

             ReactDOM.render(<PrintDiagnose />, document.getElementById('react'));
                      /*this.props.navigator.pushPage({ component: FollowP,
                      props: { key: 'FollowP'} });*/

                  })
                  .catch((error) => {
                      ons.notification.alert('ไม่พบไอดีใบผลวินิจฉัย');
                      console.log('data not found !!!')
                  });


          }



          handleMenu(){
              //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
              ReactDOM.render(<Menu />, document.getElementById('react'));
            }
            handlePushManager(){
              //this.props.navigator.resetPage({component: ManageDiagnose,key: 'ManageDiagnose',},{ animation: 'fade' });
              ReactDOM.render(<ManageDiagnose />, document.getElementById('react'));
            }


             renderToolbar() {
              return (
                    <Ons.Toolbar>

                       <div className='center'>ระบบติดตามอาการผู้ป่วย</div>

                    </Ons.Toolbar>
              );
          }

          render() {
              return (
                  <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                        <center>
                   <Ons.Card style={{width:'20%'}}>
                  <div style={{ textAlign: 'center' }}>

                  <h1>พิมพ์ใบผลวินิจฉัย</h1>
                  <br/>
                  <h4>ค้นหาข้อมูลคนไข้ ด้วย ไอดีใบผลวินิจฉัย</h4>
                  <p>
                  <br/>

                      <Ons.Input
                          value={this.state.did}
                          onChange={evt => this.setState({did: evt.target.value})}
                          modifier='underbar'
                          float
                          placeholder='ไอดีใบผลวินิจฉัย' />
                  </p>
                  <br/>
                  </div>
                </Ons.Card>
                            </center>
                <center>
                <br/>
                  <Ons.Button onClick={this.push.bind(this)}>Search</Ons.Button>
                  <br/> <br/>
              <Ons.Button onClick={this.handlePushManager.bind(this)}>กลับสู่หน้า รายชื่อ</Ons.Button>
                </center>
                  <br/><br/><br/>
                  <section style={{textAlign: 'center'}}>
                      <img src={"https://f.ptcdn.info/924/046/000/ofwbvg7imm5ieHzbA91-o.png"} alt="Onsen UI" style={{ width: '20%' }} />
                  </section>


            </Ons.Page>
          );
      }

  }

/* = = = = = = <AppAe> = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  */
class PageNav1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: undefined,
            patients: [],
            data: [],
            search: '',
            fnDoc: nfemp,
            lnDoc: nlemp


        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }


    handleSearchChange(e) {
        this.setState({ search: e.target.value });
    }

    handleClick() {

        if (this.state.search === '') {
            ons.notification.alert('กรุณากรอก ID');
        } else {

            this.setState({ res: undefined });
            client({ method: 'GET', path: '/api/patientSaves/' + this.state.search })
                .done(response => {
                    this.setState({ res: response, patients: [response.entity] });
                }, response => {
                    if  (response.status.code === 404) {
                        ons.notification.alert('ไม่พบ ID ที่ค้นหา');
                        this.setState({ res: response });

                    }else {
                        ons.notification.alert('กรอกเป็นตัวเลข ID คะ');
                    }
                });
        }
    }

    handleViewClick(e) {
        this.pushPage(e.currentTarget.dataset.pid);
    }

    pushPage(pid) {
        this.props.navigator.pushPage({ component: PageNav2, props: { key: 'pageNav2', title: pid } });
    }

    loadData() {
        client({ method: 'GET', path: '/api/patientSaves/' })
            .done(response => {
                this.setState({ res: response, patients: response.entity._embedded.patientSaves });
            }, response => {
                if (response.status.code === 404) {
                    ons.notification.alert('พังแล้ว คะ');
                } else {
                    ons.notification.alert('กำลังเข้าสู่ระบบ คะ');
                }
            });
    }

    componentDidMount() {
        this.loadData()
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                 <div className='left' style={{margin: 5}}>
                        login :  {this.state.fnDoc} {this.state.lnDoc}
                    </div>
                <div className='center'>ระบบนัดหมายผู้ป่วย</div>

            </Ons.Toolbar>
        );
    }



    render() {


        if (!this.state.res) {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>
                        <ons-progress-circular indeterminate></ons-progress-circular>
                    </section>
                </Ons.Page>
            );
        }
        if (this.state.patients.length !== 0) {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>



                        <img src={"https://upload.wikimedia.org/wikipedia/th/8/88/Suthlogo.jpg"} alt="Onsen UI" style={{ width: '60%' }} />




                 

                        <p>
                            <Ons.SearchInput
                                placeholder='กรุณากรอก ID'
                                value={this.state.search}
                                onChange={this.handleSearchChange} />
                        </p>

                        <p>
                            <Ons.Button onClick={this.handleClick}>ค้นหา</Ons.Button>
                        </p>

                        <center>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>ชื่อ</th>
                                        <th>นามสกุล</th>
                                        <th>อายุ</th>
                                        <th>ส่วนสูง</th>
                                        <th>น้ำหนัก</th>
                                        <th>กรุ๊ปเลือด</th>
                                        <th>หมายเลขโทรศัพท์</th>
                                        <th>การป่วย/อาการผู้ป่วย</th>
                                        <th>ข้อมูลการนัดหมาย</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {

                                        this.state.patients.map((patient) => (
                                            <tr key={patient._links.self.href.split("/").pop()}>
                                                <th>{patient._links.self.href.split("/").pop()}</th>
                                                <td>{patient.firstName}</td>
                                                <td>{patient.patientLastName}</td>
                                                <td>{patient.patientAge}</td>
                                                <td>{patient.patientHight}</td>
                                                <td>{patient.patientWeight}</td>
                                                <td>{patient.patientBloodtype}</td>
                                                <td>{patient.patientPhone}</td>
                                                <td>{patient.patientSymptom}</td>
                                                <td><Ons.Button style={{ margin: '6px' }} modifier='quiet' data-pid={patient._links.self.href.split("/").pop()} onClick={this.handleViewClick.bind(this)}>View</Ons.Button></td>
                                            </tr>
                                        ), this)
                                    }
                                </tbody>
                            </table>
                        </center>
                    </section>
                </Ons.Page>
            );
        } else {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>
                        <h1>No Patient In Database!</h1>
                    </section>
                </Ons.Page>
            );
        }
    }
}
////////////////////////////////
//////////// View BaiNut
//////////////////////////////

class PageNav2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title ? props.title : '?',
            data: []
        };
    }

    loadData() {
        client({ method: 'GET', path: '/findBaiNutByPatientSaveId/' + this.state.title }).done(response => {
            this.setState({ data: response.entity.reverse() });
        });
    }

    componentDidMount() {
        this.loadData();
    }


    handleBackClick() {
        // ons.notification.confirm('ย้อนกลับหรือไม่ ?')
        //  .then((response) => {
        //    if (response === 1) {
        this.props.navigator.popPage();
        // }
        // });
    }

    handleNewClick() {
        this.props.navigator.pushPage({ component: PageNav3, props: { key: 'pageNav3', title: this.state.title, onUnmount: () => this.loadData() } });
    }


    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBackClick.bind(this)}>ย้อนกลับ</Ons.BackButton></div>
                <div className='center'>{"ใบนัดหมายเลข ID " + this.state.title}</div>
                <div className='right'>
                    <Ons.ToolbarButton>
                        <Ons.Icon onClick={this.handleNewClick.bind(this)} icon="md-plus"></Ons.Icon>
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }

    render() {
        if (this.state.data.length === 0) {
            return (<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <section style={{ textAlign: 'center' }}>
                    <p>
                        ยังไม่มีการนัดหมาย เพิ่มการนัด " + "
        </p>
                </section>
            </Ons.Page>);
        } else {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    {
                        this.state.data.map((b) => (
                            <section key={b.id} style={{ textAlign: 'center' }}>


                                <section style={{ textAlign: 'center' }}>
                                    <img src={"http://pdr.suth.go.th/wp-content/uploads/2017/05/Capture-1-300x138.jpg"} alt="Onsen UI" style={{ width: '15%' }} />
                                </section>





                                <div>
                                    <p><b>แพทย์ผู้นัด : </b>
                                        {b.firstNameDocter + " " + b.lastNameDocter}</p>
                                </div>

                                <div>
                                    <p><b>แผนก-ห้องตรวจ : </b>
                                        {b.department}</p>
                                </div>

                                <div>
                                    <b>วันที่นัด : </b>
                                    {b.dateOfAppointment}

                                    <b>. เวลา : </b>
                                    {b.timeOfAppointment}
                                </div>

                                <p></p>

                                <div><b>ปฏิบัติก่อนพบแพทย์ :</b>
                                    {b.practice}
                                </div>

                                <p></p>

                                <div> <b>เหตุที่นัด :</b>
                                    {b.comment}
                                </div>
                                <div>
                                    <center>
                                        ***ติดต่อสอบถาม : 044-376-555 โรงพยาบาล มทส.***
                                    </center>
                                </div>
                                <p></p>
                                <center><Ons.Button style={{ margin: '6px' }} modifier='outline'>สั่งพิมพ์</Ons.Button></center>
                                <hr></hr>
                            </section>), this)
                    }

                </Ons.Page>
            );
        }
    }
}

//
// New baiNut
//
class PageNav3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title ? props.title : '?',

            fnDoc: nfemp,
            lnDoc: nlemp,
            depmnt: '',
            date: '',
            time: '',
            prac: '',
            cmnt: ''

        };
    }


    handleVegetableChange(vegetable) {
        this.setState({selectedVegetable: vegetable});
      }


    handleBackClick() {
        ons.notification.confirm('ย้อนกลับหรือไม่ ?')
            .then((response) => {
                if (response === 1) {
                    this.props.navigator.popPage();
                }
            });
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBackClick.bind(this)}>ย้อนกลับ</Ons.BackButton></div>
                <div className='center'>{"สร้างใบนัดผู้ใช้บริการ ID  " + this.state.title}</div>
            </Ons.Toolbar>





        );
    }




    handleDpmntChange(e) {
        this.setState({ depmnt: e.target.value });
    }

    handleDateChange(e) {
        this.setState({ date: e.target.value });
    }

    handleTimeChange(e) {
        this.setState({ time: e.target.value });
    }

    handlePracticeChange(e) {
        this.setState({ prac: e.target.value });
    }

    handleCommentChange(e) {
        this.setState({ cmnt: e.target.value });
    }




    handleSaveClick() {
        client({
            method: 'GET', path: '/saveBainut/' + this.state.title + '/' + this.state.fnDoc + '/' + this.state.lnDoc
                + '/' + this.state.depmnt + '/' + this.state.date + '/' + this.state.time + '/' + this.state.prac + '/' + this.state.cmnt
        })
            .done((response) => {
                ons.notification.alert('บันทึกสำเร็จ');
                this.props.navigator.popPage();
            });
    }

    render() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

                <section style={{ textAlign: 'center' }}>
                    <img src={"https://www.isnar-img.com/wp-content/uploads/medecine.png"} alt="Onsen UI" style={{ width: '20%' }} />
                </section>


                <section style={{ textAlign: 'center' }}>

                {/* <h1>ชื่อผู้ป่วย</h1>
                   <div style={{margin: 20}}>
                          <p>{this.state.faa} {this.state.laa}</p>
                    </div>

                    <p>
                        <Ons.Input
                            value={this.state.faa}
                            modifier='underbar'
                            id = '1'
                            onChange={this.handleFaaChange.bind(this)}
                            float
                            placeholder='ชื่อ' />
                        <Ons.Input
                            value={this.state.laa}
                            modifier='underbar'
                            id = '2'
                            onChange={this.handleLaaChange.bind(this)}
                            float
                            placeholder='นามสกุล' />
                    </p>*/}

                    <h1>แพทย์ผู้นัด</h1>
                    <div style={{margin: 20}}>
                          <p>{this.state.fnDoc} {this.state.lnDoc}</p>
                    </div>




                {/*    <p>
                        <Ons.Input
                            value={this.state.fnDoc}
                            modifier='underbar'
                            onChange={this.handleDFNameChange.bind(this)}
                            float
                            placeholder='ชื่อ' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.lnDoc}
                            modifier='underbar'
                            onChange={this.handleDLNameChange.bind(this)}
                            float
                            placeholder='นามสกุล' />
                    </p>*/}
                  {/*  <p>
                        <Ons.Input
                            value={this.state.depmnt}
                            modifier='underbar'
                            onChange={this.handleDpmntChange.bind(this)}
                            float
                            placeholder='แผนก-ห้องตรวจ' />
                    </p>*/}


                <h1>แผนก-ห้องตรวจ</h1>
                    <div style={{margin: 20}}>
                          <Ons.Select id="choose-sel" value={this.state.depmnt} depmnt={this.state.depmnt} onChange={this.handleDpmntChange.bind(this)}>
                                      <option value="ศัลยกรรม">ศัลยกรรม</option>
                                      <option value="กุมารเวชกรรม">กุมารเวชกรรม</option>
                                      <option value="ทันตกรรม">ทันตกรรม</option>
                                      <option value="อายุรกรรม">อายุรกรรม</option>
                                      <option value="หู คอ จมูก">หู คอ จมูก</option>
                                      <option value="เภสัชกรรม">เภสัชกรรม</option>
                                      <option value="จิตเวช"> จิตเวช</option>
                             </Ons.Select>
                         </div>



                         { /*   <tr><td>วันที่นัด</td><td style={{color:'blue'}}>
                         <Ons.Input
                                        value={this.state.hostdate}
                                        onChange={this.handleDateChange}
                                        id = '1'
                                        modifier='underbar'
                                        type = 'date'
                                        float
                                        placeholder='วันที่นัด' />
                                    </td></tr>
                                        <tr><td>เวลานัด</td><td style={{color:'blue'}}>
                         <Ons.Input
                                        value={this.state.hosttime}
                                        onChange={this.handleTimeChange}
                                        id = '1'
                                        modifier='underbar'
                                        type = 'time'
                                        float
                                        placeholder='เวลานัด' />
                                    </td></tr>*/}

                <h1>วัน/เวลานัด</h1>
                    <p>
                    <Ons.Input input-id='datatest' type="date"
                            value={this.state.date}
                            onChange={this.handleDateChange.bind(this)}/>

                    <Ons.Input input-id='datatest' type = "time"
                             value={this.state.time}
                             onChange={this.handleTimeChange.bind(this)}/>
                    </p>


                    <h1>สิ่งที่ต้องเตรียม/ปฏิบัติก่อนพบแพทย์</h1>
                    <textarea
                        value={this.state.prac}
                        onChange={this.handlePracticeChange.bind(this)} />


                    <p> </p>

                    <h1>เหตุที่นัด</h1>
                    <textarea
                        value={this.state.cmnt}
                        onChange={this.handleCommentChange.bind(this)} />


                    <Ons.ListHeader>&nbsp;</Ons.ListHeader>


                    <p>
                        <Ons.Button onClick={this.handleSaveClick.bind(this)}>บันทึก</Ons.Button>
                    </p>
                </section>

            </Ons.Page>
        );
    }
}


class AppAe extends React.Component {
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
        this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
    }

    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;

        return React.createElement(route.component, route.props);
    }

    render() {
        return (
            <Ons.Navigator initialRoute={{ component: PageNav1, props: { key: 'home' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        );
    }
}

/* = = = = = = = = = = = = =AE2 = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
class PageNav11 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: undefined,
            patients: [],
            data: [],
            search: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }


    handleSearchChange(e) {
        this.setState({ search: e.target.value });
    }

    handleClick() {
        if (this.state.search === '') {
            ons.notification.alert('กรุณากรอก ID');
        } else {
            this.setState({ res: undefined });
            client({ method: 'GET', path: '/api/patientSaves/' + this.state.search })
                .done(response => {
                    this.setState({ res: response, patients: [response.entity] });
                }, response => {
                    if (response.status.code === 404) {
                        ons.notification.alert('ไม่พบ ID ที่ค้นหา');
                        this.setState({ res: response });
                    } else {
                        ons.notification.alert('กรอกเป็นตัวเลข ID คะ');
                    }
                });
        }
    }

    handleViewClick(e) {
        this.pushPage(e.currentTarget.dataset.pid);
    }

    pushPage(pid) {
        this.props.navigator.pushPage({ component: PageNav22, props: { key: 'pageNav22', title: pid } });
    }

    loadData() {
        client({ method: 'GET', path: '/api/patientSaves/' })
            .done(response => {
                this.setState({ res: response, patients: response.entity._embedded.patientSaves });
            }, response => {
                if (response.status.code === 404) {
                    ons.notification.alert('พังแล้ว คะ');
                } else {
                    ons.notification.alert('กำลังเข้าสู่ระบบ คะ');
                }
            });
    }

    componentDidMount() {
        this.loadData()
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton>หน้าแรก</Ons.BackButton></div>
                <div className='center'>ระบบจ่ายยา</div>
            </Ons.Toolbar>
        );
    }



    render() {


        if (!this.state.res) {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>
                        <ons-progress-circular indeterminate></ons-progress-circular>
                    </section>
                </Ons.Page>
            );
        }
        if (this.state.patients.length !== 0) {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>



                        <img src={"http://haamor.com/media/images/articlepics/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A2%E0%B8%B2%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1-01.jpg"} alt="Onsen UI" style={{ width: '20%' }} />





                        <p>
                            <Ons.SearchInput
                                placeholder='กรุณากรอก ID'
                                value={this.state.search}
                                onChange={this.handleSearchChange} />
                        </p>

                        <p>
                            <Ons.Button onClick={this.handleClick}>ค้นหา</Ons.Button>
                        </p>

                        <center>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>ชื่อ</th>
                                        <th>นามสกุล</th>
                                        <th>อายุ</th>
                                        <th>ส่วนสูง</th>
                                        <th>น้ำหนัก</th>
                                        <th>กรุ๊ปเลือด</th>
                                        <th>หมายเลขโทรศัพท์</th>
                                        <th>การป่วย/อาการผู้ป่วย</th>
                                        <th>ข้อมูลการจ่ายยา</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {

                                        this.state.patients.map((patient) => (
                                            <tr key={patient._links.self.href.split("/").pop()}>
                                                <th>{patient._links.self.href.split("/").pop()}</th>
                                                <td>{patient.firstName}</td>
                                                <td>{patient.patientLastName}</td>
                                                <td>{patient.patientAge}</td>
                                                <td>{patient.patientHight}</td>
                                                <td>{patient.patientWeight}</td>
                                                <td>{patient.patientBloodtype}</td>
                                                <td>{patient.patientPhone}</td>
                                                <td>{patient.patientSymptom}</td>
                                                <td><Ons.Button style={{ margin: '6px' }} modifier='quiet' data-pid={patient._links.self.href.split("/").pop()} onClick={this.handleViewClick.bind(this)}>View</Ons.Button></td>
                                            </tr>
                                        ), this)
                                    }
                                </tbody>
                            </table>
                        </center>
                    </section>
                </Ons.Page>
            );
        } else {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    <section style={{ textAlign: 'center' }}>
                        <h1>No Patient In Database!</h1>
                    </section>
                </Ons.Page>
            );
        }
    }
}

////////////////////////////////
//////////// View BaiYa
//////////////////////////////

class PageNav22 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title ? props.title : '?',
            data: [],
            dataYa: []
        };
    }

    loadData() {
        client({ method: 'GET', path: '/findBaiYaByPatientSaveId/' + this.state.title })
        .done(response => {
            this.setState({ data: response.entity });
        });
    }

    componentDidMount() {
        this.loadData();
    }


    handleBackClick() {
        // ons.notification.confirm('ย้อนกลับหรือไม่ ?')
        //  .then((response) => {
        //    if (response === 1) {
        this.props.navigator.popPage();
        // }
        // });
    }

    handleNewClick() {
        this.props.navigator.pushPage({ component: PageNav33, props: { key: 'pageNav33', title: this.state.title, onUnmount: () => this.loadData() } });
    }


    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBackClick.bind(this)}>ย้อนกลับ</Ons.BackButton></div>
                <div className='center'>{"ใบจ่ายยาหมายเลข ID " + this.state.title}</div>
                <div className='right'>
                    <Ons.ToolbarButton>
                        <Ons.Icon onClick={this.handleNewClick.bind(this)} icon="md-plus"></Ons.Icon>
                    </Ons.ToolbarButton>
                </div>
            </Ons.Toolbar>
        );
    }

    render() {
        if (this.state.data.length === 0) {
            return (<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                <section style={{ textAlign: 'center' }}>
                    <p>
                        ยังไม่มีข้อมูลการจ่ายยา เพิ่มการจ่ายยา " + "
        </p>
                </section>
            </Ons.Page>);
        } else {
            return (
                <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
                    {
                        this.state.data.map((b) => (
                            <section key={b.id} style={{ textAlign: 'center' }}>


                                <section style={{ textAlign: 'center' }}>
                                    <img src={"http://www.somdej.or.th/images/images/doctor_article/15-01-2559/Drug_fight/4.jpg"} alt="Onsen UI" style={{ width: '15%' }} />
                                </section>






                                 <h1>เภสัชกรผู้จ่ายยา</h1>
                    <div style={{margin: 20}}>
                                    <p>{b.firstNameDocter} {b.lastNameDocter}</p>
                    </div>


                                <div>
                                    <p><b>ชนิดยา : </b>
                                        {
                                            b.listLetter.map((y,i) => (
                                                <li key={`${i}-${b.id}`}>
                                                    {y.pharmacyList.pharmacyName} {y.amout} หน่วย
                                                </li>
                                             ), this)
                                        }
                                    </p>


                                {b.dateOfAppointment}
                                </div>
                                <div>
                                    <b>จำนวนครั้งการรับประทานใน1วัน : </b>
                                    {b.takeTime}

                                    <b> ช่วงเวลารับประทาน : </b>
                                    {b.timeTakePerDay}
                                </div>


                                <p></p>

                                <div><b>หมายเหตุ :</b>


                                    {b.comment}
                                </div>

                                <p></p>







                                <div>
                                    <center>
                                        ***ติดต่อสอบถาม : 044-376-555 โรงพยาบาล มทส.***
                                    </center>
                                </div>
                                <p></p>
                                <center><Ons.Button onClick={print} style={{ margin: '6px' }} modifier='outline'>สั่งพิมพ์</Ons.Button></center>




                                <hr></hr>
                            </section>), this)
                    }

                </Ons.Page>
            );
        }
    }
}

//
// New baiYa
//
class PageNav33 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title ? props.title : '?',
            fnDoc: '',
            lnDoc: '',
            depmnt: '',
            date: '',
            time: '',
            prac: '',
            cmnt: '',
            yaList: [],
            selectedYa: ''
        };
    }

    handleBackClick() {
        ons.notification.confirm('ย้อนกลับหรือไม่ ?')
            .then((response) => {
                if (response === 1) {
                    this.props.navigator.popPage();
                }
            });
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/pharmacyLists' })
        .done(response => {
            this.setState({ yaList: response.entity });
        });
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    renderToolbar() {
        return (
            <Ons.Toolbar>
                <div className='left'><Ons.BackButton onClick={this.handleBackClick.bind(this)}>ย้อนกลับ</Ons.BackButton></div>
                <div className='center'>{"จัดยาผู้ใช้บริการ ID  " + this.state.title}</div>
            </Ons.Toolbar>





        );
    }



    handleDFNameChange(e) {
        this.setState({ fnDoc: e.target.value });
    }

    handleDLNameChange(e) {
        this.setState({ lnDoc: e.target.value });
    }

    handleDpmntChange(e) {
        this.setState({ depmnt: e.target.value });
    }

    handleDateChange(e) {
        this.setState({ date: e.target.value });
    }

    handleTimeChange(e) {
        this.setState({ time: e.target.value });
    }

    handlePracticeChange(e) {
        this.setState({ prac: e.target.value });
    }

    handleCommentChange(e) {
        this.setState({ cmnt: e.target.value });
    }

    handleCheckBox(e) {
        var chkBoxes = document.getElementsByClassName("checkbox__input")
        var chklength = chkBoxes.length;
        var selectedArray = "";
        for (var i = 0; i < chklength; i++) {
            if (chkBoxes[i].checked && document.getElementsByClassName("right list-item__right")[i].value != "" && document.getElementsByClassName("right list-item__right")[i].value != "0"){
                selectedArray += chkBoxes[i].id.split('-').pop() + "," + document.getElementsByClassName("right list-item__right")[i].value + ",";
            }
        }
        selectedArray = selectedArray.substring(0, selectedArray.length - 1);
        //console.log(selectedArray);
        this.setState({ selectedYa: selectedArray });
    }

    handleSaveClick() {
        client({
            method: 'GET', path: '/saveJudYa/' + this.state.title + '/' + this.state.fnDoc + '/' + this.state.lnDoc
            + '/' + this.state.selectedYa + '/' + this.state.date + '/' + this.state.time + '/' + this.state.prac
        })
        .done((response) => {
            ons.notification.alert('บันทึกสำเร็จ');
            this.props.navigator.popPage();
        });
    }

    renderCheckboxRow(row) {
        return (
            <Ons.ListItem key={row.id} tappable>
                <label className='left'>
                    <Ons.Checkbox
                        inputId={`checkbox-${row.id}`}
                        onChange={this.handleCheckBox.bind(this)}
                    />
                </label>
                <label htmlFor={`checkbox-${row.id}`} className='center'>
                    {row.pharmacyName}
                </label>
                <input type='number' onChange={this.handleCheckBox.bind(this)} htmlFor={`input-${row.id}`} className='right'></input>
            </Ons.ListItem>
        )
    }

    render() {
        return (

            <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

                <section style={{ textAlign: 'center' }}>
                    <img src={"http://haamor.com/media/images/articlepics/%E0%B8%A2%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B9%82%E0%B8%A3%E0%B8%84-01.jpg"} alt="Onsen UI" style={{ width: '20%' }} />
                </section>


                <section style={{ textAlign: 'center' }}>
                    <h1>เภสัชกรผู้จ่ายยา</h1>
                    <p>
                        <Ons.Input
                            value={this.state.fnDoc}
                            modifier='underbar'
                            id = '1'
                            onChange={this.handleDFNameChange.bind(this)}
                            float
                            placeholder='ชื่อ' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.lnDoc}
                            modifier='underbar'
                            id = '2'
                            onChange={this.handleDLNameChange.bind(this)}
                            float
                            placeholder='นามสกุล' />
                    </p>
                  {/*  <p>
                        <Ons.Input
                            value={this.state.depmnt}
                            modifier='underbar'
                            onChange={this.handleDpmntChange.bind(this)}
                            float
                            placeholder='แผนก-ห้องตรวจ' />
                    </p>*/}


                <h1>ประเภทยา/ตามอาการ</h1>
                <div style={{ margin: 20 }}>
                        <Ons.List
                            dataSource={this.state.yaList}
                            renderHeader={() => <Ons.ListHeader>ประเภทยา/จำนวน</Ons.ListHeader>}
                            renderRow={this.renderCheckboxRow.bind(this)}
                        />
                        {/*<Ons.Select id="choose-sel" value={this.state.depmnt} depmnt={this.state.depmnt} onChange={this.handleDpmntChange.bind(this)}>
                                      <option value="ยาแก้ปวดท้อง">ยาแก้ปวดท้อง</option>
                                      <option value="ยาแก้ปวดหัว">ยาแก้ปวดหัว</option>
                                      <option value="ยาแก้พิษสุนัขบ้า">ยาแก้พิษสุนัขบ้า</option>
                                      <option value="ยาหม่อง">ยาหม่อง</option>
                                      <option value="ยาแก้คัดจมูก">ยาแก้คัดจมูก</option>
                                      <option value="ยาดม">ยาดม</option>
                                      <option value="ยาระบบประสาท"> ยาระบบประสาท</option>
                             </Ons.Select>*/}
                         </div>


                {/*<h1>จำนวน/เม็ด</h1>
                    <textarea
                        value={this.state.cmnt}
                        onChange={this.handleCommentChange.bind(this)} />*/}




                 <h1>การรับประทานยา</h1>
                    <p>
                        <Ons.Input
                            value={this.state.date}
                            modifier='underbar'
                            id = '3'
                            onChange={this.handleDateChange.bind(this)}
                            float
                            placeholder='จำนวนครั้งการรับประทานใน1วัน' />
                    </p>
                    <p>
                        <Ons.Input
                            value={this.state.time}
                            modifier='underbar'
                            id = '4'
                            onChange={this.handleTimeChange.bind(this)}
                            float
                            placeholder='ช่วงเวลารับประทาน' />
                    </p>


                    <h1>คำเตือนก่อนรับประทาน</h1>
                    <textarea
                        value={this.state.prac}
                        onChange={this.handlePracticeChange.bind(this)} />


                    <p> </p>




                    <Ons.ListHeader>&nbsp;</Ons.ListHeader>



                    <p>
                        <Ons.Button onClick={this.handleSaveClick.bind(this)}>บันทึก</Ons.Button>
                    </p>
                </section>

            </Ons.Page>
        );
    }
}


export default class AppAe2 extends React.Component {
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
        this.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
    }

    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;

        return React.createElement(route.component, route.props);
    }

    render() {
        return (
            <Ons.Navigator initialRoute={{ component: PageNav11, props: { key: 'home' } }} renderPage={this.renderPage.bind(this)} ref={(navigator) => { this.navigator = navigator; }} />
        );
    }
}



/* = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = */
ons.ready(function() {

  // ReactDOM.render(<QRCode value="http://facebook.github.io/react/" />, document.getElementById('myform'));
  ReactDOM.render(<App />, document.getElementById('react'));

});
