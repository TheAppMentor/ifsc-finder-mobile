import React from 'react'
import {connect} from 'react-redux'

import {Flex, WhiteSpace} from 'antd-mobile'

import { Typography } from 'antd';
import MobileNavBar from '../mobile_navbar'
import MobileHeader from '../mobile_header'
import SearchResultsCard from '../mobile_searchResultsCard'
import FinalResultsCard  from '../mobile_finalResultCard'

import GridPopularBanks from '../mobile_gridPopularBanks'
import MobileAd300X250 from '../mobile_ad_300X250.js'
import CitySearchModal from './mobile_citySearchModal'
import BranchSearchModal from './mobile_branchSearchModal'

import {showBranchNameSearchModal,showCityNameSearchModal,resetVisibilityProperties,resetUserSelection, userSelectedBank, userSelectedCity, userSelectedBranch, populateLocationForSelectedBank} from '../../actions/actions'

import {fetchAllLocationsForBank} from '../../networkManager'

const { Title } = Typography;

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
        userSelectedBank : (selectedBank) => {dispatch(userSelectedBank(selectedBank))},
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
                this.props.userSelectedBank(selection.text)
            })
    }

    onCityNameSearch = () => {
        this.props.showCityNameSearchModal()
    }

    render() {
        return(
            <div className="App">
                    <MobileNavBar titleColor="#ffffff" leftIconName={null} /> 
                        { /*}<Sticky>
                    <MobileNavBar titleColor="#ffffff" leftIconName={null} /> 
                </Sticky>
                */ } 
                <MobileHeader /> 
                <GridPopularBanks userSelectedBank={this.userSelectedBankOnGrid} />
                
                    <WhiteSpace size="sm" />
                    {
                        this.props.selectedBank && 
                            <React.Fragment> 
                            <SearchResultsCard mainTitle= {this.props.selectedBank} 
                                statistic={this.props.allLocationsForSelectedBank.length}  
                                statisticSubTitle="Locations Found"
                                onSearchAction = {this.onCityNameSearch} 
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
                                                statistic={this.props.allBranchesForSelectedBankSelectedCity ? this.props.allBranchesForSelectedBankSelectedCity.length : 0 } 
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
                                                <WhiteSpace size="lg" />
                                                <WhiteSpace size="lg" />
                                            </React.Fragment> 
                                                        } 

                                            <div style={footerStyle}>
                                                <WhiteSpace size="sm" />

                                                <div>
                                                    <Flex justify="center" wrap="true" > 
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">Search Using Location</a></Title>
                                                        </Flex.Item>
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">Search Using IFSC</a></Title>
                                                        </Flex.Item>
                                                    </Flex> 
                                                    <Flex justify="center" wrap="true" > 
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">RTGS Holidays 2019</a></Title>
                                                        </Flex.Item>
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">Find MICR Code</a></Title>
                                                        </Flex.Item>
                                                    </Flex> 

                                                    <Flex justify="center" > 
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">SBI IFSC Codes</a></Title>
                                                        </Flex.Item>
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">PNB IFSC Codes</a></Title>
                                                        </Flex.Item>
                                                    </Flex> 
                                                    <Flex justify="center" > 
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">HDFC IFSC Codes</a></Title>
                                                        </Flex.Item>
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">ICICI IFSC Codes</a></Title>
                                                        </Flex.Item>
                                                    </Flex> 
                                                    <hr color="#CACACA" style={{height:"0.5px"}}/> 
                                                    <Flex justify="center" > 
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a href="/" style={{fontSize:12 ,color:"#FFFFFF"}} >Legal Disclaimer</a></Title>
                                                        </Flex.Item>
                                                    </Flex> 
                                                    <Flex> 
                                                        <Flex.Item style={{fontSize:8 }} align="center">
                                                            <p  align="justify">www.ifsc.today has made every attempt to ensure the accuracy of the information provided on this website. Bank Details and IFS code has been fetched from the Reserve Bank of India's website. This organization (www.ifsc.today) does not accept any responsibility or liability for the accuracy, content, completeness, legality, or reliability of the information contained on this website.</p>
                                                        </Flex.Item>
                                                    </Flex> 
                                                    <Flex justify="center" > 
                                                        <Flex.Item align="center">
                                                            <Title style={{fontSize:12 }}><a href="/" style={{fontSize:12 ,color:"#FFFFFF"}} >Data last updated : 28-May-2019</a></Title>
                                                            <Title style={{fontSize:12 }}><a style={{fontSize:12 ,color:"#FFFFFF"}} href="www.google.com">© 2019 <a href="https://www.ifsc.today/">www.ifsc.today</a></a></Title>
                                                        </Flex.Item>
                                                    </Flex> 
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
  height: "auto",
};


export default connect(mapStateToProps,mapDispatchToProps)(MobileHomeScreen)

