import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductRequest, fetchProductRequest } from '../../redux/actions/AdminActions';
import ModalProducts from './ModalProducts';
import ReactPaginate from 'react-paginate';
import { Form } from 'react-bootstrap';
import ModalProductDetails from './ModalProductDetails';
import ModalUpdateProduct from './ModalUpdateProduct';
const size = 8;
class ProductPage extends Component {

    componentDidMount() {

        const { allProducts } = this.props;
        if (allProducts.length === 0) {
            const callback = (data) => {
            }
            this.props.fetchAllProducts({ page: 0, size }, callback);
        }
    }
    state = {
        visible: false,
        visibleUpdate : false,
        product: {}
    }

    onDelete = (productId) => {
        this.props.deleteProduct(productId);
    }

    handlePageClick = (e1) => {
        const callback = (data) => {
        }
        this.props.fetchAllProducts({ page: e1.selected, size }, callback);
    }
    render() {
        const { allProducts, page, total } = this.props;
        const { visible, product,visibleUpdate } = this.state;
        // const page = Number(this.props.match.params.page) || 1;
        const totalPage = Math.ceil(total / size) || '';
        return (
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Products Data</h1>
                    {/* <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active">Tables</li>
                    </ol> */}
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
                                {/* <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a role="button">
                                                <span className="fa fa-sort-alpha-asc pr-5">
                                                    Name A-Z
                                </span>
                                            </a>
                                        </li>
                                        <li>

                                            <span className="fa fa-sort-alpha-desc pr-5">
                                                Name Z-A
                                </span>

                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                            <ModalProducts />
                        </div>

                    </div>
                    <div className="card mb-4">
                        <div className="card-header"><i className="fas fa-table mr-1" />DataTable Products</div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th>Stt</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            {/* <th>Original Price</th> */}
                                            <th>Discount</th>
                                            <th>Picture</th>
                                            {/* <th>Code</th> */}
                                            <th>Brand Code</th>
                                            {/* <th>TechnicalInfo</th> */}
                                            <th>Status</th>
                                            <th>Quantity</th>
                                            <th>Rating</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allProducts.map((item, index) => {

                                            const tech = JSON.parse(item.technicalInfo);
                                            return (
                                                <tr key={index}>
                                                    <td style={{ width: 10 }}>{index + page * size + 1}</td>
                                                    <td style={{ width: '10%' }}>{item.name}</td>
                                                    <td style={{ width: '5%' }}>{item.price}</td>
                                                    {/* <td style={{width:50}}>{item.originalPrice}</td> */}
                                                    <td style={{ width: 50 }}>{item.discount}%</td>
                                                    <td style={{ width: '20%' }}><img style={{ width: 54, height: 64 }} src={item.image[0]} /></td>
                                                    {/* <td style={{width:'8%'}}>{item.code}</td> */}
                                                    <td style={{ width: '8%' }}>{item.brandCode}</td>
                                                    {/* <td>TechnicalInfo: <br />{tech.description},<br /> {tech.machinename},<br /> {tech.ipaddress}</td> */}
                                                    <td style={{ width: '8%' }}>{item.status}</td>
                                                    <td style={{ width: '5%' }}>{item.quantity}</td>
                                                    <td style={{ width: '5%' }}>{item.rating}</td>
                                                    <td style={{ width: '20%' }}>
                                                        <button onClick={() => this.onDelete(item.id)} className="btn btn-outline-danger" type="button"><i className="fas fa-trash-alt"></i></button>&nbsp;&nbsp;
                                                        <button
                                                            className="btn btn-outline-warning"
                                                            type="button"
                                                            onClick={() => this.setState({ visibleUpdate: true, product: item })}
                                                            ><i className="fas fa-wrench"></i>
                                                        </button>&nbsp;&nbsp;
                                                        <button
                                                            className="btn btn-outline-info"
                                                            type="button"
                                                            onClick={() => this.setState({ visible: true, product: item })}
                                                        >
                                                            <i className="fas fa-info-circle"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                                <ModalProductDetails visible={visible} onHide={() => { this.setState({ visible: false }) }} product={product} />
                                <ModalUpdateProduct  visibleUpdate={visibleUpdate} onHide={() => { this.setState({ visibleUpdate: false }) }} product={product}/>
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
        allProducts: state.AdminReducer.productAll,
        page: state.AdminReducer.page,
        total: state.AdminReducer.total
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: (params, callback) => {
            dispatch(fetchProductRequest(params, callback));
        },
        deleteProduct: (id) => {
            dispatch(deleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);