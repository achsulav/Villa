import React, { useState } from 'react';


export const Properties = () => {
  const [filter, setFilter] = useState('all');

  const properties = [
    { id: 1, type: 'adv', price: '$2,264,000', address: '18 Old Street Miami, OR 97219', bedrooms: 8, bathrooms: 8, area: '545m²', floor: 3, parking: '6 spots', image: 'assets/images/property-01.jpg' },
    { id: 2, type: 'str', price: '$1,180,000', address: '54 New Street Florida, OR 27001', bedrooms: 6, bathrooms: 5, area: '450m²', floor: 3, parking: '8 spots', image: 'assets/images/property-02.jpg' },
    { id: 3, type: 'rac', price: '$1,460,000', address: '26 Mid Street Portland, OR 38540', bedrooms: 5, bathrooms: 4, area: '225m²', floor: 3, parking: '10 spots', image: 'assets/images/property-03.jpg' },
    { id: 4, type: 'adv', price: '$584,500', address: '12 Hope Street Portland, OR 12650', bedrooms: 4, bathrooms: 3, area: '125m²', floor: '25th', parking: '2 cars', image: 'assets/images/property-04.jpg' },
    { id: 5, type: 'rac', price: '$925,600', address: '34 Hope Street Portland, OR 42680', bedrooms: 4, bathrooms: 4, area: '180m²', floor: '38th', parking: '2 cars', image: 'assets/images/property-05.jpg' },
    { id: 6, type: 'adv', price: '$450,000', address: '22 Hope Street Portland, OR 16540', bedrooms: 3, bathrooms: 2, area: '165m²', floor: '26th', parking: '3 cars', image: 'assets/images/property-06.jpg' },
    // Add more properties as needed
  ];

  const filteredProperties = filter === 'all' ? properties : properties.filter(prop => prop.type === filter);

  return (
    <div>
      {/* ***** Preloader Start ***** */}
      <div id="js-preload" className="js-preload">
        <div className="preload-inn">
          <span className="d"></span>
          <div className="ds">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

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
                <a href="index.html" className="logo">
                  <h1>Villa</h1>
                </a>
                <ul className="nav">
                  <li><a href="/home">Home</a></li>
                  <li><a href="/properties" className="active">Properties</a></li>
                  <li><a href="/properties-detail">Property Details</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/signup">Sign Up</a></li>
                  <li><a href="/login">Login Us</a></li>

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
      {/* ***** Header Area End ***** */}

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb"><a href="#">Home</a> / Properties</span>
              <h3>Properties</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section properties">
        <div className="container">
          <ul className="properties-filter">
            <li>
              <a className={filter === 'all' ? 'is_active' : ''} onClick={() => setFilter('all')}>Show All</a>
            </li>
            <li>
              <a className={filter === 'adv' ? 'is_active' : ''} onClick={() => setFilter('adv')}>Apartment</a>
            </li>
            <li>
              <a className={filter === 'str' ? 'is_active' : ''} onClick={() => setFilter('str')}>Villa House</a>
            </li>
            <li>
              <a className={filter === 'rac' ? 'is_active' : ''} onClick={() => setFilter('rac')}>Penthouse</a>
            </li>
          </ul>
          <div className="row properties-box">
            {filteredProperties.map(prop => (
              <div key={prop.id} className={`col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 ${prop.type}`}>
                <div className="item">
                  <a href="property-details.html"><img src={prop.image} alt="" /></a>
                  <span className="category">Luxury Villa</span>
                  <h6>{prop.price}</h6>
                  <h4><a href="property-details.html">{prop.address}</a></h4>
                  <ul>
                    <li>Bedrooms: <span>{prop.bedrooms}</span></li>
                    <li>Bathrooms: <span>{prop.bathrooms}</span></li>
                    <li>Area: <span>{prop.area}</span></li>
                    <li>Floor: <span>{prop.floor}</span></li>
                    <li>Parking: <span>{prop.parking}</span></li>
                  </ul>
                  <div className="main-button">
                    <a href="property-details.html">Schedule a visit</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li><a href="#">1</a></li>
                <li><a className="is_active" href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">>></a></li>
              </ul>
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

      {/* Scripts */}
      {/* Bootstrap core JavaScript */}
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
      <script src="assets/js/isotope.min.js"></script>
      <script src="assets/js/owl-carousel.js"></script>
      <script src="assets/js/counter.js"></script>
      <script src="assets/js/custom.js"></script>
    </div>
  );
};
