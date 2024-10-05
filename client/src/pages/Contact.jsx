import React from 'react';

export const Contact = () => {
  return (
    <div>
     
      <div id="hello" className="hello">
        <div className="hello">
          <span className="hello"></span>
          <div className="hello">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
     
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li><i className="fa fa-envelope"></i> sulav@real-estate.com</li>
                <li><i className="fa fa-map"></i> Lazimpath, Kathmandu</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
             
                <a href="/home" className="logo">
                  <h1>Villa</h1>
                </a>
               
                <ul className="nav">
                  <li><a href="/home">Home</a></li>
                  <li><a href="/properties">Properties</a></li>
                  <li><a href="/properties-detail">Property Details</a></li>
                  <li><a href="/contact" className="active">Contact Us</a></li>
                  <li><a href="/signup" className="active">Sign Up</a></li>
                  
                  <li><a href="/login">Login</a></li>
                  <li><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
                
              </nav>
            </div>
          </div>
        </div>
      </header>
      
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb"><a href="#">Home</a> / Contact Us</span>
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
              <p>When 
                </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="item phone">
                    <img src="assets/images/phone-icon.png" alt="" style={{ maxWidth: '52px' }} />
                    <h6>010-020-0340<br /><span>Phone Number</span></h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item email">
                    <img src="assets/images/email-icon.png" alt="" style={{ maxWidth: '52px' }} />
                    <h6>info@villa.co<br /><span>Business Email</span></h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Full Name</label>
                      <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email Address</label>
                      <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Subject</label>
                      <input type="text" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" placeholder="Your Message"></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-12">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                  width="100%"
                  height="500px"
                  frameBorder="0"
                  style={{ border: '0', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}
                  allowFullScreen=""
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="col-lg-12">
            <p>Copyright © 2025 Villa Agency Co., Ltd. All rights reserved. 
              Design: <a rel="nofollow" href="https://acharyasulav.com.np" target="_blank" rel="noopener noreferrer">Sulav Acharya</a>
            </p>
          </div>
        </div>
      </footer>

      
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/js/isotope.min.js"></script>
      <script src="assets/js/owl-carousel.js"></script>
      <script src="assets/js/counter.js"></script>
      <script src="assets/js/custom.js"></script>
    </div>
  );
};


