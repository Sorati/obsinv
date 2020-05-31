import React from 'react';
import './App.css';
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import ItemList from "../ItemList/ItemList";
import {BrowserRouter, Route} from "react-router-dom";
import ModalAddItems from "../modalAddItems/ModalAddItems";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";

// import Searcher from "../searcher/Searcher";


class App extends React.PureComponent {
    render() {
        // console.log(this.props);

        return (
            <div className="App">
                <BrowserRouter>

                    <div className="content">
                        <Header/>
                        <Route exact path={'/'} render={() => <Main/>}/>
                        <Route exact path={'/Main'} render={() => <Main/>}/>
                        <Route exact path={'/AllElements'} render={() => <ItemList date={this.props}/>}/>
                        <Route exact path={'/Add'} render={() => <ModalAddItems date={this.props}/>}/>

                    </div>
                    <Sidebar/>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sidebar: state.sidebar,
});

const mapDispatchToProps = (dispatch) => ({
    onShowSidebar() {dispatch(ActionCreator.showSidebar())},
    onHideSidebar() {dispatch(ActionCreator.hideSidebar())}
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
