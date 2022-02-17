import React ,{Component} from 'react';
import axios from 'axios';

export default class category extends Component {
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
            <div className="category">
                <div className="title">
                    <div className="text"><span>{titleList.toy_title}</span></div>
                    <div className="more-category"><span>더보기</span></div>    
                </div>  
                <div className="category-list"></div>
            </div>
            ));
    }
}