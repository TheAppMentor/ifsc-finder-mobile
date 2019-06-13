import React from 'react'
import { SearchBar, Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { Typography } from 'antd';
import Sticky from '@wicked_query/react-sticky'
import MobileNavBar from '../mobile_navbar'

import SearchModalHeader from '../mobile_searchModalHeader.js'

import { connect } from 'react-redux'
//import {fetchAllBanks} from '../networkManager'
import {hideBankNameSearchModal, populateAllBankNames,populatePopularBankNames,userSelectedBank} from '../../actions/actions'

const mapStateToProps = (state) => {
    return {
        allBanks : state.bankNameReducer.allBanks,
        popularBanks: state.bankNameReducer.popularBanks, 
        isVisible : state.visibilityPropertiesReducer.isShowingBankNameSearchModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        populateAllBankNames : (allBankNames) => {dispatch(populateAllBankNames(allBankNames))},
        populatePopularBankNames : (popularBankNames) => {dispatch(populatePopularBankNames(popularBankNames))},
        userSelectedBank : (selectedBank) => {dispatch(userSelectedBank(selectedBank))},
        hideBankNameSearchModal : () => {dispatch(hideBankNameSearchModal())},
    }
} 

const { Title } = Typography;
var _ = require('lodash')
var request = require("request");

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

class SearchModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal2: false,
            filteredBanks : [],
        };
    }

    componentDidMount(){
        
        var that = this; 
        var options = { method: 'GET',
            url: 'http://localhost:3000/getBanks/?q=',
            headers: 
            { 'cache-control': 'no-cache',
                'Content-Type': 'application/json' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);

            let allBanks = JSON.parse(body).results[1].results
            let allPopularBanks = JSON.parse(body).results[0].results
            
            let allBankNames = _.map(allBanks, (eachBank) => {
                return eachBank.title
            })
            
            let popularBankNames = _.map(allPopularBanks, (eachBank) => {
                return eachBank.title
            })
            
            that.props.populatePopularBankNames(popularBankNames) 
            that.props.populateAllBankNames(allBankNames) 
            
            that.setState({filteredBanks : allBankNames})

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
        //alert("List item selected " + selectedItem.title) 
        this.props.userSelectedBank(selectedItem.title) 
        this.props.hideBankNameSearchModal() 
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
        //
        let filteredBanks = _.filter(this.props.allBanks, (eachBank) => {
            return (_.lowerCase(eachBank).indexOf(_.lowerCase(val)) > -1)
        })

        this.setState( {filteredBanks : filteredBanks} )
    }

    render() {
        return (
            <WingBlank>
                <Modal
                    popup
                    visible={this.props.isVisible}
                    onClose={this.onClose('modal2')}
                    animationType="slide-down"
                    afterClose={() => { alert('afterClose'); }}
                    style = {{height:"100%"}} 
                >
                    <Sticky>
                        <MobileNavBar onUserLeftButtonClick={this.props.hideBankNameSearchModal}/>             
                            <SearchModalHeader onSearch={this.onSearch} /> 
                    </Sticky>
                            {/*   <MobileListView /> */}

                            <List renderHeader={
                                () => <div style={{textAlign:"left",color:"darkgrey",fontSize:"14px"}} >All Banks ({this.state.filteredBanks.length})</div>} className="popup-list">
                                    {this.state.filteredBanks.map((i, index) => (
                                        <List.Item key={index} onClick={() => {this.listItemClicked({index:index,title : i})}} style={{fontSize:"14px",color:"blue",marginLeft:"20px"}}>{i}</List.Item>
                                    ))}
                                        <List.Item>
                                            <Button type="primary" onClick={this.onClose('modal2')}>End</Button>
                                        </List.Item>
                                    </List>
                                </Modal>
                            </WingBlank>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchModal)
