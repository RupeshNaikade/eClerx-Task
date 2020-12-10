import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Row, Col, Card, Container, Table } from 'react-bootstrap';
import { FadeTransform } from 'react-animation-components';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import axios from 'axios';

const Admin = () => {
    const [data, setData] = useState(null);
    // const apiURL='https://randomuser.me/api/';
    var rows = "";
    fetch('https://randomuser.me/api/', {
        method: 'get',
        headers: { "content-type": "application/json" }
    }).then(response => response.json())
        .then(success => {
            // setData(success)
            console.log(success.results[0].gender)
            setData(success.results)
            rows = success.results.map((data, key) => {
                return (
                    <tr>
                        <td>{key + 1}</td>
                        <td>{data?.name?.first}</td>
                        <td>{data?.name?.last}</td>
                        <td>{data?.location?.street?.number},{data?.location?.street?.name}
                            ,{data?.location?.city},{data?.location?.state},{data?.location?.country},{data?.location?.postcode}</td>
                        <td><img src={data?.picture?.thumbnail} /></td>
                        <td>{data?.dob?.date}</td>
                    </tr>
                )
            })
        })
        .catch(error => console.log(error)
        );
    // const fetchData=()=>{
    // const apiURL='https://randomuser.me/api/';
    //     const response =axios.get(apiURL);
    //     setData(response.data);
    // }
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col className='col-md-10 mt-5' >
                    <h2 className="text-center">Admin Center</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Photo</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((data, key) => {
                                return (
                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{data?.name?.first}</td>
                                        <td>{data?.name?.last}</td>
                                        <td>{data?.location?.street?.number},{data?.location?.street?.name}
                            ,{data?.location?.city},{data?.location?.state},{data?.location?.country},{data?.location?.postcode}</td>
                                        <td><img src={data?.picture?.thumbnail} /></td>
                                        <td>{data?.email}</td>
                                        <td>{data?.dob?.date}</td>
                                    </tr>)})}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Admin;

