import React, {Component} from 'react';

export default class Section extends Component {
    render(){
        return (
            <section className="section">
                <div className="container">
                    <div className="contents">
                        <div className="best">
                            <div className="title">베스트</div>  
                            <div className="category-list"></div>
                        </div>
                        <div className="category">
                            <div className="title">취미</div>  
                            <div className="category-list"></div>
                        </div>
                        <div className="category">
                            <div className="title">여행</div>  
                            <div className="category-list"></div>
                        </div>
                        <div className="category">
                            <div className="title">공부</div>  
                            <div className="category-list"></div>
                        </div>
                        <div className="category">
                            <div className="title">부업</div>  
                            <div className="category-list"></div>
                        </div>
                        <div className="category">
                            <div className="title">직장</div>  
                            <div className="category-list"></div>
                        </div>
                        <div className="category">
                            <div className="title">투자</div>  
                            <div className="category-list"></div>
                        </div>
                        <div className="category">
                            <div className="title">자유</div>  
                            <div className="category-list"></div>
                        </div>
                    </div>
                    <div className="sub_container">
                        <div className="visitors">
                            <div className="title">방문자</div>  
                            <div className="visitors-list"></div>
                        </div>
                        <div className="rank">
                            <div className="title">랭크</div>  
                            <div className="visitors-list"></div>
                        </div>
                        <div className="advertise">
                            <div className="title">광고</div>  
                            <div className="rank-list"></div>
                        </div>
                     </div>
                </div>
            </section>
        );
    }
}