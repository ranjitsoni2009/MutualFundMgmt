import React from 'react';

const searchWellStyle = {
    'marginTop': '2%'
}

const searchTextBoxStyle = {
    'width': '50%',
    'textAlign': 'left',
    'margin': 'auto',
    'paddingLeft': '6px',
    'paddingRight': '6px',
    'paddingTop': '12px',
    'paddingBottom': '12px',
    'marginLeft': '25%'
}

const searchButtonStyle = {
    'backgroundColor': '#003300',
    'color' : '#ffffff',
    'paddingTop': '16px',
    'paddingBottom': '18px',
    'paddingLeft': '16px',
    'paddingRight': '18px'
}

export default class MFListDetails extends React.Component{
    render(){
        return  <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="well" style={searchWellStyle}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            Search Solution or Category to find the right fund
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <div className="well" style={{'backgroundColor' : 'white', 'width':'75%'}}>
                                                <input type="text" style={searchTextBoxStyle} placeholder="SIPNow, Saving, Equity, Advisors" />
                                                <span className="glyphicon glyphicon-search" style={searchButtonStyle}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            *Select Either Solution or Category. You can change the field basis your investment objective.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }
}