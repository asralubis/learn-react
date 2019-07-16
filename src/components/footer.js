import React, { Component } from 'react';
import '../style/footer.css';


class Footer extends Component {
 render() {
  return (
   <footer className="footer-site">
    <div className="footer-container">

     <div className="footer-columns">
      <div className="footer-sidebar">
       <aside id="footer-1">
        <h3 className="widget-title">
         <span>Affiliasi</span>
        </h3>
        <div className="line">
         <span className="fa fa-graduation-cap" ></span>
        </div>

        <div>
         <p>
          <a href="/">AAAAAAAA</a>
         </p>
         <p>
          <a href="/">BBBBBBBB</a>
         </p>
         <p>
          <a href="/">CCCCCCCC</a>
         </p>
        </div>
       </aside>
      </div>

      <div className="footer-sidebar">
       <aside id="footer-2">
        <h3 className="widget-title">
         <span>About Us</span>
        </h3>
        <div className="line">
         <span className="fa fa-graduation-cap"></span>
        </div>

        <div>
         <p>
          <a href="/">Home</a>
         </p>
         <p>
          <a href="/">Contact</a>
         </p>
         <p>
          <a href="/">Gallery</a>
         </p>
        </div>
       </aside>
      </div>

      <div className="footer-sidebar">
       <aside id="footer-3">
        <h3 className="widget-title">
         <span>Address</span>
        </h3>
        <div className="line">
         <span className="fa fa-graduation-cap"></span>
        </div>

        <div>
         <p>
          Jl. Lentera 5 Blok VV No.5 Komp.Deppen,
         </p>
         <p>
          Sukatani, Tapos, Depok, Jawa Barat
         </p>
         <p>
          Telp : +62 21 987654
         </p>
        </div>
       </aside>
      </div>

      <div className="copyright">
       <p className="footer-text">
        Copyright 2019 Axstra
   </p>
      </div>


     </div>
    </div>
   </footer >
  )
 }
}

export default Footer;