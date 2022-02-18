import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home : "",
            write : "",
            login : ""
        };
        this.homeClick = this.homeClick.bind(this);
        this.writeClick = this.writeClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
    }

    homeClick(){

    }

    writeClick(){

    }

    loginClick(){

    }

    render(){
        const home = this.state.home;
        const search = this.state.search;
        const write = this.state.write;
        const login = this.state.login;
        return (
            <nav className="nav">
                <div className="top">
                    <div className="logo">
                        <div className="logo" onClick={home}>정보공유</div>
                        <a href="#" className="home" onClick={home}>HOME</a>
                    </div>
                    <div className="menuBar">
                        <div className="subMenu">
                            <Form.Control type="text" className="searchInput" placeholder="검색어를 입력해주세요!" />
                            <Button className="search" variant="success" onClick={search}>검색</Button>
                        </div>
                        <div className="subMenu">
                            <Button className="write" variant="danger" onClick={write}>글쓰기</Button>
                        </div>
                        <div className="subMenu">
                            <Button  className="login" onClick={login}>로그인</Button>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}