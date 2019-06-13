import React from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { WhiteSpace, WingBlank, SearchBar} from 'antd-mobile';
import { Typography } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';


const { Title } = Typography;

export default class SearchModalHeader extends React.Component {

    render(){
        return (
            <div style={{backgroundColor:"white"}}>
                <div style={{margin:'0px 18px 0px 18px'}}>
                    <Title style={{textAlign:"left",fontSize:"32px",color:"black", margin:"0px",marginLeft:"10px",paddingTop:"30px"}}>{this.props.mainTitle}</Title>
                    <Title style={{textAlign:"left",fontSize:"18px",color:"grey", margin:"10px",marginLeft:"10px"}}>{this.props.subTitle}</Title>
                        <WhiteSpace size="lg"/>
                    <SearchBar 
                        textAlign="left" 
                        cancelText="Cancel"
                        placeholder={this.props.searchBarPlaceHolder}
                        maxLength={15}
                        onChange={this.props.onSearch}
                    />
                        <WhiteSpace size="lg"/>
                        <WhiteSpace size="lg"/>
                    </div>
                </div>

        )
    }
}
