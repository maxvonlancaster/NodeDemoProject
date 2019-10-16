import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Fade
} from 'reactstrap';

export default class TestCollection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collectionName : props.collectionName || null,
            tests : []
        }
    }
}