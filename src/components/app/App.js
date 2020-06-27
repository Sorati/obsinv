import React from 'react';
import './App.css';
import Header from "../header/header";
import StartPage from "../start-page/start-page";
import PropertiesBar from "../properties-bar/properties-bar";
import ItemContainer from "../item-container/item-container";
import {BrowserRouter, Route} from "react-router-dom";
import ModalContainer from "../modal-container/modal-container";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/properties-bar-reducer";

// import Search from "../search/Search";


class App extends React.PureComponent {
    render() {

        return (
            <div className="App">
                <BrowserRouter>

                    <div className="content">
                        <Header/>
                        <Route exact path={'/'} render={() => <StartPage/>}/>
                        <Route exact path={'/StartPage'} render={() => <StartPage/>}/>
                        <Route exact path={'/AllElements'} render={() => <ItemContainer date={this.props}/>}/>
                        <Route exact path={'/Add'} render={() => <ModalContainer date={this.props}/>}/>

                    </div>
                    {/*<PropertiesBar/>*/}
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
});

const mapDispatchToProps = (dispatch) => ({
    onShowSidebar() {
        dispatch(ActionCreator.showSidebar());
    },
    onHideSidebar() {
        dispatch(ActionCreator.hideSidebar());
    }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
