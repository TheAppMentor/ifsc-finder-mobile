import React from 'react'
import {connect} from 'react-redux'

import { Grid } from 'antd-mobile';

const popularBankNames = ["State Bank Of India (SBI)","Punjab National Bank (PNB)","Indian Overseas Bank (IOB)","Allahabad Bank","Axis Bank Ltd","Bank Of Baroda (BOB)","HDFC Bank","ICICI Bank", "Union Bank"]
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
        // userSelectedBank : (selectedBank) => { dispatch(userSelectedBank(selectedBank)) },
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
                        <div style={{ color: '#108EE9', fontSize: '12px', marginTop: '12px' }}>
                            <span>{dataItem.text}</span>
                        </div>
                    </div>
                )}
                        onClick={this.props.userSelectedBank}
                    />
        </div>
    )
}
}

export default connect(mapStateToProps,mapDispatchToProps)(GridPopularBanks)
