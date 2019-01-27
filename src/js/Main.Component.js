import React from 'react';
import MenuComponent from './Menu.Component';
import MFList from './MFList.Component';
import MFListDetails from './MFListDetails.component';

export default class MainComponent extends React.Component{
    render(){
        return  <div className="container-fluid">
                    <MenuComponent />
                    <MFListDetails></MFListDetails>
                </div>
    }
}