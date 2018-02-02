import React from 'react';

const Footer = props=>{
  return (
    <footer className="page-footer">
      <div className="page-footer-content row">
        <div className="footer-legal">
          <p className="copyright col-m-6">
            <a className="link-copyright" href="#" target="_blank" title="Async"></a>
            Copyright © 2018 Async All rights reserved.</p>
          <div className="footer-legal-system col-m-6">
            <p className="Async-version">
              <strong>Async Commerce</strong> ver. 0.0.1</p>
            <a className="link-report" href="https://github.com/Jakhotiya/react-uiComponents/issues" id="footer_bug_tracking">Report an Issue</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

