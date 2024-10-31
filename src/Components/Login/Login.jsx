import "./Login.css"
const Login = () => {
    return (
        <>
      
        <div className="auth-container">
            <h2>Login to FitBot</h2>
            <form className="auth-form">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" className="auth-btn">Login</button>
                <p className="auth-text">
                    Don't have an account? <a href="/">Sign Up</a>
                </p>
            </form>
        </div>
        </>
    )
}
export default Login