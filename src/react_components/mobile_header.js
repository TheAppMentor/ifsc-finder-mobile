import React from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { WhiteSpace, WingBlank} from 'antd-mobile';
import { Typography } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';

import MobileSearchBar  from './mobile_searchBar'
import SearchModal from './screens/mobile_searchModal'
import CitySearchModal from './screens/mobile_citySearchModal.js'

import { connect } from 'react-redux'
//import {fetchAllBanks} from '../networkManager'

import {showBankNameSearchModal,hideBankNameSearchModal} from '../actions/actions'

const { Title } = Typography;

const mapStateToProps = (state) => {
    return {
        userSelectedBank : state.userSelectionReducer.selectedBank
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showBankNameSearchModal : () => {dispatch(showBankNameSearchModal())},
        hideBankNameSearchModal : () => {dispatch(hideBankNameSearchModal())} 
    }
} 

class MobileHeader extends React.Component{

    state = {showModal : false}

    render() {
        return(
            <div style={{ backgroundColor: '#121a2f', height: '300px', width: '100%', textAlign: 'top' }}>
                <WhiteSpace size="lg" />
                    
                <WingBlank alignContent="start" style={{ marginTop: 20, marginBottom: 5 }}>
                    <Title style={{color:"#FAFAFA"}}>IFSC Finder</Title>
                    <Title level={3} style={{color:"#FAFAFA"}}>Find IFSC Code in 3 easy steps</Title>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Title style={{fontSize:14 ,color:"#8A8A8A", margin:10, marginTop:0}}>Find Your Bank</Title>
                    <MobileSearchBar onFocusAction={this.props.showBankNameSearchModal} /> 
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
            </WingBlank>    

                {/* <SearchModal /> */ }
                <CitySearchModal />
            </div> 
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MobileHeader)
