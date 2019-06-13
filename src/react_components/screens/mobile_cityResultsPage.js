import React from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'

import { WhiteSpace, WingBlank, List} from 'antd-mobile';

import MobileNavBar from '../mobile_navbar'
import MobileHeader from '../mobile_header'
import MobileTabBar from '../mobile_tabbar'
import SearchResultsCard from '../mobile_resultCard'
import FinalResultsCard  from '../mobile_finalResultCard.js'

import SearchModalHeader from '../mobile_searchModalHeader'

import Sticky from '@wicked_query/react-sticky'

var request = require("request");


const mapStateToProps = (state) => {
    return {
    
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
class MobileCityResultsScreen extends React.Component{

    componentDidMount(){

        const values = queryString.parse(this.props.location.search)

        var that = this; 
        var options = { method: 'GET',
            url: 'http://localhost:3000/getAllBanksByLocation?searchInput=' + values.cityName,
            headers: 
            { 'cache-control': 'no-cache',
                'Content-Type': 'application/json' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            alert(body)
        });
    }


render() {
    return(
    <div className="App">
        <Sticky>
            <MobileNavBar mode="dark" /> 
            <SearchModalHeader titleColor="#ffffff" mainTitle="Adoni" subTitle="All Banks (2)" searchBarPlaceHolder="Filter your search here" /> 
        </Sticky>


                            <List renderHeader={
                                () => <div style={{color:"darkgrey",fontSize:"14px"}} >All Banks</div>} className="popup-list">
                                    {["a","b","c","d"].map((i, index) => (
                                        <List.Item key={index} onClick={() => {this.listItemClicked({index:index,title : i})}} style={{ backgroundColor : "white" }}>
                                            <FinalResultsCard mainTitle="Allahabad Bank" 
                                                subTitle1="Bangalore" 
                                                subTitle2="ITPL Branch" 
                                                addressLine="This is a really long addresline.. " 
                                                city="Bangalore" 
                                                pinCode = "560042" 
                                                addressState="Karataka" 
                                                ifsc="ICICI000010202303" 
                                                micr="MICR99999999"
                                            /> 
                                        </List.Item>
                                    )
                                    )}
                                    </List>

        </div>
    )
}

}

export default connect(mapStateToProps,mapDispatchToProps)(MobileCityResultsScreen)

