import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Register extends Component {

    render(){
        return(
            <div className="userRegister">
                <Form.Control type="text" id="loginId" placeHolder="아이디"/>
                <Form.Control type="text" id="name" placeHolder="이름"/>
                <Form.Control type="text" id="password" placeHolder="비밀번호"/>
                <Form.Control type="text" id="checkPassword" placeHolder="비밀번호 확인"/>
                <Form.Control type="text" id="nickName" placeHolder="닉네임"/>
                <Form.Control type="text" id="email" placeHolder="이메일"/>
                <Button className="register">회원가입</Button>
                <Button className="back">뒤로가기</Button>
            </div>
        );
    }
}