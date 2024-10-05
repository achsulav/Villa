import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Login.css"; // Ensure you have a separate CSS file for login styles

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State to store error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before submission

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Login failed. Please try again.");
        toast.error(result.message || "Login failed. Please try again.");
      } else {
        toast.success("Login successful");
        console.log("Login successful", result);
        // Redirect to home page after successful login
        navigate("/home");
      }
      
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      {/* Header Area Start */}
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
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/signup">Sign Up</a></li>
                  <li><a href="/signup"><i className="fa fa-calendar"></i> Schedule a visit</a></li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* Header Area End */}

      <section>
        <div className="login-container">
          <div className="login-header">
            <div className="login-text">Login</div>
            <div className="login-underline"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="login-inputs">
              <div className="login-input">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="login-input">
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <br />
            <div className="login-submit-container">
              <button type="submit" className="login-submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
