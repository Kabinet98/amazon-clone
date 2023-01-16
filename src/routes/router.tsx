import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Checkout, Login, ErrorPage } from "../paths";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "checkout/",
		element: <Checkout />,
	},
	{
		path: "signin/",
		element: <Login />,
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);

export default router;
