import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { addProductRequest, fetchBrandProductRequest, fetchCategoriesRequest, uploadRequest } from '../../redux/actions/AdminActions';
class ModalUpdateProduct extends Component {

    state = {
        technicalInfo: [
            { key: '', value: '' }
        ]
    }
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    onChangeTechnical = (e, index) => {
        const { technicalInfo } = this.state;
        technicalInfo[index][e.target.name] = e.target.value;
        this.setState({
            technicalInfo: [...technicalInfo]
        })
    }

    addColumn = () => {
        const { technicalInfo } = this.state;
        technicalInfo.push({ key: '', value: '' });
        this.setState({
            technicalInfo: [...technicalInfo]
        })
    }
    removeColumn = (index) => {
        const { technicalInfo } = this.state;
        this.setState({
            technicalInfo: technicalInfo.filter((e, i) => i !== index)// phan tu cua technicalinfo
        })

    }
    initTechnical = () => {
        const { product } = this.props;
        const { technicalInfo } = this.state;
        let tech;
        try {
            tech = JSON.parse(product.technicalInfo);
        } catch {
            tech = {};
        }
        console.log(tech);
        for (const [key, value] of Object.entries(tech)) {
            console.log(`${key}: ${value}`);
            technicalInfo.push({ key: key, value: value })
        }
        this.setState({
            technicalInfo: [...technicalInfo]
        })
    }
    


    render() {

        const { visibleUpdate, product, onHide, allCategories, allBrands } = this.props;
        // let tech;
        // try {
        //     tech = JSON.parse(product.technicalInfo);
        // } catch {
        //     tech = {};
        // }
        // console.log(tech);
        // for (const [key, value] of Object.entries(tech)) {
        //     console.log(`${key}: ${value}`);
        // }
        const { technicalInfo } = this.state;

        return (
            <div className="col-3">
                <Modal
                    size="lg"
                    show={visibleUpdate}
                    onHide={onHide}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Form onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Update Product
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>

                                    <Col xs={6}>
                                        <div className="form-group">
                                            <label>Name :</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                onChange={this.onChange}
                                                required
                                                value={product.name}
                                            />
                                        </div>

                                        <div className="form-group">

                                            <label>Original Price :</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="originalPrice"
                                                onChange={this.onChange}
                                                value={product.originalPrice}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Code:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="code"
                                                onChange={this.onChange}
                                                value={product.code}

                                            />
                                        </div>

                                        <div className="form-group">

                                            <label>Quantity :</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="quantity"
                                                onChange={this.onChange}
                                                value={product.quantity}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Discount:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="discount"
                                                onChange={this.onChange}
                                                value={product.discount}

                                            />
                                        </div>


                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-group">
                                            <label>Image :</label>
                                            <input
                                                type="file"
                                                name="files"
                                                className="form-control"
                                                multiple
                                                onChange={this.onChangeFile}
                                            // value={product.image}
                                            />

                                        </div>

                                        <div className="form-group">

                                            <label>Category Code :</label>
                                            <select
                                                className="form-control"
                                                required="required"
                                                name="categoryCode"
                                                onChange={this.onChange}


                                            >
                                                {allCategories.map((item, index) => {
                                                    return (
                                                        <option key={index} >{item.code}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">

                                            <label>Brand Code :</label>
                                            <select
                                                className="form-control"
                                                required="required"
                                                name="brandCode"
                                                onChange={this.onChange}

                                            >
                                                {allBrands.map((item, index) => {
                                                    return (
                                                        <option key={index} >{item.code}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Status :</label>
                                            <select
                                                className="form-control"
                                                required="required"
                                                name="status"
                                                onChange={this.onChange}
                                                value={product.status}
                                            >
                                                <option value="In Stock">In Stock</option>
                                                <option value="Out Stock">Out Stock</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Time End :</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="timeEnd"
                                                onChange={this.onChange}
                                            />
                                            <br />
                                        </div>


                                    </Col>
                                    <Col xs={12}>
                                        <div className="form-group">
                                            <label>Description :</label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                name="description"
                                                onChange={this.onChange}
                                                value={product.description}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="form-group">
                                            <label>Technical Info:</label>&nbsp;&nbsp;
                                            <button onClick={this.addColumn} type="button" className="btn btn-outline-primary">Add More</button>
                                            <button onClick={this.initTechnical} type="button" className="btn btn-outline-primary">Init</button>
                                            {technicalInfo.map((item, index) => {
                                                return (
                                                    <Row key={index}>
                                                        <Col xs={8}>
                                                            <label>Title {index + 1}:</label>
                                                            <input
                                                                type="text"
                                                                name="key"
                                                                className="form-control"
                                                                value={item.key}
                                                                onChange={(e) => this.onChangeTechnical(e, index)}
                                                            />

                                                        </Col>
                                                        <Col xs={4} style={{ display: 'flex', alignItems: 'flex-end' }}>
                                                            <button onClick={() => this.removeColumn(index)} className="btn btn-outline-danger" type="button"><i className="fas fa-trash-alt"></i></button>
                                                        </Col>
                                                        <Col>
                                                            <label>Features :</label>
                                                            <textarea
                                                                type="text"
                                                                name="value"
                                                                className="form-control"
                                                                value={item.value}
                                                                onChange={(e) => this.onChangeTechnical(e, index)}
                                                            />
                                                        </Col>
                                                    </Row>

                                                )
                                            })}

                                        </div>
                                    </Col>

                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" variant="outline-success">Save</Button>
                            <Button variant="outline-secondary" onClick={this.onClear}>Clear</Button>
                        </Modal.Footer>
                    </Form>

                </Modal>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        allCategories: state.AdminReducer.categories,
        allBrands: state.AdminReducer.brands
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(fetchCategoriesRequest());
        },
        fetchAllBrands: () => {
            dispatch(fetchBrandProductRequest());
        },
        addProduct: (body, callback) => {
            dispatch(addProductRequest(body, callback));
        },
        uploadImage: (body, callback) => {
            dispatch(uploadRequest(body, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateProduct);
