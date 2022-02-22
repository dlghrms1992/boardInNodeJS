import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import LoginModal from '../modal/loginModal.js';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeOn: true,
            writeOn : true,
            loginOn : true
        };
        this.homeClick = this.homeClick.bind(this);
        this.writeClick = this.writeClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.searchClick = this.searchClick.bind(this);
    }

    homeClick(){

    }

    searchClick(){

    }

    writeClick(){

    }

    loginClick(){
        console.log("modal 띄우기전 테스트 입니다." + this.state.loginOn);

        return  this.state.loginOn;
    }

    render(){
        // const home = this.state.home;
        // const search = this.state.search;
        // const write = this.state.write;
        // const login = this.state.login;
        return (
            <nav className="nav">
                <div className="top">
                    <div className="logo">
                        <div className="logo" onClick={this.homeClick}>정보공유</div>
                        <a href="#" className="home" onClick={this.homeClick}>HOME</a>
                    </div>
                    <div className="menuBar">
                        <div className="subMenu">
                            <Form.Control type="text" className="searchInput" placeholder="검색어를 입력해주세요!" />
                            <Button className="search" variant="success" onClick={this.searchClick}>검색</Button>
                        </div>
                        <div className="subMenu">
                            <Button className="write" variant="danger" onClick={this.writeClick}>글쓰기</Button>
                        </div>
                        <div className="subMenu">
                            <Button  className="login" onClick={this.loginClick}>로그인</Button>
                        </div>
                    </div>
                </div>
                <div></div>
            </nav>
        );
    }
}