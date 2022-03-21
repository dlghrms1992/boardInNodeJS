const { CompletionListener } = require("concurrently/dist/src/completion-listener");
import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import Header from './header.js';
import Footer from './footer.js';

export default class InfoModal extends Component {

    render() {
        return (
            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.isOpened} className={this.state.isOpened ? 'loginModal' : 'modal'} onHide={this.state.isClosed}>
                <Header title={this.state.title} />
                <Modal.Body>
                    <div className="container">
                        {this.message}
                    </div>
                </Modal.Body>
                <Footer/> 
            </Modal>
        );
    }
}