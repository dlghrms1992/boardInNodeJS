import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Footer from './footer.js';


export default class LoginModal extends Component{
    constructor(props){
        super(props);
        console.log("state ==> " ,this.props);
        this.state = {
            isClosed : this.props.isClosed,
            isOpened : this.props.isOpened,
            title : this.props.title,
        };
        // this.isClose = this.isClose.bind(this.state.isClosed);

    }

    register = () => {
        console.log("회원가입 시작입니다.~!");
    }

    render(){
        const {isOpened, isClosed, title} = this.state;
        return (
                <Modal show={isOpened} className={isOpened ? 'loginModal' : 'modal'} onHide={isClosed}>
                        <Header title={this.state.title} />
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
                                <div className="registerContainer">
                                    <Button className="findPassword">비밀번호 찾기</Button>
                                    <Button className="register" onClick={this.register}>회원가입</Button>
                                </div>
                                <div className="subContainer">
                                    <Button className="kakao">카카오</Button>
                                    <Button className="google">구글</Button>
                                </div>
                            </Modal.Body>
                        <Footer/> 
                    </Modal>
         );
    }
}