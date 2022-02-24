import React, {Component} from 'react';
import {Modal} from 'react-bootstrap';
export default class Header extends Component {
    constructor(props){
        super(props);

    }
    render(){
        const {title, isClosed} = this.props;
        return (
            <Modal.Header className="modalHeader" closeButton>
                <Modal.Title>
                    <div className="top">
                        <div className="modalTitle">
                            <span>{title}</span>   
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header> 
        );
    }
}