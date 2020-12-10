import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Card, Container, Table } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import axios from 'axios';

const User = () => {
    const [data, setData] = useState(null);
    fetch('https://fakestoreapi.com/products/1', {
        method: 'get',
        headers: { "content-type": "application/json" }
    }).then(response => response.json())
        .then(success => {
            setData(success)
            console.log(success)
            // setData(success.results)

        })
        .catch(error => console.log(error)
        );

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col className='col-md-10 mt-5' >
                    <h2 className="text-center">User Center</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Catgory</th>
                                <th>Picture</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{data?.id}</td>
                                <td>{data?.title}</td>
                                <td>{data?.price}</td>
                                <td>{data?.description}</td>

                                <td>{data?.category}</td>
                                <td><img src={data?.image} width="200" height="200" /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default User;

