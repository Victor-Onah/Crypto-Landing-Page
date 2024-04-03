import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./main.css";
import Header from "./components/Header";
import Home from "./pages";
import Footer from "./components/Footer";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		),
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<RouterProvider router={router} />
);
