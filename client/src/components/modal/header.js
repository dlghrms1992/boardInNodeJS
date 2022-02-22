import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            close : false,
        };   
        this.closeClick = this.closeClick.bind(this);
    }

    closeClick = () => {
        this.setState({close : true});
        
    }
    render(){
        return (
            <header className="modalHeader">
                <div className="top">
                    <div className="">
                        <span>테스트입니다.</span>   
                    </div>
                </div>
                <div className="close" onClick="{this.closeClick}">
                    닫기입니다.
                </div>
            </header> 
        );
    }
}