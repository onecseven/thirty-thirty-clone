import React, { Component } from "react"
import { hot } from "react-hot-loader"
import "./App.css"
import { Provider } from "react-redux"
import  store  from "./store"
import {AddCounter} from "./components/AddCounter"
import { ListCounter } from "./components/ListCounter"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h1> Hello, World!!! </h1>
          <AddCounter>
            </AddCounter>
            <ListCounter></ListCounter>
        </Provider>
      </div>
    )
  }
}

export default hot(module)(App)
