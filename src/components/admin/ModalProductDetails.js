import React, { Component } from 'react'
import { Modal, Button, Row, Col, Container, Form, Table } from 'react-bootstrap';
export default class ModalProductDetails extends Component {




    render() {
        const { visible, product, onHide } = this.props;
        let tech;
        try {
            tech = JSON.parse(product.technicalInfo);
        } catch {
            tech = {};
        }
        return (
            <div>
                <Modal
                    size="lg"
                    show={visible}
                    onHide={onHide}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" >
                            <i className="far fa-question-circle"> Product Infomation</i>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-4">
                                <img style={{ width: "100%" }} src={product.image && product.image[0]} />
                            </div>
                            <div className="col-8">

                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>{product.name}</th>
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <th>{product.price}$</th>
                                        </tr>
                                        <tr>
                                            <th>Status</th>
                                            <th>{product.status}</th>
                                        </tr>
                                        <tr>
                                            <th>Discount</th>
                                            <th>{product.discount}</th>
                                        </tr>
                                        <tr>
                                            <th>Quantity</th>
                                            <th>{product.quantity}</th>
                                        </tr>
                                        <tr>
                                            <th>Description</th>
                                            <th>{product.description}</th>
                                        </tr>
                                        <tr>
                                            <th>Technical Info</th>
                                            <th> <br />{tech.description},<br /> {tech.machinename},<br /> {tech.ipaddress}</th>
                                        </tr>
                                    </thead>

                                </Table>
                            </div>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>


        )
    }
}
