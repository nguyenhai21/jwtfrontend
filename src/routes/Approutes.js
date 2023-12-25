import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from '../components/ManageUsers/Users';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import PriveRoutes from "./PriveRoutes";

const Approutes = (props) => {
    const Project = () => {
        return (
            <span>projects</span>
        )
    }

    return (
        <>
            <Switch>
                <PriveRoutes path="/users" component={Users}></PriveRoutes>
                <PriveRoutes path="/projects" component={Project}></PriveRoutes>

                <Route path="/about">
                    about
                </Route>

                <Route path="/contact">
                    contact
                </Route>

                <Route path="/login">
                    <Login></Login>
                </Route>

                <Route path="/register">
                    <Register></Register>
                </Route>

                <Route path="/" exact>
                    home
                </Route>
                <Route path="*">404 not found</Route>
            </Switch>
        </>
    )
}

export default Approutes;