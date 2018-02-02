import React from 'react';
import {HashRouter,Link,Route} from 'react-router-dom';
import 'setup/setup.css';

const Store = props=>(
  <div>
    <h2 className='page-sub-title'>Add Store Information</h2>
    <form>
      <fieldset className='form-fieldset'>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="dbHost">
              Your name
            </label>
          </div>
          <div className="col-m-4">
            <input  className="form-el-input"   type="text" name="username" required />
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
            <input  className="form-el-input"   type="text" name="url" required />
            <div className="error-container">

            </div>
          </div>
        </div>

      </fieldset>
    </form>
  </div>
)

const Api = props=>(
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
            <input  className="form-el-input"   type="text" name="public-key" required />
            <div className="error-container">

            </div>
          </div>
        </div>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="url">
              Consumer Secret
            </label>
          </div>
          <div className="col-m-4">
            <input  className="form-el-input" type="text" name="private-key" required />
            <div className="error-container">

            </div>
          </div>
        </div>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="url">
              Access Token
            </label>
          </div>
          <div className="col-m-4">
            <input  className="form-el-input" type="text" name="private-key" required />
            <div className="error-container">

            </div>
          </div>
        </div>

        <div className="row form-row">
          <div className="col-m-3">
            <label className="form-label required" htmlFor="url">
              Access Token Secret
            </label>
          </div>
          <div className="col-m-4">
            <input  className="form-el-input" type="text" name="private-key" required />
            <div className="error-container">

            </div>
          </div>
        </div>

      </fieldset>
    </form>
  </div>
)

const Actions = props=>(
  <div className="nav-bar-outer-actions">
    <div className="outer-actions-inner-wrap">
      <div className="btn-wrap btn-wrap-triangle-right btn-wrap-next">
        <button type="button" className="btn btn-prime" onClick={e=>props.next()}>Next</button>
      </div>
      <div className="btn-wrap btn-wrap-triangle-left btn-wrap-prev">
        <button type="button" className="btn" onClick={e=>props.prev()}>Back</button>
      </div>
    </div>
  </div>
);

class Wizard extends React.Component
{
  render(){

   return (
     <HashRouter basename='/setup'>
       <div className='container'>
         <header className='page-header row'>
           <h1>Just a little setup to get started</h1>
         </header>
         <div className='page-content'>
         <nav className='nav show'>
         <ul className='nav-bar'>
           <li className="active">
             <Link className='white-space-pre-line' to="/store">
             Store
             Information
           </Link>
           </li>
           <li ><Link className='white-space-pre-line' to="/api"> API keys </Link></li>
         </ul>
         </nav>
           <Actions/>
         <Route path='/store' component={Store}/>
         <Route path='/api' component={Api}/>
         </div>
       </div>
     </HashRouter>
   );
  }
}

export default Wizard;