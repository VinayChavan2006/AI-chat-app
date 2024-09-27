import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Chat from "../components/Chat";
import App from "../App";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '',
                element : <Home/>
            },
            {
                path : 'chat',
                element : <Chat/>
            }
        ]
    },
    
])