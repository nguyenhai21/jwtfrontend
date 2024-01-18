
import { useEffect, useState } from "react";
import './Users.scss';
import { fetchAllUser } from "../../services/userService";
import ReactPaginate from 'react-paginate';

const Users = (props) => {
    const [listUsers, setListUsers] = useState([]);
    console.log('>>check listuser 0: ', listUsers)
    useEffect(() => {
        fetchUsers();
    }, []);
    console.log('>>check listuser 1: ', listUsers)

    const fetchUsers = async () => {
        let response = await fetchAllUser();
        if (response && response.data && response.data.EC === 0) {
            setListUsers(response.data.DT);
            console.log(response.data.DT);
        }
    }

    const handlePageClick = (event) => {
        alert(event.selected)
        // const newOffset = event.selected * itemsPerPage % items.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        // setItemOffset(newOffset);
    };

    return (
        <div className="container">
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
                                <th scope="col">No</th>
                                <th scope="col">ID</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers && listUsers.length > 0 ?
                                <>
                                    {listUsers.map((item, index) => {
                                        return (
                                            <tr key={`row-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>{item.Group ? item.Group.name : ''}</td>
                                            </tr>
                                        )
                                    })}
                                </>
                                :
                                <>
                                    <span>Not found user</span>
                                </>
                            }
                        </tbody>
                    </table>
                </div>

                <div className="user-footer">
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={50}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    )

}

export default Users;