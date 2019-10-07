import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Fade
} from 'reactstrap';

export default class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fadeIn : false,
            text : props.text || "Text",
            title : props.title || "Title",
        };
        this.toggle = this.toggle.bind(this);

    }

    toggle(){
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    render(){
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.state.title}</CardTitle>
                        <Button color="secondary" onClick={this.toggle}>Start</Button>
                        <Fade in={this.state.fadeIn} className='my-2'>
                            <CardText>{this.state.text}</CardText>
                        </Fade>
                    </CardBody>
                </Card>
            </div>
        );
    }

}