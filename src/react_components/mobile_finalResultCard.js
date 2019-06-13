import React from 'react'
import {connect} from 'react-redux'

import { WhiteSpace, WingBlank} from 'antd-mobile';
import { Typography } from 'antd';
import MobileSearchBar from './mobile_searchBar'

const { Title } = Typography;
const mapStateToProps = (state) => {
    return {
        userSelectedBank : state.userSelectionReducer.selectedBank
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
//<SearchResultsCard mainTitle="Allahabad Bank" subTitle="Bangalore" statistic="1950" statisticSubTitle="Branches Found"/> 

class FinalResultsCard extends React.Component{

    render() {
        return(
            <div style={style_resultCardDiv}>
                <WhiteSpace size="sm" />

                <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
                    <Title style={{fontSize:24,color:"#8A8A8A",margin:10}}>{this.props.mainTitle}</Title>
                        {this.props.subTitle1 && <Title style={{fontSize:12,color:"#8A8A8A",margin:0}}>{this.props.subTitle1} - {this.props.subTitle2} Branch</Title>}
                            {/* {this.props.subTitle2 && <Title style={{fontSize:18,color:"#8A8A8A",margin:0}}>{this.props.subTitle2}</Title>} */}
                        <WhiteSpace size="lg" />
                        <Title style={{fontSize:12,color:"#8A8A8A", marginBottom:0}}>{this.props.addressLine}</Title>
                        <Title style={{fontSize:12 ,color:"#8A8A8A", margin:10, marginTop:0}}>{this.props.city} - {this.props.pinCode}</Title>
                        <Title style={{fontSize:12 ,color:"#8A8A8A", margin:10, marginTop:0}}>{this.props.addressState}</Title>
                        
                        <hr color="#F0F0F0" width="80%"/> 
                        <WhiteSpace size="lg" />
                        <Title style={{fontSize:12 ,color:"#8A8A8A", margin:0, marginTop:0}}>IFSC</Title>
                        <Title style={{fontSize:24 ,color:"#000000", margin:0, marginTop:0}}>{this.props.ifsc}</Title>
                        <WhiteSpace size="lg" />
                        <WhiteSpace size="lg" />
                        <Title style={{fontSize:12 ,color:"#8A8A8A", margin:0, marginTop:0}}>MICR</Title>
                        <Title style={{fontSize:14 ,color:"#000000", margin:0, marginTop:0}}>{this.props.micr}</Title>
                        <WhiteSpace size="lg" />
                    </WingBlank>    
                </div> 
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(FinalResultsCard)

const style_resultCardDiv = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: '#F9F9F9', 
    height: '100%', 
    width: 'auto', 
    textAlign: 'center', 
    margin:"10px", 
    borderRadius:"10px"
}


