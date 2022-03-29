import React, {Component} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import Footer from './footer.js';
import Register from '../user/register.js';
import axios from 'axios';


export default class LoginModal extends Component{
    constructor(props){
        super(props);
        console.log("state ==> " ,this.props);
        this.state = {
            isClosed : this.props.isClosed,
            isOpened : this.props.isOpened,
            title : this.props.title,
            isRegister : false,
            isInfo : {
                result : false,
                message : '',
            },
        };
        this.isLogin = this.isLogin.bind(this);
    }

    onInfoMdal = () => {

    }

    handleChange = e  => {
        console.log("call event~!");
        this.setState({
            [e.target.id] : [e.target.value],
        });
    }

    register = () => {
        console.log("회원가입 시작입니다.~!");
        this.setState({
            isRegister :true,
            title : "회원가입",
        });
    }

    isLogin = () => {
        console.log(" 로그인 합시다=> ", this.state);
        let params = {
            loginId : this.state.loginId[0],
            password : this.state.password[0],
        };

        try {
            axios.post("http://localhost:12201/user/login.do", params).then(res => {
                if(res.data.result){
                    axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                    console.log("test -- > ",       axios.defaults.headers.common['Authorization'] );
                }else {
                    this.setState({
                        isInfo : {
                            result : res.data.result,
                            message : '로그인에 실패하였습니다!',
                        }
                    })
                    delete axios.defaults.headers.common['Authorization'];
                    return this.state.isInfo;
                }
            });
        }catch(error) {
            console.log("err == > ", error);
        }
    }

    isBack = () => {
        console.log("로그인 화면으로");
        this.setState({
            isRegister : false,
            title: "로그인",
        })
    }

    render(){
        // const {isOpened, isClosed} = this.state;
        return (
                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.isOpened} className={this.state.isOpened ? 'loginModal' : 'modal'} onHide={this.state.isClosed}>
                        <Header title={this.state.title} />
                            <Modal.Body>
                                {!this.state.isRegister ?
                                <>
                                    <div className="longinContainer">
                                        <div className="loginInput">
                                            <Form.Control type="text" className="loginId"  id="loginId" onChange={this.handleChange} placeholder="아이디를 입력해주세요!" />
                                            <Form.Control type="password" className="password" id="password" onChange={this.handleChange} placeholder="패스워드를 입력해주세요!" />
                                        </div>
                                        <div className="loginButton">
                                            <Button className="login" onClick={this.isLogin}>로그인</Button>
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
                                </>
                              : <Register isBack={this.isBack}/>}
        
                            </Modal.Body>
                        <Footer/> 
                    </Modal>
         );
    }
}