import React, { Component } from 'react'
import { Modal, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { fetchRolesRequest, updateRoleRequest } from '../../redux/actions/AdminActions';
import { connect } from 'react-redux';
class ModalUpdateRole extends Component {


    state = {
        roles: [],

    }
    componentDidMount() {
        this.props.fetchRoles();
    }
    // onChange = (e, i) => {
    //     console.log(e.target.value);
    //     this.setState({roles: e.target.value});
    //     const roles = this.state.roles;
    //     roles[i] = e.target.value;
    //     this.setState({roles});

    //     // this.setState((prevState) => {
    //     //     return {
    //     //         ...prevState,
    //     //         roles: !prevState.value
    //     //     }
    //     // })

    // }
    onChangeCheckBox = (id) => {
        const roles = this.state.roles;
        // Find index
        const findIdx = roles.indexOf(id);
        // // Index > -1 means that the item exists and that the checkbox is checked
        // // and in that case we want to remove it from the array and uncheck it
        if (findIdx > -1) {
            roles.splice(findIdx, 1);
        } else {
            roles.push(id);
        }
        this.setState({
            roles: roles
        });
        console.log(roles);
    };


    handleSubmit = (e) => {
        e.preventDefault();
        const { user } = this.props;
        const { roles } = this.state;
        const body = { idRoles: roles };
        this.props.updateRoles(user.id, body, (data) => {
            console.log(data);
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
    }
    onHide = () => {
        this.setState({
            roles: [],
        });
        this.props.onHide();
    }
    render() {
        const { visibleUpdate, onHide, allRoles, user } = this.props;


        return (
            <div className="col-3">
                <Modal
                    size="lg"
                    show={visibleUpdate}
                    onHide={this.onHide}
                    aria-labelledby="example-modal-sizes-title-lg"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Update User Role
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
                                                value={user.name}
                                                disabled

                                            />



                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="form-group">
                                            <label>Type :</label>
                                            <div>
                                                {allRoles.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <input
                                                                key={index}
                                                                type="checkbox"
                                                                name="role"
                                                                onChange={() => this.onChangeCheckBox(item.id)}
                                                                style={{ marginRight: 10 }}
                                                            />
                                                            <label> {item.name}</label><br />
                                                        </div>
                                                    )
                                                })}
                                            </div>
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
        allRoles: state.AdminReducer.roles
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchRoles: () => {
            dispatch(fetchRolesRequest());
        },
        updateRoles: (id, body, callback) => {
            dispatch(updateRoleRequest(id, body, callback));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateRole);