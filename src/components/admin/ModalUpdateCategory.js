import React, { Component } from 'react'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { fetchRolesRequest, updateRoleRequest, addCategoryRequest, updateCategory, updateCategoryRequest } from '../../redux/actions/AdminActions';
import { connect } from 'react-redux';
import swal from 'sweetalert';
class ModalUpdateCategory extends Component {
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
        const { category, allCategories } = this.props;
        if (category && category.id) {
            const body = { code, name };
            if (allCategories.find(item => item.code === code)) {
                this.setState({
                    message: "The code has been exist!",
                    error: true
                })
            } else if (allCategories.find(item => item.name === name)) {
                this.setState({
                    message: "The name has been exist!",
                    error: true
                })
            } else {
                this.props.updateCate(category.id, body, data => {
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
                this.props.addCategory(body, (data) => {
                    console.log(data);
                    if (data && data.id) {
                        this.setState(
                            {
                                success: true,
                                lgShow: false
                            }
                        )
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
        if (preProps.category !== this.props.category) {
            this.onClear();

        }
    }
    onClear = () => {
        if (this.props.category) {
            this.setState({
                ...this.props.category
            })
        } else {
            this.setState({
                name: "",
                code: ""
            })
        }
    }

    render() {
        const { onHide, category, visible } = this.props;
        const { error } = this.state;
        console.log(this.props);
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
                            {category && category.id ? "Update Category" : "Add Category"}
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
                            <Button variant="outline-secondary" onClick={this.onClear}> {category && category.id ? "Reset" : "Clear"}</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>

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
        addCategory: (body, callback) => {
            dispatch(addCategoryRequest(body, callback));
        },
        updateCate: (id, body, callback) => {
            dispatch(updateCategoryRequest(id, body, callback));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateCategory);