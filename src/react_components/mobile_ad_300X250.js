import React from 'react'
var _ = require('lodash')

    /*
Deal_Widget_300_250_Recharge
<iframe width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40744?pub_id=43429CL39168'></iframe>

Deal_Widget_300_250_Fashion
<iframe width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40745?pub_id=43429CL39168'></iframe>

Deal_Widget_300_250_Electronics
<iframe width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40746?pub_id=43429CL39168'></iframe>


 Deal_Widget_300_250_Food
<iframe width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40747?pub_id=43429CL39168'></iframe>

Coupon_Widget_300_250_Food
<iframe width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40748?pub_id=43429CL39168'></iframe>

Coupon_Widget_300_250_Baby_Kids
<iframe width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40749?pub_id=43429CL39168'></iframe>
*/

const allAds = [
    <iframe title="Deal_Widget_300_250_Recharge" width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40744?pub_id=43429CL39168'></iframe>,
    <iframe title="Deal_Widget_300_250_Fashion" width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40745?pub_id=43429CL39168'></iframe>,
    <iframe title="Deal_Widget_300_250_Electronics" width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40746?pub_id=43429CL39168'></iframe>,
    <iframe title="Deal_Widget_300_250_Food" width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40747?pub_id=43429CL39168'></iframe>,
    <iframe title="Coupon_Widget_300_250_Food" width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40748?pub_id=43429CL39168'></iframe>,
    <iframe title="Coupon_Widget_300_250_Baby_Kids" width='300' height='250' frameBorder='0' scrolling='no' src='https://widget.cuelinks.com/widgets/40749?pub_id=43429CL39168'></iframe>
]

export default class MobileAd300X250 extends React.Component{

    render() {
        return(
            // eslint-disable-next-line
            <div style={{"backgroundColor":"#99999", "padding":"10px"}}>
                    {_.sample(allAds)} 
            </div>
        )
    }
}
