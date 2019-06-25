import React from 'react'
import {connect} from 'react-redux'

import { WhiteSpace, WingBlank} from 'antd-mobile';
import { Typography } from 'antd';
import MobileSearchBar from './mobile_searchBar'

import {showCityNameSearchModal} from "../actions/actions"

const { Title } = Typography;
const mapStateToProps = (state) => {
    return {
        userSelectedBank : state.userSelectionReducer.selectedBank
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        showCityNameSearchModal : () => {dispatch(showCityNameSearchModal())} 
    }
}
//<SearchResultsCard mainTitle="Allahabad Bank" subTitle="Bangalore" statistic="1950" statisticSubTitle="Branches Found"/> 

class SearchResultsCard extends React.Component{

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
            <div ref={this.myDivToFocus}
                style={{ backgroundColor: '#F9F9F9', height: '100%', width: '100%', textAlign: 'top' }}>
                <WhiteSpace size="sm" />

                <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
                    <Title style={{fontSize:24,color:"#8A8A8A",margin:10}}>{this.props.mainTitle}</Title>
                        {this.props.subTitle && <Title style={{fontSize:18,color:"#8A8A8A",margin:0}}>{this.props.subTitle}</Title>}
                        <Title  style={{fontSize:36,color:"#000000", marginBottom:0}}>{this.props.statistic}</Title>
                        <Title style={{fontSize:14 ,color:"#8A8A8A", margin:10, marginTop:0}}>{this.props.statisticSubTitle}</Title>
                        <hr color="#F0F0F0" width="80%"/> 
                        <WhiteSpace size="lg" />
                        <Title style={{fontSize:14 ,color:"#8A8A8A", margin:10, marginTop:0}}>Branch Location</Title>
                        <MobileSearchBar onFocusAction={this.props.onSearchAction } /> 
                        <WhiteSpace size="lg" />
                    </WingBlank>    
                </div> 
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResultsCard)
