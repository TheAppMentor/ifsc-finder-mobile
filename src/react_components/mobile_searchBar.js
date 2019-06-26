import { connect } from 'react-redux'
import React from 'react'
import { SearchBar, WingBlank } from 'antd-mobile';

const mapStateToProps = (state) => {
    return {
        isShowingCityNameSearchModal: state.visibilityPropertiesReducer.isShowingCityNameSearchModal, 
        isShowingBranchNameSearchModal: state.visibilityPropertiesReducer.isShowingBranchNameSearchModal
    }
}

class MobileSearchBar extends React.Component {
    state = {
        value: 'Enter Bank Name',
    };
    componentDidMount() {
        //this.manualFocusInst.focus();
        //this.autoFocusInst.focus();
    }
    onChange= (value) => {
        this.setState({ value });
    };
    clear = () => {
        this.setState({ value: '' });
    };
    handleClick = () => {
        this.manualFocusInst.focus();
    }

    render() {
        return (<div>
            <WingBlank>
                <SearchBar
                    placeholder="Enter Bank Name"
                    cancelText="Cancel"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={this.props.onFocusAction}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    onChange={this.onChange}
                    disabled={this.props.disabled}
                    ref={ref => this.autoFocusInst = ref}
                />
                </WingBlank>         
            </div>);
    }
}

export default connect(mapStateToProps,null)(MobileSearchBar)
