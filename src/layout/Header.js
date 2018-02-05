import React from 'react';
import Online from './Online';

const Header = props=>{
  return (
    <header className='page-header row'>
      <h1>Magento Admin</h1>
      <h4><Online/></h4>
    </header>
  );
}

export default Header;