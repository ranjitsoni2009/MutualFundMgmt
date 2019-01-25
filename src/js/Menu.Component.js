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
    'marginTop': '1%'
}

export default class MenuComponent extends React.Component{
     
    render(){
        return  <div className="row" style={menuRowStyle}>
                    <div className="col-md-2" style={menuTitleStyle}>MUTUAL FUNDS</div>
                    <div className="col-md-2" style={menuFontStyle}>Funds & Planning <span className="glyphicon glyphicon-menu-down"></span></div>
                    <div className="col-md-2" style={menuFontStyle}>Forms & Downloads <span className="glyphicon glyphicon-menu-down"></span></div>
                    <div className="col-md-1" style={menuFontStyle}>Self Care <span className="glyphicon glyphicon-menu-down"></span></div>
                    <div className="col-md-1" style={menuFontStyle}>More <span className="glyphicon glyphicon-menu-down"></span></div>
                    <div className="col-md-2" style={menuFontStyle}>Knowledge Center <span className="glyphicon glyphicon-menu-down"></span></div>
                    <div className="col-md-1" style={menuFontStyle}>Invest with Us <span className="glyphicon glyphicon-menu-down"></span></div>
                    <div className="col-md-1" style={iconStyle}>
                        <span className="glyphicon glyphicon-bell"></span>
                        <span className="glyphicon glyphicon-heart-empty"></span>
                        <span className="glyphicon glyphicon-search"></span>
                    </div>
                </div>
    }
}