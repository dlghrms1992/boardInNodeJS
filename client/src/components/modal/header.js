import React, {Component} from 'react';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.closeClick = this.closeClick.bind(this);
        console.log("modal header ==> ", props);
    }

    closeClick = () => {
        this.setState({close : true});
        
    }
    render(){

        const {title, isClosed} = this.props;
        return (
            <header className="modalHeader">
                <div className="top">
                    <div className="">
                        <span>테스트입니다.</span>   
                    </div>
                </div>
                <div className="close" onClick={this.closeClick}>
                    닫기입니다.
                </div>
            </header> 
        );
    }
}