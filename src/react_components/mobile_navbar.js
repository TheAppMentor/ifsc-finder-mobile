import React from 'react'
import { NavBar, Icon } from 'antd-mobile';

const darkStyle = {
    titleColor : "#ffffff",
    backgroundColor : "black"
}

const lightStyle = {
    titleColor : "black",
    backgroundColor : "blue"
}

export default class MobileNavBar extends React.Component{
    
    styleToApply = (this.props.mode === "darkMode") ? darkStyle : lightStyle  

    render() {
        return(
            <div>
                <NavBar
                    mode="light"
                    backgroundcolor = {this.styleToApply.backgroundColor} 
                    color = {this.styleToApply.color} 
                    icon={<Icon type="cross" />}
                        onLeftClick={() => {
                            if (this.props.onUserLeftButtonClick !== undefined) {
                                this.props.onUserLeftButtonClick()
                            } 
                        }}
                        rightContent={[
                        ]}
                            >IFSC Finder</NavBar>
                        </div>
        )
    }
}
