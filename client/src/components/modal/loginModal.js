import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Footer from './footer.js';
import Section from './section.js';

export default class LoginModal extends Component{

    render(){
        // console.log("loginModal ==> ", this.props);
        const {isOpened, isClose, title} = this.props;
        return (
            <Modal show={isOpened} className={isOpened ? 'openModal modal' : 'modal'}>
                <Header title={title} isClose={isClose} />
                    <Section>
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
                    </Section>
                <Footer/> 
            </Modal>
        );
    }
}