import React from 'react'
import { Modal, List, Button, WingBlank } from 'antd-mobile';
import Sticky from '@wicked_query/react-sticky'
import MobileNavBar from '../mobile_navbar'

import SearchModalHeader from '../mobile_searchModalHeader.js'

import { connect } from 'react-redux'
import {populateAllCityNames, hideCityNameSearchModal, userSelectedCity} from '../../actions/actions'

import {fetchAllLocationForSelectedBank} from '../../networkManager'

var _ = require('lodash')

const mapStateToProps = (state) => {
    return {
        allCities : state.cityNameReducer.allCities,
        selectedBank : state.userSelectionReducer.selectedBank,
        isVisible : state.visibilityPropertiesReducer.isShowingCityNameSearchModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        populateAllCityNames : (allCityNames) => {dispatch(populateAllCityNames(allCityNames))},
        userSelectedCity : (selectedCity) => {dispatch(userSelectedCity(selectedCity))},
        hideCityNameSearchModal : () => {dispatch(hideCityNameSearchModal())},
    }
} 

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}

class CitySearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal2: false,
            filteredCities : [],
        };
    }

    componentDidMount(){

        fetchAllLocationForSelectedBank(this.props.selectedBank).then((fetchedCities) => {

            let allCityObj = fetchedCities.results
            console.log("Add City OBj are " + JSON.stringify(allCityObj))

            this.props.populateAllCityNames(allCityObj)
            this.setState( {filteredCitiesCount : allCityObj.length})
            this.setState({filteredCities : allCityObj.slice(0,500)})
        })
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    listItemClicked = (selectedItem) => {
        this.props.userSelectedCity(selectedItem.title.city) 
        this.props.hideCityNameSearchModal() 
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    stdMargin = "10px"

    onSearch = (val) => {
        // Althought we show only a subset, when we search.. we should search all cities.
       
        /*
        let filteredCities =  this.cityTrie.find(_.upperCase(val))
       let filteredStates =  this.stateTrie.find(_.upperCase(val))

        let allMatches = _.unionWith(filteredCities,filteredStates, _.isEqual); 
        console.log("allMatches is : " + allMatches)
        */
        let searchWords = val.split(" ")  

        let filteredCitiesArr = _.filter(this.props.allCities, (eacyCity) => {
            //return (cityTrie.find(_.upperCase(val)) || stateTrie.has(_.upperCase(val)))
            let citiesMatchingSearchWords = _.forEach(searchWords,(eachSearchWord) => {
                return (_.lowerCase(eacyCity.city).indexOf(_.lowerCase(eachSearchWord)) > -1 || _.lowerCase(eacyCity.state).indexOf(_.lowerCase(eachSearchWord)) > -1)
            })
            return citiesMatchingSearchWords
        })
        let filteredCities = _.flattenDeep(filteredCitiesArr)

        this.setState( {filteredCitiesCount : filteredCities.length})
        this.setState( {filteredCities : filteredCities.slice(0,500)})
    }

    render() {
        return (
            <WingBlank>
                <Modal
                    popup
                    visible={this.props.isVisible}
                    //visible={true}
                    onClose={this.onClose('modal2')}
                    animationType="slide-down"
                    //afterClose={() => { alert('afterClose'); }}
                    style = {{height:"100%"}} 
                >
                    <Sticky>
                        <MobileNavBar onUserLeftButtonClick={this.props.hideBankNameSearchModal}/>             
                        <SearchModalHeader mainTitle="Select City" searchBarPlaceHolder="Seach City/Town/Village" onSearch={this.onSearch} /> 
                    </Sticky>
                            {/*   <MobileListView /> */}

                            <List renderHeader={
                                () => <div style={{textAlign:"left",color:"darkgrey",fontSize:"14px"}} >All Cities ({this.state.filteredCitiesCount})</div>} className="popup-list">
                                    {this.state.filteredCities.map((i, index) => (
                                        <List.Item key={index} onClick={() => {this.listItemClicked({index:index,title : i})}} style={{fontSize:"12px",color:"blue",marginLeft:"20px"}}>{i.city} - {i.state}</List.Item>))} <List.Item>
                                            <Button type="primary" onClick={this.onClose('modal2')} style={{fontSize : "12px"}}>Please use search bar to find locations</Button>
                                        </List.Item>
                                    </List>
                                </Modal>
                            </WingBlank>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CitySearchModal)
