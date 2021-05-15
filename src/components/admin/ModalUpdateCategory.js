import React, { Component } from 'react'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { fetchRolesRequest, updateRoleRequest, addCategoryRequest, updateCategory, updateCategoryRequest } from '../../redux/actions/AdminActions';
import { connect } from 'react-redux';
class ModalUpdateCategory extends Component {
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
        const { cate } = this.props;
        if (cate.id) {
            const body = { code, name };
            this.props.updateCate(cate.id, body, data => {
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
                this.props.addCategory(body, (data) => {
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
        if (preProps.cate.id !== this.props.cate.id) {
            const { cate } = this.props;
            this.setState({
                ...cate
            })
        }
    }


    render() {
        const { visibleUpdate, onHide, cate, isCreate, visibleAdd } = this.props;
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
                                Update Category
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
                                        Add Category
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
        addCategory: (body, callback) => {
            dispatch(addCategoryRequest(body, callback));
        },
        updateCate: (id, body, callback) => {
            dispatch(updateCategoryRequest(id, body, callback));
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateCategory);