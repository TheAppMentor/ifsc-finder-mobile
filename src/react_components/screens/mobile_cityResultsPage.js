import React from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'

import { List} from 'antd-mobile';

import MobileNavBar from '../mobile_navbar'
import FinalResultsCard  from '../mobile_finalResultCard.js'

import SearchModalHeader from '../mobile_searchModalHeader'

import {fetchAllBanksForLocation} from '../../networkManager'


import Sticky from '@wicked_query/react-sticky'
import { populateAllBankDetails, userSelectedCity } from '../../actions/actions'

var _ = require("lodash");

const mapStateToProps = (state) => {
    return {
        allFetchedBankDetails : state.bankDetailsReducer.allBankDetails,
        userCitySelection: state.userSelectionReducer.selectedCity 
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        populateAllBankDetails: (fetchedResults) => {dispatch(populateAllBankDetails(fetchedResults))},
        userSelectedCity : (selectedCity) => {dispatch(userSelectedCity(selectedCity))}
    }
}

class MobileCityResultsScreen extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            filteredBankDetails : [],
        };
    }

    componentDidMount(){

        const values = queryString.parse(this.props.location.search)
        this.props.userSelectedCity(values.cityName) 

        fetchAllBanksForLocation(values.cityName).then((allFetchchedBanks) => {
            let allBanksInCity = allFetchchedBanks.results
            console.log(allBanksInCity) 
            this.props.populateAllBankDetails(allBanksInCity) 
            this.setState( {filteredBankDetails : allBanksInCity.slice(0,500)})

        }) 
    }

    // TODO : This guy is used in other places also... refactor it.
    onSearch = (val) => {
        let filteredCitiesArr = _.filter(this.props.allFetchedBankDetails, (eachBankDetail) => {
            return (
                _.lowerCase(eachBankDetail.name).indexOf(_.lowerCase(val)) > -1 || 
                _.lowerCase(eachBankDetail.city).indexOf(_.lowerCase(val)) > -1 || 
                _.lowerCase(eachBankDetail.branch).indexOf(_.lowerCase(val)) > -1 || 
                _.lowerCase(eachBankDetail.state).indexOf(_.lowerCase(val)) > -1
            )
        })
        let filteredCities = _.flattenDeep(filteredCitiesArr)

        this.setState( {filteredBankDetailsCount : filteredCities.length})
        this.setState( {filteredBankDetails : filteredCities.slice(0,500)})
    }

    listItemClicked = (selectedItem) => {
        alert("List item selected " + JSON.stringify(selectedItem.title))
        //this.props.userSelectedCity(selectedItem.title.city) 
        //this.props.hideCityNameSearchModal() 
    }


    render() {
        return(
            <div className="App">
                <Sticky>
                    <MobileNavBar mode="dark" onUserLeftButtonClick={alert("Left button clickec.. i will now close")} /> 
                    <SearchModalHeader titleColor="#ffffff" mainTitle={this.props.userCitySelection} subTitle="All Banks (2)" searchBarPlaceHolder="Filter your search here" onSearch={this.onSearch}/> 
                </Sticky>


                <List renderHeader={
                    () => <div style={{color:"darkgrey",fontSize:"14px"}} >All Banks ({this.props.allFetchedBankDetails.length})</div>} className="popup-list">
                        {this.state.filteredBankDetails.map((i, index) => (
                            <List.Item key={index} onClick={() => {this.listItemClicked({index:index,title : i})}} style={{ backgroundColor : "white" }}>
                                <FinalResultsCard mainTitle={i.name}
                                    subTitle1={i.city} 
                                    subTitle2={ i.branch } 
                                    addressLine={ i.address }
                                    city={ i.city }
                                    pinCode={ i.pincode }
                                    addressState={i.state} 
                                    ifsc={i.ifsc} 
                                    micr={i.micr ? i.micr : "NA"}
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

