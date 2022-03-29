const { CompletionListener } = require("concurrently/dist/src/completion-listener");
import React, {Component} from 'react';
import { Modal} from 'react-bootstrap';
import Header from './header.js';
import Footer from './footer.js';

export default class InfoModal extends Component {
    constructor(props){
        super(props);
        console.log("state ==> " ,this.props);
        this.state = {
            isClosed : this.props.isClosed,
            isOpened : this.props.isOpened,
            title : this.props.title,
            message : this.props.message,
        };

    }
    
    render() {
        return (
            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.isOpened} onHide={this.state.isClosed}>
                <Header title={this.state.title} />
                <Modal.Body>
                    <div className="container">
                        {this.state.message}
                    </div>
                </Modal.Body>
                <Footer/> 
            </Modal>
        );
    }
}