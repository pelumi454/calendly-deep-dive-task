import React from 'react'

const SignIn = () => {
  return (
    <div className="login">
      <div className="login-body">
        <div className="login-header">
          <img src={logo} alt="calsy-logo" className="logo" />
          <p className="login-text mt-3">Log into your Calsy account</p>
        </div>
        <form>
          <div>
            <label for="basic-url" className="form-label">
              Email Address
            </label>
            <div className="input-group mb-3">
              <Input type="email" name="email" />
            </div>
          </div>

          <div>
            <label for="basic-url" className="form-label">
              Password
            </label>
            <div class="input-group mb-3">
              <Input
                type="password"
                id="basic-url"
                aria-describedby="basic-addon3"
                name="password"
              />
            </div>
          </div>
          <div>
            <p className="forgot-password">
              Already have an account?{" "}
              <span className="signup-text">Log in</span>
            </p>
          </div>
          <div>
            <button type="submit" className="button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn