// 1. To import React Hooks use for example: React.useState() or React.useEffect()
// 2. To add Fragments use: <React.Fragment></React.Fragment>
// 3. You can use bootstrap 5 and CSS
const {
    // you can add others functions of react-router-dom here:
    // if you want use history.push you should use "withRouter"
    HashRouter
  } = ReactRouterDOM
  
  
  // You can add other components here
  
  const RegisterForm = () => {
  
    const userSuccessRegister = (e) => {
      e.preventDefault()
      var formData = new FormData(document.querySelector('form')) //use formData to get values from inputs
      const email = formData.get('email')
      const password = formData.get('password')
      // write your code here
    }
  
    return (
      <React.Fragment>
          <div></div>
      </React.Fragment>
    )
  };
  
  const App = () => {
      return (
        <div>
          hello
        </div>
      )
  }