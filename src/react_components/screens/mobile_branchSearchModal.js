import React from 'react'
import { Modal, List, Button, WingBlank } from 'antd-mobile';
import Sticky from '@wicked_query/react-sticky'
import MobileNavBar from '../mobile_navbar'

import SearchModalHeader from '../mobile_searchModalHeader.js'

import { connect } from 'react-redux'
import {populateFinalFetchedBankBranch,populateBranchesForSelectedCitySelectedLocation, hideBranchNameSearchModal, userSelectedBranch} from '../../actions/actions'

import {fetchBankDetailsForUserSelection} from '../../networkManager'

var _ = require('lodash')
var request = require("request");

const mapStateToProps = (state) => {
    return {
        allBranchesForSelectedBankAndCity : state.branchReducer.allBranchesForSelectedBankAndCity,
        selectedBank : state.userSelectionReducer.selectedBank,
        selectedCity : state.userSelectionReducer.selectedCity,
        //selectedBranch : state.userSelectionReducer.selectedBranch,
        isVisible : state.visibilityPropertiesReducer.isShowingBranchSearchModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSelectedBranch : (selectedBranch) => {dispatch(userSelectedBranch(selectedBranch))},
        hideBranchNameSearchModal : () => {dispatch(hideBranchNameSearchModal())},
        populateBranchesForSelectedCitySelectedLocation : (allBranchObj) => {dispatch(populateBranchesForSelectedCitySelectedLocation(allBranchObj))},
        populateFinalFetchedBankBranch : (finalFetchedBank) => {dispatch(populateFinalFetchedBankBranch(finalFetchedBank))} 
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

class BranchSearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal2: false,
            filteredBranches : [],
        };
    }

    componentDidMount(){
   
        if (this.props.selectedBank === null){
            return
        } 

        let urlToFetch = 'http://localhost:3000/getAllKnownBranches/?searchInput=' 
        if (this.props.selectedBank !== null) {
            urlToFetch = 'http://localhost:3000/getBranchList/?bankName=' + this.props.selectedBank
        } 
        if (this.props.selectedBank !== null && this.props.selectedCity !== null ) {
            urlToFetch = 'http://localhost:3000/getBranchList/?bankName=' + this.props.selectedBank + '&locationName=' + this.props.selectedCity + "&searchInput=" 
        } 

        var that = this; 
        var options = { method: 'GET',
            url: urlToFetch,
            headers: 
            { 'cache-control': 'no-cache',
                'Content-Type': 'application/json' 
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            let allBranchObj = JSON.parse(body).results
            
            console.log("Add City OBj are " + JSON.stringify(allBranchObj))

            that.props.populateBranchesForSelectedCitySelectedLocation(allBranchObj)
            that.setState( {filteredBranchCount : allBranchObj.length})
            that.setState({filteredBranches : allBranchObj.slice(0,500)})
        });
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
        //alert("List item selected " + JSON.stringify(selectedItem.title))
        this.props.userSelectedBranch(selectedItem.title.branch) 
        fetchBankDetailsForUserSelection(this.props.selectedBank,this.props.selectedCity,selectedItem.title.branch)
            .then((finalResult) => {
            this.props.populateFinalFetchedBankBranch(finalResult)
            this.props.hideBranchNameSearchModal() 
        })

        this.props.hideBranchNameSearchModal() 
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
        // Althought we show only a subset, when we search.. we should search all branches.
       
        let searchWords = val.split(" ")  

        let filteredBranchesArr = _.filter(this.props.allBranchesForSelectedBankAndCity, (eachBranch) => {
            //return (cityTrie.find(_.upperCase(val)) || stateTrie.has(_.upperCase(val)))
            let branchesMatchingSearchWords = _.forEach(searchWords,(eachSearchWord) => {
                return (_.lowerCase(eachBranch.branch).indexOf(_.lowerCase(eachSearchWord)) > -1 || _.lowerCase(eachBranch.address).indexOf(_.lowerCase(eachSearchWord)) > -1)
            })
            return branchesMatchingSearchWords
        })
        let filteredBranches = _.flattenDeep(filteredBranchesArr)

        this.setState( {filteredBranchCount : filteredBranches.length})
        this.setState( {filteredBranches : filteredBranches.slice(0,500)})
    }

    render() {
        return (
            <WingBlank>
                <Modal
                    popup
                    visible={this.props.isVisible}
                    onClose={this.onClose('modal2')}
                    animationType="slide-down"
                    //afterClose={() => { alert('afterClose'); }}
                    style = {{height:"100%"}} 
                >
                    <Sticky>
                        <MobileNavBar onUserLeftButtonClick={this.props.hideBankNameSearchModal}/>             
                        <SearchModalHeader mainTitle="Select Branch" searchBarPlaceHolder="Search Branch" onSearch={this.onSearch} /> 
                    </Sticky>
                            {/*   <MobileListView /> */}

                            <List renderHeader={
                                () => <div style={{textAlign:"left",color:"darkgrey",fontSize:"14px"}} >All Branches ({this.state.filteredBranches.length})</div>} className="popup-list">
                                    {this.state.filteredBranches.map((i, index) => (
                                        <List.Item key={index} onClick={() => {this.listItemClicked({index:index,title : i})}} style={{fontSize:"12px",color:"blue",marginLeft:"20px"}}>
                                                {i.branch}
                                            <br />
                                            <div style={{fontSize:"10px"}}>{i.address}</div>
                                            </List.Item>))} 
                                            <List.Item>
                                            <Button type="primary" onClick={this.onClose('modal2')} style={{fontSize : "12px"}}>Please use search bar to find locations</Button>
                                        </List.Item>
                                    </List>
                                </Modal>
                            </WingBlank>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BranchSearchModal)
