import pagenotfound from "../../assets/404-error.jpg";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import "./ErrorPage.css";
const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<div className="page_not_found">
			<img src={pagenotfound} alt="Page Not found Logo" />
            <div className="error_message">
			<span>The page you are looking for might have been removed,</span>
			<span>had it's name changed or is temporarily unavailable.</span>
            </div>
            <span className="mobile">Page Not found</span>
			<button onClick={() => navigate("/")}>Go to Home Page</button>
		</div>
	);
};
export default ErrorPage;
