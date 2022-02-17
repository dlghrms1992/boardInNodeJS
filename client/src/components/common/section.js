import React, {Component} from 'react';
import Category from './category.js'

export default class Section extends Component {

    render(){
            return  (
                <section className="section">
                    <div className="main">
                        <div className="container">
                            <div className="contents">
                                <div className="best">
                                    <div className="title">
                                        <div className="text"><span>베스트</span></div>
                                        <div className="more-category"><span>더보기</span></div>
                                    </div>  
                                    <div className="category-list"></div>
                                </div>
                                <Category/>
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
                    </div>
       
                </section>
            )
    }
}