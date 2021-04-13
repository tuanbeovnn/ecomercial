import React, { Component } from 'react'
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { addProductRequest, fetchBrandProductRequest, fetchCategoriesRequest, updateProductRequest, uploadRequest } from '../../redux/actions/AdminActions';
class ModalUpdateProduct extends Component {

    state = {
        technicalInfo: [],
        files: []

    }

    onChangeFile = (e) => {
        let target = e.target;
        let name = target.name;
        let files = target.files;
        this.setState({
            [name]: files,
        });
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

    componentDidUpdate(preProps, preState) {
        if (preProps.product.id !== this.props.product.id) {
            const { product } = this.props;

            const technicalInfo = [];

            let tech;
            try {
                tech = JSON.parse(product.technicalInfo);
            } catch {
                tech = {};
            }
            for (const [key, value] of Object.entries(tech)) {
                technicalInfo.push({ key: key, value: value })
            }
            const date = new Date(product.endTime);
            const year = date.getFullYear();
            const month = date.getMonth()+1;
            const day = date.getDate();
            const m = (month < 10 ? '0' : '') + month;
            const d = (day < 10 ? '0' : '') + day;
            console.log(date);
            this.setState({
                ...product,
                endTime: `${year}-${m}-${d}`,
                technicalInfo: technicalInfo
            })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { files } = this.state;
        const {onHide} = this.props;
        
        if (files && files.length) {
            let data = new FormData();
            
            for (let i = 0; i < files.length; i++) {
                data.append("files", files[i]);
            }
            this.props.uploadImage(data, (imageUp) => {
                console.log(imageUp);
                if (imageUp) {
                    this.setState({
                        url: imageUp
                    })
                    this.handleUpdateProduct(imageUp);
                    swal({
                        title: "Good job!",
                        text: "Update product Successfully!",
                        icon: "success",
                        button: " Ok!",
                    });
                    onHide();
                }
            })
        }else {
            this.handleUpdateProduct();
            swal({
                title: "Good job!",
                text: "Update product Successfully!",
                icon: "success",
                button: " Ok!",
            });
            onHide();
        }

    }

    handleUpdateProduct = (imageUp) => {

        const { brandCode, categoryCode, code, description, discount, image, name, originalPrice, status, technicalInfo, quantity, endTime } = this.state;
        console.log(this.state)
        const tech = {};
        technicalInfo.map((item) => {
            tech[item.key] = item.value

        })
        const techString = JSON.stringify(tech);// string to backend

        if (!name || !description || !categoryCode || !brandCode || !quantity || !originalPrice ) {
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
            console.log(message);
        } else {
            const body = { brandCode, categoryCode, code, description, discount: Number(discount), image: imageUp || image, name, originalPrice: Number(originalPrice), status,
                 technicalInfo: techString, quantity: Number(quantity), endTime };
            console.log(body);
            const { product } = this.props;
            console.log(product.id);
            this.props.updateProduct(product.id, body, (data) => {
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

    render() {

        const { visibleUpdate, product, onHide, allCategories, allBrands } = this.props;
        const { technicalInfo } = this.state;
        console.log(this.state);
        return (
            <div className="col-3">
                <Modal
                    size="lg"
                    show={visibleUpdate}
                    onHide={onHide}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Update Product
                            </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit}>
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
                                                value={this.state.name}
                                            />
                                        </div>

                                        <div className="form-group">

                                            <label>Original Price :</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="originalPrice"
                                                onChange={this.onChange}
                                                value={this.state.originalPrice}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Code:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="code"
                                                onChange={this.onChange}
                                                value={this.state.code}

                                            />
                                        </div>

                                        <div className="form-group">

                                            <label>Quantity :</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="quantity"
                                                onChange={this.onChange}
                                                value={this.state.quantity}

                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Discount:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="discount"
                                                onChange={this.onChange}
                                                value={this.state.discount}

                                            />
                                        </div>


                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-group">
                                            {this.state.image && this.state.image.length && this.state.image.map((item) => {
                                                return (
                                                    <img style={{ width: 'auto', height: 98, margin: 10 }} key={item} src={item} />
                                                )
                                            })}
                                            <label className="form-control" style={{
                                                // lineHeight: '28px',
                                                // border: '1px solid #999999',
                                                // backgroundColor: 'transparent',
                                                // borderRadius: 50,
                                                // fontSize: 14,
                                                // fontWeight: 600, color: '#444444',
                                                // width: '100%',
                                                // maxWidth:320,
                                                // height:50,
                                                // textAlign: 'left',
                                                position: 'relative',
                                                // margin: 0
                                            }} htmlFor="file_upload">Choose your image<i style={{ position: 'absolute', right: 10, fontSize: 24 }} className="fas fa-folder-open"></i></label>
                                            <input
                                                style={{ display: 'none' }}
                                                id="file_upload"
                                                type="file"
                                                name="files"
                                                className="form-control"
                                                multiple
                                                onChange={this.onChangeFile}
                                                // value={this.state.files}
                                            />

                                        </div>

                                        <div className="form-group">

                                            <label>Category Code :</label>
                                            <select
                                                className="form-control"
                                                required="required"
                                                name="categoryCode"
                                                onChange={this.onChange}
                                                value={this.state.categoryCode}


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
                                                value={this.state.brandCode}

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
                                                value={this.state.status}
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
                                                name="endTime"
                                                onChange={this.onChange}
                                                value={this.state.endTime}
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
                                                value={this.state.description}
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
        },
        updateProduct: (id, body, callback) => {
            dispatch(updateProductRequest(id, body, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateProduct);
