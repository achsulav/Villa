import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import "../Signup.css"
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState(""); // State to store error message

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    console.log(user);

    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();

      if (response.status === 400 && result.message === "Email already exists") {
        setError("Email already exists. Please try another one.");
        toast.error("Email already exists. Please try another one.");
      } else if (response.ok) {  // Only trigger success if the response is a success (200 status)
        toast.success("Registration successful");
        console.log("Registration successful", result);
        navigate("/login");
        setUser({ username: "", email: "", phone: "", password: "" });
      } else {
        setError("Registration failed. Please try again.");
        toast.error("Registration failed. Please try again.");
      }
      
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
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
                                <li><a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
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
                                <a href="/home" className="logo">
                                    <h1>Villa</h1>
                                </a>
                                <ul className="nav">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/properties" className="active">Properties</a></li>
                                    <li><a href="/properties-detail">Property Details</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
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
      <section>
        <div className="registration-container">
          <div className="registration-header">
            <div className="registration-text">Signup</div>
            <div className="registration-underline"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="registration-inputs">
              <div className="registration-input">
               
                <input
                  type="text"
                  name="username"   
                  value={user.username}
                  onChange={handleInput}
                  placeholder="Name"
                />
              </div>

              <div className="registration-input">
               
                <input
                  type="email"
                  name="email"   
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email"
                />
              </div>

              <div className="registration-input">
                
                <input
                  type="phone"
                  name="phone"   
                  value={user.phone}
                  onChange={handleInput}
                  placeholder="Phone"
                />
              </div>

              <div className="registration-input">
                
                <input
                  type="password"
                  name="password"   
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                />
              </div>
            </div>
            <br />
            <div className="registration-submit-container">
              <button type="submit" className="registration-submit"> {/* Change div to button */}
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};


