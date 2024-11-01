import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Form from "../pages/Form";

const router = createBrowserRouter([
    {
        path : "",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "form",
                element : <Form/>
            },
            {
                path : "game",
                element : <Game/>
            },
            {
                path : "*",
                element : <Home/>
            }
        ]
    }
])

export default router