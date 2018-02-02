import React from 'react';
import {Link} from 'react-router-dom';

const Sidenav = props=>{
  return (
    <div className='menu-wrapper _fixed'>
      <nav className="admin__menu">
        <ul id="nav" role="menubar">
          <li className='level-0'><Link to="/"><span>Products</span></Link></li>
          <li className='level-0'><Link to="/settings"><span>Settings</span></Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav;