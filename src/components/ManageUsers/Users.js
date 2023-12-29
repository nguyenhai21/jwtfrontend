
import { useEffect, useState } from "react";
import './Users.scss';

const Users = (props) => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {

    }, []);

    const fetchUsers = () => {

    }

    return (
        <div className="manage-users-container">
            <div className="user-header">
                <div className="title">
                    <h3>Table Users</h3>
                </div>
                <div className="actions">
                    <button className="btn btn-success">Refesh</button>
                    <button className="btn btn-primary">Add new user</button>
                </div>
            </div>
            <div className="user-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Users;