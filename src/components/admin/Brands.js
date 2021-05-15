import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBrandProductRequest, fetchCategoriesRequest } from '../../redux/actions/AdminActions';
import ModalUpdateBrand from './ModalUpdateBrand';
class Brands extends Component {
    state = {
        visible: false,
        visibleUpdate: false,
        brand: {},
        isCreate: true
    }
    componentDidMount() {
        this.props.fetchBrand();
    }


    render() {
        const { brands } = this.props;
        console.log(brands);
        const { visible, product, visibleUpdate, brand, isCreate, visibleAdd } = this.state;
        return (

            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Brands</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active">Tables</li>
                    </ol>
                    <div className="row pb-2">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter keyword..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">
                                        <span className="fa fa-search mr-5"></span>Search
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="col-6 display">
                            <div className="col-3">
                            </div>
                            <button onClick={() => this.setState({ isCreate: true, visibleAdd: true })} type="button" className="btn btn-outline-primary">Add</button>
                            <ModalUpdateBrand isCreate={isCreate} visibleUpdate={visibleUpdate} visibleAdd={visibleAdd} onHide={() => { this.setState({ visibleUpdate: false, isCreate: false }) }} brand={brand} />
                        </div>

                    </div>
                    <div className="card mb-4">
                        <div className="card-header"><i className="fas fa-table mr-1" />DataTable Brands</div>
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
                                        {brands.map((item, index) => {
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
                                                            onClick={() => this.setState({ visibleUpdate: true, brand: item, isCreate : false })}
                                                        ><i className="fas fa-wrench"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {/* <ModalUpdateCategory visibleUpdate={visibleUpdate} onHide={() => { this.setState({ visibleUpdate: false }) }} cate={cate}/> */}
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
        brands: state.AdminReducer.brands
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchBrand: () => {
            dispatch(fetchBrandProductRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Brands);