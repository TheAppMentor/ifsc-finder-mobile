import React from 'react'
import {connect} from 'react-redux'

import {Tag, WhiteSpace} from 'antd-mobile'

import MobileNavBar from '../mobile_navbar'
import MobileHeader from '../mobile_header'
import SearchResultsCard from '../mobile_searchResultsCard'
import FinalResultsCard  from '../mobile_finalResultCard'

import GridPopularBanks from '../mobile_gridPopularBanks'
import MobileAd300X250 from '../mobile_ad_300X250.js'
import CitySearchModal from './mobile_citySearchModal'
import BranchSearchModal from './mobile_branchSearchModal'

import Sticky from '@wicked_query/react-sticky'

import {showBranchNameSearchModal,showCityNameSearchModal,resetVisibilityProperties,resetUserSelection, userSelectedCity, userSelectedBranch, populateLocationForSelectedBank} from '../../actions/actions'

import {fetchAllLocationsForBank} from '../../networkManager'

const mapStateToProps = (state) => {
    return {
        selectedBank            : state.userSelectionReducer.selectedBank,
        selectedCity            : state.userSelectionReducer.selectedCity,
        selectedBranch          : state.userSelectionReducer.selectedBranch,
        finalBankFetched        : state.userSelectionReducer.finalBankFetched,
        allLocationsForSelectedBank : state.cityNameReducer.allCities,
        allBranchesForSelectedBankSelectedCity : state.branchReducer.allBranchesForSelectedBankSelectedCity }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        userSelectedCity : (selectedCity) => {dispatch(userSelectedCity(selectedCity))},
        userSelectedBranch : (selectedBranch) => {dispatch(userSelectedBranch(selectedBranch))},
        populateLocationForSelectedBank : (locationsForSelectedBank) => {dispatch(populateLocationForSelectedBank (locationsForSelectedBank))},
        resetUserSelection : () => {dispatch(resetUserSelection())},
        resetVisibilityProperties : () => {dispatch(resetVisibilityProperties())},
        showCityNameSearchModal : () => {dispatch(showCityNameSearchModal())}, 
        showBranchNameSearchModal: () => {dispatch(showBranchNameSearchModal())} 
    }
}

class MobileHomeScreen extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0)

        this.props.resetUserSelection() 
       this.props.resetVisibilityProperties() 
    }

    userSelectedBankOnGrid = (selection) => {
        fetchAllLocationsForBank(selection.text)
            .then((allLocations) => {
                console.log(allLocations) 
                this.props.populateLocationForSelectedBank(allLocations['results'])
            })
    }
    
    render() {
        return(
            <div className="App">
                <Sticky>
                    <MobileNavBar titleColor="#ffffff"/> 
                </Sticky>
                <MobileHeader /> 
                <GridPopularBanks userSelectedBank={this.userSelectedBankOnGrid} />
                
                    <WhiteSpace size="sm" />
                    {
                        this.props.selectedBank && 
                            <React.Fragment> 
                            <SearchResultsCard mainTitle= {this.props.selectedBank} 
                                statistic={this.props.allLocationsForSelectedBank.length}  
                                statisticSubTitle="Locations Found"
                                onSearchAction = {this.props.showCityNameSearchModal} 
                            />
                            <MobileAd300X250 />
                        </React.Fragment> 
                                } 
                                
                                {
                                    this.props.selectedBank && 
                                        this.props.selectedCity && 
                                        <React.Fragment> 
                                            <WhiteSpace size="sm" />
                                            <SearchResultsCard mainTitle={this.props.selectedBank} 
                                                subTitle={this.props.selectedCity} 
                                                statistic={this.props.allBranchesForSelectedBankSelectedCity.length} 
                                                statisticSubTitle="Branches Found"
                                                onSearchAction = {this.props.showBranchNameSearchModal} 
                                            /> 
                                                <MobileAd300X250 />
                                        </React.Fragment> 
                                }
                                            {this.props.selectedBank && 
                                                    this.props.selectedCity && 
                                                    this.props.selectedBranch && 
                                                    this.props.finalBankFetched && 
                                                    <React.Fragment> 
                                                    <WhiteSpace size="sm" />
                                                    <FinalResultsCard mainTitle= {this.props.finalBankFetched.bankName}
                                                        subTitle1={this.props.finalBankFetched.city}
                                                        subTitle2={this.props.finalBankFetched.branchName}
                                                        addressLine={this.props.finalBankFetched.address}
                                                        city={this.props.finalBankFetched.city}
                                                        pinCode = {this.props.finalBankFetched.pincode}
                                                        addressState={this.props.finalBankFetched.state}
                                                        ifsc={this.props.finalBankFetched.ifscCode}
                                                        micr= {this.props.finalBankFetched.micr ? this.props.finalBankFetched.micr : "NA"} /> 
                                                    <MobileAd300X250 />
                                            </React.Fragment> 
                                                        } 

                                            <div style={footerStyle}>
                                                <WhiteSpace size="sm" />


                                                <div>
                                                    <Tag onChange={this.searchByCitySelected} style={tagStyle}>Search Using City</Tag>
                                                    <Tag onChange={this.searchByIFSCSelected} style={tagStyle}>Search Using IFSC</Tag>
                                                </div>
                                                <WhiteSpace size="sm" />
                                            </div>
                                            {this.props.selectedBank && <CitySearchModal /> }                      
                                            {this.props.selectedBank && this.props.selectedCity && <BranchSearchModal /> }                      

                                        </div>

        )
    }

}

const footerStyle = {
  backgroundColor: "#121a2f",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "inherit",
  left: "0",
  bottom: "0",
  height: "44px",
};


const tagStyle = {
    margin:"10px", 
    backgroundColor:"transparent"
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileHomeScreen)

