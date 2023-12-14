import { Component } from "react";

export default class Information extends Component {
    render(){
        return(
            <div className="text-center"  style={{ letterSpacing: '2px'}}>
                <p>Aplikacja dodaje zadania użytkownikom, 
                    wraz ze statusem czy dane zadanie zostało
                    zrealizowane czy nie
                </p>
            </div>
        )
    }
}