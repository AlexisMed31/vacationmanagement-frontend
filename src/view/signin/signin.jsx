import './signin.css';

function Signin() {
  return (
    <div className="signin-body">
      <div className="signin-box">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Username" className="signin-input" />
          <input type="password" placeholder="Password" className="signin-input" />
          <button type="submit" className="signin-button">Sign In</button>
        </form>
      </div>
      <div className="signin-right">
        <div className="signin-image">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="A scenic landscape" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
