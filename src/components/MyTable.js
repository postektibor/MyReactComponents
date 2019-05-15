import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
//import paginationFactory from "react-bootstrap-table2-paginator";
//import cellEditFactory from "react-bootstrap-table2-editor";
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Button, Container, Row, Col } from 'reactstrap';

const Actions = (props) => {
  return (
    <Container>
      <Row>
        <Col><Button close color="primary"><i className="material-icons">visibility</i></Button></Col>
        <Col><Button close color="success"><i className="material-icons">edit</i></Button></Col>
        <Col><Button close color="danger"><i className="material-icons">delete</i></Button></Col>
      </Row>
    </Container>
  )
}

const actionsFormatter = (cell, row) => <Actions id={row.id}/>;

const products = [
  { id: 1, name: "Adam", price: 100 },
  { id: 2, name: "Fero", price: 200 },
  { id: 3, name: "Juro", price: 10 },
  { id: 4, name: "Dezo", price: 59 },
];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}, {
  dataField: 'actions',
  text: 'Actions',
  isDummyField: true,
  csvExport: false,
  formatter: actionsFormatter,
},
];


export default () =>
  <BootstrapTable keyField='id' data={products} columns={columns}/>
