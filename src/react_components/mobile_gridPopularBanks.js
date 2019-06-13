import React from 'react'
import {connect} from 'react-redux'

import { Grid } from 'antd-mobile';

import {userSelectedBank} from '../actions/actions'

const popularBankNames = ["State Bank Of India","Punjab National Bank","Indian Overseas Bank","Allahabad Bank","Axis Bank","Bank Of Baroda","HDFC Bank","ICICI Bank", "Union Bank"]
const popularBankLogos = ["SBI_100x75_small","PNB_100x75_small","IOB_100x75_small","Allahabad_100x75_small","Axis_100x75_small","BOB_100x75_small","HDFC_100x75_small","ICICI_100x75_small","Union_100x75_small"]

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: '../logo/' + popularBankLogos[i] + '.png',
    text: popularBankNames[i],
}));

const mapStateToProps = (state) => {
    return {
        //userSelectedBank : state.userSelectionReducer.selectedBank
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        userSelectedBank : (selectedBank) => {dispatch(userSelectedBank(selectedBank))},
    }
}
//<SearchResultsCard mainTitle="Allahabad Bank" subTitle="Bangalore" statistic="1950" statisticSubTitle="Branches Found"/> 

class GridPopularBanks extends React.Component{

render() {
    return(
        <div>
            <Grid data={data} columnNum={3} 
                renderItem={dataItem => (
                    <div style={{ padding: '12.5px', paddingTop : '25px'}}>
                        <img src={dataItem.icon} style={{ width: '50px', height: '37.5px' }} alt="" />
                        <div style={{ color: 'blue', fontSize: '12px', marginTop: '12px' }}>
                            <span>{dataItem.text}</span>
                        </div>
                    </div>
                )}
                        onClick={(item) => {this.props.userSelectedBank(item.text)}}
                    />
        </div>
    )
}
}

export default connect(mapStateToProps,mapDispatchToProps)(GridPopularBanks)
