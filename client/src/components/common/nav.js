import React, {Component} from 'react';

export default class Nav extends Component {
    render(){
        return (
            <nav className="nav">
                <div className="top">
                    <div className="logo">
                        <div className="logo">정보공유</div>
                        <a href="#" className="home">HOME</a>
                    </div>
                    <div className="menuBar">
                        <a href="#" className="write">글쓰기</a>
                        <a href="#" className="">로그인</a>
                    </div>
                </div>
            </nav>
        );
    }
}