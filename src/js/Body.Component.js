import React from 'react';

const riskNoteStyle = {
    'marginLeft': '30%'
}

const fundNavStyle = {
    'fontSize': '28px',
    'marginTop': '3%',
    'marginLeft': '38%'
}

const wellDivStyle = {
    'height': '150px'
}

const arrowLeftSliderStyle = {
    'width' : '25%',
    'marginTop': '20%'
}

const arrowRightSliderStyle = {
    'width' : '25%',
    'marginTop': '20%',
    'float':'right'
}

const buttonStyle = {
    'width': '10%',
    'height': '50px',
    'marginLeft': '45%'
}

const mutualFundsRorStyle = {
    'marginTop': '5%'
}

export default class BodyComponent extends React.Component{
    render(){
        return <div className="row">
            <div className="col-md-12">

                <div className="row">
                    <div className="col-md-12">
                        <p style={riskNoteStyle}><strong>Mutual Fund Investments are subject to market risks, read all scheme related document carefully.</strong></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p style={fundNavStyle}><strong>Fund's NAV</strong> As of 17.01.2019</p>
                    </div>
                </div>

                <div className="row" style={mutualFundsRorStyle}>
                    <div className="col-md-2">
                        <div className="well" style={arrowLeftSliderStyle}>
                            <span className="glyphicon glyphicon-menu-left"></span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="well" style={wellDivStyle}>
                            <h3>Div Box</h3>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="well" style={wellDivStyle}>
                            <h3>Div Box</h3>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="well" style={wellDivStyle}>
                            <h3>Div Box</h3>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="well" style={wellDivStyle}>
                            <h3>Div Box</h3>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="well" style={arrowRightSliderStyle}>
                            <span className="glyphicon glyphicon-menu-right"></span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-success" style={buttonStyle}>VIEW ALL FUNDS</button>
                    </div>
                </div>
            </div>
        </div>
    }
}