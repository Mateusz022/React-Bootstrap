import {Link} from "react-router-dom";
import { Component } from "react";
import "./Navigation.css";

export default class Navigation extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li><Link to="/information">Information</Link></li>
                    <li><Link to="/usedtechnologies">UsedTechnologies</Link></li>
                </ul>
            </nav>
        );
    }
}