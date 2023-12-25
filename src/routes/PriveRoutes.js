import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";

const PriveRoutes = (props) => {
    let history = useHistory();

    useEffect(() => {
        let session = sessionStorage.getItem('account');
        if (!session) {
            history.push("/login");
            window.location.reload();
        }
    }, []);

    return (
        <>
            <Route path={props.path} component={props.component}></Route>
        </>
    )

}
export default PriveRoutes;