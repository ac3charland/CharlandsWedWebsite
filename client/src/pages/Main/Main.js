import React, { Component } from "react";
import API from "../../utils/API"
import "./Main.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


class Main extends Component {

    state = {}

    render(){
        return (
            <div>
                <h1>HELLO MATRIMONY</h1>
                <h2>June 6th, 2020</h2>
            </div>
        )
    }
}

export default Main;