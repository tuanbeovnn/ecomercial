import React, { Component } from 'react'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { fetchRolesRequest, updateRoleRequest, addCategoryRequest, updateCategory, updateCategoryRequest, addBrandsRequest, updateBrandsRequest } from '../../redux/actions/AdminActions';
import { connect } from 'react-redux';
import swal from 'sweetalert';
class ModalUpdateBrand extends Component {
    state = {
        setLgShow: false,
        lgShow: false,
        name: "",
        code: ""
    }
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, code } = this.state;
        const { brand, brands } = this.props;
        if (brand && brand.id) {
            const body = { code, name };
            if (brands.find(item => item.code === code)) {
                this.setState({
                    message: "The code has been exist!",
                    error: true
                })
            } else if (brands.find(item => item.name === name)) {
                this.setState({
                    message: "The name has been exist!",
                    error: true
                })
            } else {
                this.props.updateBrand(brand.id, body, data => {
                    if (data && data.success) {

                        this.setState(
                            {
                                success: true
                            }
                        )
                        this.props.onHide();
                    }
                })
            }

        } else {
            if (!name || !code) {
                let message = 'Name is required';
                if (!code) message = 'Code is required';
                this.setState({
                    error: true,
                    message: message,
                })
            } else {
                const body = { code, name };
                this.props.addBrand(body, (data) => {
                    console.log(data);
                    if (data && data.id) {
                        this.setState(
                            {
                                success: true,
                                lgShow: false
                            }
                        )
                        console.log(data);
                        this.props.onHide();
                    } else {
                        this.setState({
                            error: true,
                            message: data.details.email
                        })
                    }
                })
            }
        }

    }

    componentDidUpdate(preProps, preState) {
        if (preProps.brand !== this.props.brand) {
            this.onClear();

        }
    }

    onClear = () => {
        if (this.props.brand) {
            this.setState({
                ...this.props.brand
            })
        } else {
            this.setState({
                name: "",
                code: ""
            })
        }
    }


    render() {
        const { onHide, brand, visible } = this.props;
        const { error } = this.state;

        return (

            <div className="col-3">

                <Modal
                    size="lg"
                    show={visible}
                    onHide={onHide}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            {brand && brand.id ? "Update Category" : "Add Category"}
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit}>
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
                                                value={this.state.name}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-group">
                                            <label>Code :</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="code"
                                                onChange={this.onChange}
                                                value={this.state.code}
                                            />
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" variant="outline-success">Save</Button>
                            <Button variant="outline-secondary" onClick={this.onClear}> {brand && brand.id ? "Reset" : "Clear"}</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>


            </div>

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
        addBrand: (body, callback) => {
            dispatch(addBrandsRequest(body, callback));
        },
        updateBrand: (id, body, callback) => {
            dispatch(updateBrandsRequest(id, body, callback));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateBrand);