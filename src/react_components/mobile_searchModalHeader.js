import React from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { WhiteSpace, SearchBar} from 'antd-mobile';
import { Typography } from 'antd';
import 'antd-mobile/dist/antd-mobile.css';
import {connect} from 'react-redux'

import Sticky from '@wicked_query/react-sticky'
const { Title } = Typography;

const mapStateToProps = (state) => {
    return {
        isShowingCityNameSearchModal: state.visibilityPropertiesReducer.isShowingCityNameSearchModal, 
        isShowingBranchNameSearchModal: state.visibilityPropertiesReducer.isShowingBranchNameSearchModal
    }
}

class SearchModalHeader extends React.Component {

    state ={shrink : false } 

    shrink = () => {
        this.setState({shrink : true}) 
    }

    componentWillMount() {
        this.setState({shrink : false})
    }

    render(){
        return (
                <div style={{backgroundColor:"white"}}>
                <div style={{margin:'0px 18px 0px 18px', backgroundColor:"white"}}>
                        {!this.state.shrink &&  
                            <React.Fragment>
                                <Title style={titleStyle}>{this.props.mainTitle}</Title>
                                <Title style={subTitleStyle}>{this.props.subTitle}</Title>
                            </React.Fragment>
                        }        
                            <WhiteSpace size= "md" />
                                <React.Fragment>
                                    <SearchBar 
                                        textAlign="left" 
                                        cancelText="Cancel"
                                        placeholder={this.props.searchBarPlaceHolder}
                                        maxLength={15}
                                        onFocus={this.shrink} 
                                        onCancel={() => {this.setState({shrink : false})}} 
                                        onChange={this.props.onSearch}
                                        disabled= {this.props.isShowingBranchSearchModal}
                                    />
                                        <WhiteSpace size={this.shrink ? "sm" : "lg"} />
                                    </React.Fragment>
                    </div>
                    </div>
        )
    }
}

export default connect(mapStateToProps,null)(SearchModalHeader)

const titleStyle = {
    textAlign:"left",
    fontSize:"32px",
    color:"black", 
    margin:"0px",
    marginLeft:"10px",
    paddingTop:"30px"
}

const subTitleStyle = {
    textAlign:"left",
    fontSize:"18px",
    color:"grey",
    margin:"10px",
    marginLeft:"10px"
}
