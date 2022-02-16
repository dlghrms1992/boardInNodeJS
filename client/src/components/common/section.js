import React, {Component} from 'react';
import  axios  from 'axios';

export default class Section extends Component {
    constructor(props){
        super(props)
        this.state = {
          titleList : [],          
        };   
    }

    componentDidMount(){
        console.log("call didMount");
        this.callTitleList()
            .then(res => this.setState({titleList : res.data.list}))
    }

    callTitleList = async() => {
        console.log("call title");
        const resopnse = await axios.get("http://localhost:12201/api");
        const data = resopnse;
        return data;
    }
    render(){
        const titleList = this.state.titleList;
            return  titleList.map((titleList) =>  (
                <section className="section">
                    <div className="container">
                        <div className="contents">
                            <div className="best">
                                <div className="title"></div>  
                                <div className="category-list"></div>
                            </div>
                            <div className="category">
                                <div className="title">{titleList.toy_title}</div>  
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
            )
        );
    }
}