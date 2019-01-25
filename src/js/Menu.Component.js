import React from 'react';

const menuTitleStyle = {
    'textAlign': 'center',
    'color': 'white',
    'fontSize': '22px',
    'lineHeight': '45px'

}

const menuRowStyle = {
    'backgroundColor': '#999966',
    'height': '50px'
}

const menuFontStyle = {
    'fontSize': '13px',
    'color': 'white',
    'lineHeight': '45px',
    'textAlign': 'center'
}

const iconStyle = {
    'marginTop': '1%',
    'fontSize': 'large',
    'color' : 'white',
    'marginTop': '0%'
}

export default class MenuComponent extends React.Component{
     
    render(){
        return  <div className="row" style={menuRowStyle}>
                    <div className="col-md-2" style={menuTitleStyle}>MUTUAL FUNDS</div>
                    <div className="col-md-6" style={menuFontStyle}>
                        Funds & Planning <span className="glyphicon glyphicon-menu-down"></span>
                        Forms & Downloads <span className="glyphicon glyphicon-menu-down"></span>
                        Self Care <span className="glyphicon glyphicon-menu-down"></span>
                        More <span className="glyphicon glyphicon-menu-down"></span>
                        Knowledge Center <span className="glyphicon glyphicon-menu-down"></span>
                    </div>
                    <div className="col-md-4" style={iconStyle}>
                        <span style={menuFontStyle}>Invest with Us</span><span className="glyphicon glyphicon-menu-down"></span>
                        
                            <span className="glyphicon glyphicon-bell" style={iconStyle}></span>&nbsp;
                            <span className="glyphicon glyphicon-heart-empty" style={iconStyle}></span>&nbsp;
                            <span className="glyphicon glyphicon-search" style={iconStyle}></span>
                       
                    </div>
                </div>
    }
}