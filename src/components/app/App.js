import React from 'react';
import './App.css';
import Header from "../header/Header";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import ItemList from "../ItemList/ItemList";
import {BrowserRouter, Route} from "react-router-dom";
import ModalAddItems from "../modalAddItems/ModalAddItems";

// import Searcher from "../searcher/Searcher";


class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

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
                        <Route exact path={'/Add'} render={() => <ModalAddItems/>}/>

                    </div>
                    <Sidebar/>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
