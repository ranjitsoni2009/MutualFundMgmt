import React from 'react';
import MenuComponent from './Menu.Component';
import BodyComponent from './Body.Component';

export default class MainComponent extends React.Component{
    render(){
        return  <div className="container-fluid">
                    <MenuComponent />
                    <BodyComponent />
                </div>
    }
}