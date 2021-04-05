import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategoriesRequest } from '../../redux/actions/AdminActions';
class Categories extends Component {
    componentDidMount() {
        this.props.fetchAllCategories();
    }
    render() {
        const { allCategories } = this.props;

        return (
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Categories</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active">Tables</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-header"><i className="fas fa-table mr-1" />DataTable Categories</div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th>Stt</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allCategories.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.code}</td>
                                                    <td>{item.name}</td>

                                                    <td style={{ width: '20%' }}>
                                                        <button className="btn btn-outline-danger" type="button"><i className="fas fa-trash-alt"></i></button>&nbsp;&nbsp;
                                                        <button
                                                            className="btn btn-outline-warning"
                                                            type="button"

                                                        ><i className="fas fa-wrench"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        allCategories: state.AdminReducer.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(fetchCategoriesRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);