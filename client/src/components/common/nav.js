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
            isOpened : false,
            isClosed : false,
            title : '',
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
        this.setState(
                {
                    isOpened: true,
                });
        console.log("modal 띄우기전 테스트 입니다." + this.state.isOpened);
        console.log("modal 띄우기전 테스트 입니다." + this.state.isOpened);
        return  this.state.isOpened;
    }

    render(){
        //  const [showModal, setShowModal] = useState(false);
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
                            <LoginModal isOpened={this.state.isOpened} isClosed={this.state.isClosed} title="로그인" ></LoginModal>
                        </div>
                    </div>
                </div>
        
            </nav>
        );
    }
}