import React from 'react'
import {connect} from 'react-redux'

import MobileNavBar from '../mobile_navbar'
import MobileHeader from '../mobile_header'
import MobileTabBar from '../mobile_tabbar'
import SearchResultsCard from '../mobile_resultCard'
import FinalResultsCard  from '../mobile_finalResultCard.js'

import GridPopularBanks from '../mobile_gridPopularBanks'

import Sticky from '@wicked_query/react-sticky'

const mapStateToProps = (state) => {
    return {
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
    }
}
class MobileHomeScreen extends React.Component{

render() {
    return(
    <div className="App">
        <Sticky>
            <MobileNavBar titleColor="#ffffff"/> 
        </Sticky>
        <MobileHeader /> 
        <GridPopularBanks />
        <SearchResultsCard mainTitle="Allahabad Bank" statistic="1950" statisticSubTitle="Locations Found"/> 
        <SearchResultsCard mainTitle="Allahabad Bank" subTitle="Bangalore" statistic="50" statisticSubTitle="Branches Found"/> 
        <FinalResultsCard mainTitle="Allahabad Bank" subTitle1="Bangalore" subTitle2="ITPL Branch" addressLine="This is a really long addresline.. " city="Bangalore" pinCode = "560042" addressState="Karataka" ifsc="ICICI000010202303" micr="MICR99999999"/> 
        <MobileTabBar /> 
        </div>
    )
}

}

export default connect(mapStateToProps,mapDispatchToProps)(MobileHomeScreen)

