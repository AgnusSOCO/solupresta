
import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

export function RegistrationForm(): ReactElement {
  return (
    <section className="REG-form" id="--RigestrationForm">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
          <hr />

          <p className="terms">By creating an account you agree to our <Link to="/terms">Terms & Privacy</Link>.</p>
          <button type="submit" className="registerbtn">Register</button>
        </div>

        <div className="container signin">
          <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
        </div>
      </form>
    </section>
  );
}
