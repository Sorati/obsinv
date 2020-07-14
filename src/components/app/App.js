import React from 'react';
import './App.css';
import Header from "../header/header";
import StartPage from "../start-page/start-page";
import PropertiesBarContainer from "../properties-bar/properties-bar-container";
import ItemContainer from "../item-container/item-container";
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "../modal-container/modal-container";
// import TestBtnContainer from "../test-btn/test-btn-container";
import {connect} from "react-redux";

class App extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    {/*<TestBtnContainer/>*/}
                    <div className="content">
                        <Header/>
                        <Route exact path={'/'} render={() => <StartPage/>}/>
                        <Route exact path={'/StartPage'} render={() => <StartPage/>}/>
                        <Route exact path={'/AllElements'} render={() => <ItemContainer date={this.props}/>}/>
                        <Route exact path={'/Add'} render={() => <ModalContainer date={this.props}/>}/>
                    </div>
                    {this.props.propertiesBar && <PropertiesBarContainer/>}
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    propertiesBar: state.propertiesBar.isShow,
});

export {App};
export default connect(mapStateToProps)(App);