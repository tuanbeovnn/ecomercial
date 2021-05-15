import React, { Component } from 'react'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { fetchRolesRequest, updateRoleRequest, addCategoryRequest, updateCategory, updateCategoryRequest, addBrandsRequest, updateBrandsRequest } from '../../redux/actions/AdminActions';
import { connect } from 'react-redux';
class ModalUpdateBrand extends Component {
    state = {
        setLgShow: false,
        lgShow: false,


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
        const { brand } = this.props;
        if (brand.id) {
            const body = { code, name };
            this.props.updateBrand(brand.id, body, data => {
                if (data && data.success) {
                    this.setState(
                        {
                            success: true
                        }
                    )

                } else {
                    this.setState({
                        error: true,

                    })
                }
            })
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

    }

    componentDidUpdate(preProps, preState) {
        if (preProps.brand.id !== this.props.brand.id) {
            const { brand } = this.props;
            this.setState({
                ...brand
            })
        }
    }


    render() {
        const { visibleUpdate, onHide, brand, isCreate, visibleAdd } = this.props;
        const { lgShow, error } = this.state;

        return (

            <div className="col-3">
                {!isCreate ?
                    <Modal
                        size="lg"
                        show={visibleUpdate}
                        onHide={onHide}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >

                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Update Brand
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
                                <Button variant="outline-secondary" onClick={this.onClear}>Clear</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>

                    :
                    <div>
                        <Modal
                            size="lg"
                            show={visibleAdd}
                            onHide={onHide}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Form onSubmit={this.handleSubmit} ref={form => this.form = form}>
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-lg">
                                        Add Brand
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

                                                    />
                                                </div>
                                                <br />
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
                }
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        category: state.AdminReducer.category
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