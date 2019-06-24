import React from 'react'
import {connect} from 'react-redux'

import { Flex, WhiteSpace, WingBlank} from 'antd-mobile';
import { Typography } from 'antd';

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

const allStyles = {
    subHead1 : {
        fontFamily : "Roboto",
        fontSize : "14px",
        margin:0, 
        marginTop:"5px"
    }, 
    mainItem : {
        fontSize:24,
        fontFamily : "Roboto",
        color:"#121A2F", 
        margin:0, 
        marginTop:"5px"
    },
    subItem : {
        fontSize:14,
        fontFamily : "Roboto",
        color:"#121A2F", 
        margin:0, 
        marginTop:"5px"
    }
}

class FinalResultsCard extends React.Component{

    constructor(props){
        super(props)
        
        //creates a reference for your element to use
        this.myDivToFocus = React.createRef()
    }
    componentDidMount(){
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
                behavior: "smooth", 
                block: "start"
            })
        }
    }

    render() {
        return(
            <div  ref={this.myDivToFocus} style={style_resultCardDiv}>
                <div style={{backgroundColor:"#121A2F",borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}}> 
                    <WhiteSpace size="sm" />
                    <Title style={{fontFamily:"Roboto",fontSize:"18px",color:"#FFFFFF",margin:"10px"}}>{this.props.mainTitle}</Title>
                    <WhiteSpace size="sm" />
                </div> 
                <WhiteSpace size="sm" />

                <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
                        <Flex justify="between" style={{ marginLeft: 30, marginBottom: "0px" }}>
                            {/* {this.props.subTitle2 && <Title style={{fontSize:18,color:"#8A8A8A",margin:0}}>{this.props.subTitle2}</Title>} */}
                            <Flex.Item style={{fontSize:12 ,color:"#8A8A8A", margin:0, marginTop:10}}>Location</Flex.Item>
                            <Flex.Item style={{fontSize:12 ,color:"#8A8A8A", margin:0, marginTop:10}}>Branch</Flex.Item>
                        </Flex>
                        <Flex justify="end" style={{ marginLeft: 30, marginBottom: 5 }}>
                            {/* {this.props.subTitle2 && <Title style={{fontSize:18,color:"#8A8A8A",margin:0}}>{this.props.subTitle2}</Title>} */}
                            <Flex.Item>{this.props.subTitle1 && <Title style={allStyles.subHead1}>{this.props.subTitle1}</Title>}
</Flex.Item>
                            <Flex.Item>{this.props.subTitle2 && <Title style={allStyles.subHead1}>{this.props.subTitle2}</Title>}
</Flex.Item>
                        </Flex>
                            <WhiteSpace size="lg" />
                        <Title style={{fontSize:12 ,color:"#8A8A8A", margin:0, marginTop:10}}>IFSC</Title>
                        <Title style={allStyles.mainItem} >{this.props.ifsc}</Title>
                        <WhiteSpace size="lg" />
                        <WhiteSpace size="lg" />
                        <Title style={{fontSize:12 ,color:"#8A8A8A", margin:0, marginTop:0}}>MICR</Title>
                        <Title style={allStyles.subItem}>{this.props.micr}</Title>
                        <WhiteSpace size="lg" />
                        
                        <hr color="#F0F0F0" width="80%"/> 
                        <React.Fragment>
                            <Title style={{fontSize:12,color:"#8A8A8A", marginBottom:0}}>{this.props.addressLine}</Title>
                            <Title style={{fontSize:12 ,color:"#8A8A8A", margin:10, marginTop:0}}>{this.props.city} - {this.props.pinCode}</Title>
                            <Title style={{fontSize:12 ,color:"#8A8A8A", margin:10, marginTop:0}}>{this.props.addressState}</Title>
                        </React.Fragment>
                        <WhiteSpace size="lg" />
                    </WingBlank>    
                </div> 
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(FinalResultsCard)

const style_resultCardDiv = {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    //backgroundColor: '#F9F9F9', 
    backgroundColor: 'white', 
    height: '100%', 
    width: 'auto', 
    textAlign: 'center', 
    margin:"10px", 
    borderRadius:"15px"
}


