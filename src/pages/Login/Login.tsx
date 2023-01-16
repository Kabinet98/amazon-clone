import { ChangeEvent, useState } from "react";
import logo from "../../assets/logo.jpeg";
import { NavLink } from "react-router-dom";
import "./Login.css";
export const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	return (
		<div className="login">
			<NavLink to="/">
				<img src={logo} alt="logo_amazon" className="logo" />
			</NavLink>
			<div className="login_form">
				<span className="form_header">Sign in</span>
				<label htmlFor="email_or_phoneNumber" className="email_label">
					Email or mobile phone number
				</label>
				<input
					type="text"
					id="email_or_phoneNumber"
					value={email}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						setEmail(event.target.value)
					}
				/>
				<label className="password_label">
					{" "}
					<span>Password</span> <span>Forgot Password?</span>{" "}
				</label>
				<input
					type="password"
					className="password"
					value={password}
					onChange={(event: ChangeEvent<HTMLInputElement>) =>
						setPassword(event.target.value)
					}
				/>
				<button className="signin">Sign in</button>
				<span className="first_account_label">New to Amazon?</span>
				<button className="signup">Create an account</button>
			</div>
		</div>
	);
};
export default Login;
