import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left"><span><img src="public/logo.png" alt=""/>YUMIFY</span></div>
          <div className="right">
            <p>Kankarbagh, Patna, Bihar,India</p>
            <p>Open: 10:00 AM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By MUSKAN</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By MuskanKumari.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;