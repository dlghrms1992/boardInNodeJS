import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Footer from './footer.js';


export default class LoginModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            isClosed : false,
        };
        this.isClose = this.isClose.bind(this);
        console.log("props ==> " ,this.props);

    }

    isClose = () => {

        this.setState({
            isClosed : false,
        })
         console.log("closed Modal~!" + this.state.isClosed);
        return this.state.isClosed;
    }
    render(){
        // console.log("loginModal ==> ", this.props);
        const {isOpened, title} = this.props;

        return (
            <Modal show={isOpened} className={isOpened ? 'loginModal' : 'modal'} onHide={this.isClose}>
                <Header title={title} />
                    <Modal.Body>
                        <div className="longinContainer">
                            <div className="loginInput">
                            <Form.Control type="text" className="loginId" placeholder="아이디를 입력해주세요!" />
                            <Form.Control type="text" className="loginPassword" placeholder="패스워드를 입력해주세요!" />
                            </div>
                            <div className="loginButton">
                                <Button className="login">로그인</Button>
                            </div>
                        </div>
                        <div className="resigeterContainer">
                            <Button>비밀번호 찾기</Button>
                            <Button>회원가입</Button>
                        </div>
                        <div className="subContainer">
                            <Button>카카오</Button>
                            <Button>구글</Button>
                        </div>
                    </Modal.Body>
                <Footer/> 
            </Modal>
        );
    }
}