import React, { Component } from "react"
import { hot } from "react-hot-loader"
import "./App.css"
import { Provider } from "react-redux"
import  store  from "./store"
import {AddCounter} from "./features/counter/AddCounter"
import { ListCounter } from "./features/counter/ListCounter"
import Timer from "./features/counter/Timer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <h1> Tati's 30/30 </h1>
          <Timer/>
          <AddCounter>
            </AddCounter>
            <ListCounter></ListCounter>
        </Provider>
      </div>
    )
  }
}

export default hot(module)(App)
