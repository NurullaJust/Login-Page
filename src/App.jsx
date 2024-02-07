import "./App.css";
import googleIcon from "./assets/free-icon-google-300221 1.png";
import backgroundImage from "./assets/c392ba101244345 1.png";
export default function Web() {
  return (
    <>
      <main>
      <article>
        <h1>Welcome back</h1>
        <p>Welcome back! Please enter your details.</p>
        <form action="post">
          <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="**********" />
          </div>
          <div className="article">
            <div className="remember">
            <input type="checkbox" className="box"/>
            <p>Remember me</p> 
            </div>
            <p>Forgot password</p>
          </div>
          <div className="food">
            <button type="button">Sign in</button>
            <button type="button"><img src={googleIcon} alt="icon" /><p>Sign in with Google</p></button>
          </div>
          <div className="summary">
            <p>Don’t have an account?</p>
            <p> Sign up for free!</p>
          </div>
        </form>
        </article>
      <aside>
        <img src={backgroundImage} alt="image" />
      </aside>
      </main>
    </>
  );
}
