'use babel';
import React from 'react';
import Toolbar from './toolbar.js';
import ToolbarIcon from './toolbaricon.js';
import ToolbarItem from './toolbaritem.js';
import MaterialButton from './materialbutton.js';

export default class App extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Toolbar title="Tytuł">
                    <ToolbarIcon inverted={true} rippleColor='#fff' image='app/resources/img/menu.png'></ToolbarIcon>
                    <ToolbarIcon inverted={true} rippleColor='#fff' position="right" image='app/resources/img/menu.png'></ToolbarIcon>
                    <ToolbarItem position="right"><MaterialButton rippleColor='#fff' type={1} style={{color: '#fff'}}>SIEMA</MaterialButton></ToolbarItem>
                </Toolbar>

            </div>
        );
    }
}
