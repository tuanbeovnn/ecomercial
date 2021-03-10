import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductRequest } from '../../redux/actions/AdminActions';
import ProductItem from './ProductItem';

class ProductPage extends Component {

    componentDidMount() {
        //call all categories [{id:1, name: 'Laptop'}];
        //  goi list product all ve: all ProductFeature;
        //=> kich laptop => sp cuua laptop  => luu vao cateogries [{id: 1, name: 'Laptop', prodcts: [...]}]
        this.props.fetchAllProducts();
        console.log(this.props.fetchAllProducts());

    }

    render() {
        const { allProducts } = this.props;
        let eleTasks = allProducts.map((product, index) => {
            return <ProductItem
                key={product.id}
                index={index}
                product={product}
                onUpdate={this.props.onUpdate}
            />
        });
        console.log(allProducts);
        return (
            <main>
                <div className="container-fluid">
                    <h1 className="mt-4">Tables</h1>
                    {/* <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active">Tables</li>
                    </ol> */}
                    <div className="card mb-4">
                        <div className="card-header"><i className="fas fa-table mr-1" />DataTable Products</div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>OriginalPrice</th>
                                            <th>Discount</th>
                                            <th>Picture</th>
                                            <th>Description</th>
                                            <th>Code</th>
                                            <th>Brand Code</th>
                                            <th>TechnicalInfo</th>
                                            <th>Status</th>
                                            <th>Quantity</th>
                                            <th>Rating</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eleTasks}
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
        allProducts: state.AdminReducer.productFeatureAlll
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(fetchProductRequest());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);