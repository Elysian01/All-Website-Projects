import "./css/main.css";
import "./css/login.css"


function Login() {
    return (
        <div className="login">

            <h1 className="login-header"><i className="fa-solid fa-code"> </i> Welcome, to <span>Employee CURD</span> <br /> Application</h1>

            <br />
            <div className="wrapper">

                <div className="heading">
                {/* <h2>Welcome!</h2> */}
                <h3><span>Sign In</span> to your account</h3>
                </div>

                {/* <div className="error">
                    <p>** You are not Admin **</p>
                </div>  */}

                <div className="input-group">
                    <label htmlFor="username">Employee ID</label>
                    <input type="text" id="username" className="input-field" placeholder="Enter your employee id" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="input-field" placeholder="Enter your password" />
                </div>

                {/* <div className="input-group row">
                    <div className="row">
                        <input type="checkbox" id="remember" hidden />
                        <label for="remember" className="custom-checkbox"></label>
                        <label for="remember">Remember me?</label>
                    </div>
                    
                    <div className="row">
                        <a href="#" target="_blank">Forgot password?</a> 
                    </div>
                </div> */}

                <div className="input-group">
                    <button>Login <i className="fa-solid fa-arrow-right"></i></button>
                </div>

            </div>

        </div>
    )
}

export default Login;