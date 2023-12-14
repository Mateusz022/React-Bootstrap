import { Component } from "react";

export default class UsedTechnologies extends Component {
    render(){
        return(
            <div className="text-center"  style={{ letterSpacing: '2px'}}>
                <p>Technologie użyte w tej aplikacji to : Html, CSS 
                    (framework bootrstrap) oraz React
                </p>
            </div>
        )
    }
}