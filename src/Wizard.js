import React from 'react';
import Download from 'setup/Download';
import 'setup/setup.css';

const Store = ({form, handleChange}) => (
  <div>
    <h2 className='page-sub-title'>Add Store Information</h2>
    <form>
      <fieldset className='form-fieldset'>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="username">
              Your name
            </label>
          </div>
          <div className="col-m-4">
            <input className="form-el-input" value={form.username}
                   onChange={e => handleChange('username', e.target.value)} type="text" name="username" required/>
            <div className="error-container">

            </div>
          </div>
        </div>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="url">
              Store URL
            </label>
          </div>
          <div className="col-m-4">
            <input className="form-el-input" value={form.url} onChange={e => handleChange('url', e.target.value)}
                   type="text" name="url" required/>
            <div className="error-container">

            </div>
          </div>
        </div>

      </fieldset>
    </form>
  </div>
)

const Api = ({form, handleChange}) => (
  <div>
    <h2 className='page-sub-title'>Add API keys</h2>
    <form>
      <fieldset className='form-fieldset'>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required">
              Consumer Key
            </label>
          </div>
          <div className="col-m-4">
            <input className="form-el-input" value={form.consumer_key}
                   onChange={e => handleChange('consumer_key', e.target.value)} type="text" name="consumer_key"
                   required/>
            <div className="error-container">

            </div>
          </div>
        </div>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="consumer_secret">
              Consumer Secret
            </label>
          </div>
          <div className="col-m-4">
            <input className="form-el-input" value={form.consumer_secret}
                   onChange={e => handleChange('consumer_secret', e.target.value)} type="text" name="consumer_secret"
                   required/>
            <div className="error-container">

            </div>
          </div>
        </div>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="access_token">
              Access Token
            </label>
          </div>
          <div className="col-m-4">
            <input className="form-el-input" value={form.access_token}
                   onChange={e => handleChange('access_token', e.target.value)} type="text" name="access_token"
                   required/>
            <div className="error-container">

            </div>
          </div>
        </div>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="access_secret">
              Access Token Secret
            </label>
          </div>
          <div className="col-m-4">
            <input className="form-el-input" value={form.access_secret}
                   onChange={e => handleChange('access_secret', e.target.value)} type="text" name="access_secret"
                   required/>
            <div className="error-container">

            </div>
          </div>
        </div>

      </fieldset>
    </form>
  </div>
)

const Actions = props => (
  <div className={`nav-bar-outer-actions ${props.navShow}`}>
    <div className="outer-actions-inner-wrap">
      <div className="btn-wrap btn-wrap-triangle-right btn-wrap-next">
        <button type="button" className="btn btn-prime" onClick={props.next}>Next</button>
      </div>
      <div className="btn-wrap btn-wrap-triangle-left btn-wrap-prev">
        <button type="button" className="btn" onClick={props.prev}>Back</button>
      </div>
    </div>
  </div>
);



class Wizard extends React.Component {
  state = {
    step:1,
    username: '',
    url: '',
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_secret: ''
  }

  save() {

  }

  next=(e)=>{
    e.preventDefault();
    if(this.state.step===2){
      this.setState({step:3});
      return;
    }
    this.setState({step:2})
  }

  prev=(e)=>{
    e.preventDefault();
    if(this.state.step===1) return;
    this.setState({step:1})
  }


  handleChange = (name, value) => {
    this.setState({[name]: value});
  }

  render() {
    const navShow = this.state.step===3 ? 'hide' : 'show';
    return (
        <div className='container'>
          <header className='page-header row'>
            <h1>One time setup</h1>
          </header>
          <div className='page-content'>
            <nav className={`nav ${navShow}`}>
              <ul className='nav-bar'>
                <li className="active">
                  <a className='white-space-pre-line' onClick={this.next}>
                    Store
                    Information
                  </a>
                </li>
                <li className={this.state.step===2 ? 'active' : ''}>
                  <a className='white-space-pre-line' onClick={this.prev}> API keys </a>
                </li>
              </ul>
            </nav>
            <Actions navShow={navShow} step={this.state.step} next={this.next} prev={this.prev}/>
            { this.state.step===1 && <Store form={this.state} handleChange={this.handleChange}/>}
            {this.state.step===2 && <Api form={this.state} handleChange={this.handleChange}/>}
            {this.state.step===3 && <Download/>}
          </div>
        </div>
    );
  }
}

export default Wizard;