import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import LoginModal from '../modal/loginModal.js';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeOn: false,
            writeOn : false,
            isOpened : true ? false : false,
            isClosed : false,
            title : '',
        };
        // this.logindModalClose = this.logindModalClose.bind(this.state);
        console.log('nav ===== >', typeof this.state.isOpened);
    }

    homeClick(){

    }

    searchClick(){

    }

    writeClick(){

    }

    loginClick = () => {
        this.setState({ isOpened: true});
    }

    componentDidMount = (prevProps, prevState) => {
        console.log("this state 언제호출?");
        console.log(prevProps);
        console.log(prevState);
    }

    render(){

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
                            {this.state.isOpened ?
                             <LoginModal isOpened={this.state.isOpened} isClosed={this.state.isClosed} title="로그인" ></LoginModal>
                            : null}
                        </div>
                    </div>
                </div>
        
            </nav>
        );
    }
}