import React, {Component,useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import ReactModal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Footer from './footer.js';
import Section from './section.js';

export default class LoginModal extends Comment {
    constructor(props){
        super(props)
        this.state = {
              
        };   
    }
    
    render(){
        // const {login, register, close} = this.props;
        return (

        <div className="wrapper">
            <Header/>
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
                 
        </div>
        );
    }
}