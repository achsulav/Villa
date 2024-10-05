import React from 'react';

export const PropertiesDetails = () => {
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

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="/home" className="logo">
                  <h1>Villa</h1>
                </a>
                
                <ul className="nav">
                  <li><a href="/home">Home</a></li>
                  <li><a href="/properties">Properties</a></li>
                  <li><a href="/properties-detail" className="active">Property Details</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/signup">Sign Up</a></li>
                  <li><a href="/login">Login</a></li>
                  <li><a href="#"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb"><a href="#">Home</a> / Single Property</span>
              <h3>Single Property</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <img src="assets/images/single-property.jpg" alt="" />
              </div>
              <div className="main-content">
                <span className="category">Apartment</span>
                <h4>24 New Street Miami, OR 24560</h4>
                <p>
                  Get <strong>the best villa agency</strong>  for your luxury. Villa provides you the <a href="" target="_blank" rel="noopener noreferrer">best villa</a> in the world...
                </p>
              </div>
              {/* Accordion */}
              <div className="accordion" id="accordionExample">
                {/* Accordion Item 1 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Best useful links?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                       
                    </div>
                  </div>
                </div>
                {/* Add more accordion items similarly */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <img src="assets/images/info-icon-01.png" alt="" style={{ maxWidth: '52px' }} />
                    <h4>450 m2<br /><span>Total Flat Space</span></h4>
                  </li>
                  {/* Add more info items similarly */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Deal Section */}
      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>| Best Deal</h6>
                <h2>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs-content">
                <div className="row">
                  <div className="nav-wrapper">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">Apartment</button>
                      </li>
                      {/* Add more tabs similarly */}
                    </ul>
                  </div>
                  <div className="tab-content" id="myTabContent">
                    {/* Add your tab contents similarly */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-no-gap">
        <div className="container">
          <div className="col-lg-12">
            <p>Copyright © 2025 Villa Agency Co., Ltd. All rights reserved. 
            Design: <a rel="nofollow" href="https://acharyasulav.com.np" target="_blank" rel="noopener noreferrer">Sulav Acharya</a></p>
          </div>
        </div>
      </footer>

      {/* Scripts */}
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/js/isotope.min.js"></script>
      <script src="assets/js/owl-carousel.js"></script>
      <script src="assets/js/counter.js"></script>
      <script src="assets/js/custom.js"></script>
    </div>
  );
};

