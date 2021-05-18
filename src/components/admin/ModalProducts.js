import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { addProductRequest, fetchBrandProductRequest, fetchCategoriesRequest, uploadRequest } from '../../redux/actions/AdminActions';
import swal from 'sweetalert';
class ModalProducts extends Component {

    componentDidMount() {
        this.props.fetchAllCategories();
        this.props.fetchAllBrands();
    }
    state = {
        setLgShow: false,
        lgShow: false,
        files: '',
        technicalInfo: [
            { key: '', value: '' }
        ],
        color: [],
        categoryCode: "mobile",
        brandCode: "apple",
        status: "in stock"
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { files } = this.state;
        if (files) {
            let data = new FormData();
            for (let i = 0; i < files.length; i++) {
                data.append("files", files[i]);
            }
            this.props.uploadImage(data, (imageUp) => {
                if (imageUp) {
                    this.setState({
                        url: imageUp
                    })
                    this.handleAddProduct(imageUp);
                    swal({
                        title: "Good job!",
                        text: "Add product Successfully!",
                        icon: "success",
                        button: " Ok!",
                    });
                    this.onClose();
                }
            })
        }

    }
    handleAddProduct = (imageUp) => {
        const { brandCode, categoryCode, code, description, discount,
            image, name, originalPrice, status, technicalInfo, quantity, color } = this.state;
        const tempColor = color.split(';');
        const tech = {};
        technicalInfo.map((item) => {
            tech[item.key] = item.value
        })
        const techString = JSON.stringify(tech);// string to backend
        if (!name || !description || !categoryCode || !brandCode || !quantity || !originalPrice) {
            let message = 'Name is required';
            if (!description) message = 'Description is required';
            if (!categoryCode) message = 'Category Code is required';
            if (!brandCode) message = 'Brand Code is required';
            if (!quantity) message = 'Quantity is required';
            if (!originalPrice) message = 'Original Price is required';
            this.setState({
                error: true,
                message: message,
            })
        } else {
            const body = { brandCode, categoryCode, code, description, discount: Number(discount), image: imageUp, name, originalPrice: Number(originalPrice), status, technicalInfo: techString, quantity: Number(quantity), color: tempColor };
            this.props.addProduct(body, (data) => {
              
                if (data && data.success) {
                    
                    this.setState(
                        {
                            success: true
                        }
                    )
                } else {
                    this.setState({
                        error: true,
                        message: data && data.message
                    })
                }
            })
        }
    }

    onChangeFile = (e) => {
        let target = e.target;
        let name = target.name;
        let files = target.files;
        this.setState({
            [name]: files,
        });
    }
    onChangeTechnical = (e, index) => {
        const { technicalInfo } = this.state;
        technicalInfo[index][e.target.name] = e.target.value;
        this.setState({
            technicalInfo: [...technicalInfo]
        })
    }


    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
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
    onClose = () => {
        this.setState({
            lgShow: false
        })
    }
    onClear = (e) => {
        e.preventDefault()
        this.form.reset() // resets uncontrolled fields ("username")
    }


    render() {
        const { allCategories, allBrands } = this.props;
        const { lgShow, technicalInfo, error } = this.state;
        console.log(error);

        return (
            <div className="col-3">
                <button onClick={() => this.setState({ lgShow: true })} type="button" className="btn btn-outline-primary">Add</button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => this.setState({ lgShow: false })}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Add Product
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    {error ?
                                        <div className="col-12 mb-30" style={{ color: 'red' }}>
                                            <span>{this.state.message}</span>
                                        </div>
                                        : ''}
                                    <Col xs={6}>
                                        <div className="form-group">
                                            <label>Name :</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                onChange={this.onChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">

                                            <label>Original Price :</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="originalPrice"
                                                onChange={this.onChange}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Code:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="code"
                                                onChange={this.onChange}

                                            />
                                        </div>

                                        <div className="form-group">

                                            <label>Quantity :</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="quantity"
                                                onChange={this.onChange}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Discount:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="discount"
                                                onChange={this.onChange}

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
                                            />

                                        </div>

                                        <div className="form-group">

                                            <label>Category Code :</label>
                                            <select
                                                className="form-control"
                                                required="required"
                                                name="categoryCode"
                                                onChange={this.onChange}
                                                defaultValue=""

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
                                            >
                                                <option value="In Stock">In Stock</option>
                                                <option value="Out Stock">Out Stock</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Color :</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="color"
                                                onChange={this.onChange}
                                                defaultValue="Choose"

                                            />
                                        </div>

                                        <br />
                                    </Col>
                                    <Col xs={12}>
                                        <div className="form-group">
                                            <label>Description :</label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                name="description"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="form-group">
                                            <label>Technical Info:</label>&nbsp;&nbsp;
                                            <button onClick={this.addColumn} type="button" className="btn btn-outline-primary">Add More</button>
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

                                                        {/* <button onClick={() => this.removeColumn(index)} type="button">Remove</button> */}

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
export default connect(mapStateToProps, mapDispatchToProps)(ModalProducts);
