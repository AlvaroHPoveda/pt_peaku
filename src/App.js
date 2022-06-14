import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// 1. To import React Hooks use for example: React.useState() or React.useEffect()
// 2. To add Fragments use: <React.Fragment></React.Fragment>
// 3. You can use bootstrap 5 and CSS
// const {
// you can add others functions of react-router-dom here:
// if you want use history.push you should use "withRouter"
//  HashRouter,
// } = ReactRouterDOM

// You can add other components here
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                page-1 <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/page-2">
                page-2 <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>  
  );
};

const RegisterForm = () => {
  const userSuccessRegister = (e) => {
    e.preventDefault();
    var formData = new FormData(document.querySelector("form")); //use formData to get values from inputs
    const email = formData.get("email");
    const password = formData.get("password");
    // write your code here
    console.log(email, password);    
  };

  return (
    <React.Fragment>
      <div>
        <h1>Register with us</h1>
        <form onSubmit={userSuccessRegister}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
            />
            <Link to="/page-2"><button type="submit" className="btn btn-primary">
              Submit
            </button></Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

function Page1() {
  return (
    <>
      <RegisterForm />
    </>
  );
}

function Page2() {
  return (
    <>
      <div>Login Successfully</div>
    </>
  );
}

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page-2" element={<Page2/>} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
