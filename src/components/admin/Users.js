import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accountStatusRequest, fetchUserRolesRequest } from '../../redux/actions/AdminActions';
import ReactPaginate from 'react-paginate';
import ModalUpdateRole from './ModalUpdateRole';
const size = 10;

class Users extends Component {

    state = {
        visible: false,
        visibleUpdate: false,
        user: {}
    }

    componentDidMount() {
        const { userRoles } = this.props;
        if (userRoles.length === 0) {
            const callback = (data) => {
            }
            this.props.fetchAllRoles({ page: 0, size }, callback);
        }
    }

    handlePageClick = (e1) => {
        const callback = (data) => {
        }
        this.props.fetchAllRoles({ page: e1.selected, size }, callback);
    }

    handleStatus = (id) => {
       console.log(id);
        this.props.accountStatus(id, (data) => {
            console.log(data);
            if (!data) {
                this.setState(
                    {
                        error: true
                    }
                )
            } else {
                this.setState({
                    success: true
                })
            }
        })
    }


    render() {
        const { userRoles, page, total } = this.props;
        console.log(userRoles);

        // const page = Number(this.props.match.params.page) || 1;
        const totalPage = Math.ceil(total / size) || '';


        const { visibleUpdate, user } = this.state;

        return (
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Users</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active">Tables</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-header"><i className="fas fa-table mr-1" />DataTable Categories</div>
                        <div className="card-body">
                            <div className="table-responsive" style={{ overflowY: 'hidden' }}>
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th>Stt</th>
                                            <th>Name</th>
                                            <th>Roles</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userRoles.map((item, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td style={{ width: 10 }}>{index + page * size + 1}</td>
                                                    <td style={{ width: '20%' }}>{item.name}</td>
                                                    <td style={{ width: '40%' }}>
                                                        {item.roles.map((role, index) => {
                                                            return (
                                                                <span key={index}>{index === 0 ? "" : "|"} {role}  </span>
                                                            )
                                                        })}
                                                    </td>
                                                    <td style={{ width: '20%' }}>{item.verifyAccount === 1 ? "ACTIVE" : "NOT ACTIVE"}</td>
                                                    <td style={{ width: '20%' }}>
                                                        <button className="btn btn-outline-dark" 
                                                        type="button" 
                                                        onClick={()=>{this.handleStatus(item.id)}}><i className="fas fa-user-alt-slash"></i></button>&nbsp;&nbsp;
                                                        <button
                                                            className="btn btn-outline-warning"
                                                            type="button"
                                                            onClick={() => this.setState({ visibleUpdate: true, user: item })}
                                                        ><i className="fas fa-wrench"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <ModalUpdateRole visibleUpdate={visibleUpdate} onHide={() => { this.setState({ visibleUpdate: false }) }} user={user} />
                            </div>
                        </div>
                        <div className="card-footer">
                            <ReactPaginate
                                previousLabel={<><i className="fa fa-angle-left" />Back</>}// bien 2 node thanh 1 node
                                nextLabel={<>Next<i className="fa fa-angle-right" /></>}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={totalPage}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                                initialPage={page}
                                disableInitialCallback={true}
                            />
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        userRoles: state.AdminReducer.userRoles,
        page: state.AdminReducer.pageRole,
        total: state.AdminReducer.totalRole
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllRoles: (params, callback) => {
            dispatch(fetchUserRolesRequest(params, callback));
        },
        accountStatus: (id, callback) => {
            dispatch(accountStatusRequest(id, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);