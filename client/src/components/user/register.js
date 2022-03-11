import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBack : this.props.isBack,
        }
    }
    
    duplicateLoginId = () => {

    }

    handleChange = e  => {
        console.log("call event~!");
        this.setState({
            [e.target.id] : [e.target.value],
        });
    }

    register = async() => {
        console.log("회원가입 합시다=> ", this.state);
        let params = {};
        params.loginId= this.state.loginId[0];
        params.name= this.state.name[0];
        params.nickName= this.state.nickName[0];
        params.password= this.state.password[0];
        params.email= this.state.email[0];
    
        try {
            axios.post("http://localhost:12201/user/register", params).then(res => {
                console.log("test ==> ", res);
                console.log("test ==> ", res.data);
            });
            // const data = resopnse;
            // if(data.result){
            //     console.log("register sucess - > ", data.result);
            // }else{
            //     console.log("register fail == > ", data.msg);
            // }
        }catch(error) {
            console.log("err == > ", error);
        }
        
    }

    render(){
        return(
            <div className="userRegister">
                <Form.Control type="text" id="loginId" value={this.state.loginId} onChange={this.handleChange} placeHolder="아이디"/>
                <Form.Control type="text" id="nickName" value={this.state.nickName} onChange={this.handleChange}  placeHolder="닉네임"/>
                <Form.Control type="text" id="name" value={this.state.name} onChange={this.handleChange}  placeHolder="이름"/>
                <Form.Control type="password" id="password" value={this.state.password} onChange={this.handleChange}  placeHolder="비밀번호"/>
                <Form.Control type="password" id="checkPassword" value={this.state.passwordCheck} onChange={this.handleChange}  placeHolder="비밀번호 확인"/>
                <Form.Control type="text" id="phone" value={this.state.phone} onChange={this.handleChange}  placeHolder="전화번호"/>
                <Form.Control type="email" id="email" value={this.state.email} onChange={this.handleChange}  placeHolder="이메일"/>
                <Button className="register" onClick={this.register} >회원가입</Button>
                <Button className="back" onClick={this.state.isBack}>뒤로가기</Button>
            </div>
        );
    }
}