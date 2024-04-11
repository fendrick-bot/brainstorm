import Button from "../../comps/Button/Button"
import LoginButton from "../../comps/auth/LoginButton/LoginButton"
import "./loginstyle.css"
export default function Login() {
    return (
        <div id="login-div">
            <form id="login-form">
                <label id="form-title">Login to continue</label>

                <label>Email</label>
                <input type="email" placeholder="example@gmail.com"></input>
                <label>Password</label>
                <input type="password" placeholder="**********" ></input>
                <br></br>
                <LoginButton>
                    <Button btn_text={`Log In`} />
                </LoginButton>
            </form>
        </div>
    )
}