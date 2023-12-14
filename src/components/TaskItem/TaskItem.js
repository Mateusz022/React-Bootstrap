import {Component} from "react";
import React, { useState } from "react";
import './Taskitem.css';


export default function TaskItem(props) {
    const [isClosed, setIsClosed] = useState(false);

    const handleTaskClose = () => {
      setIsClosed(true);
    };
  
    
    if (isClosed) {
      return null;
    }
    return (
        <div className="d-flex pt-2 border-bottom ">
            <p className="flex-grow-1 mb-0 pb-3 mx-2 small lh-sm text-start">
                <strong className="d-block my-1">
                    <span className={"badge bg-" + props.color}>{props.status}
                    </span>
                    <span className="mx-1">@{props.user}</span>
                </strong>
                {props.name}
            </p>
            <div className="m-1">
                <button className="btn btn-sm btn-outline-danger"  onClick={handleTaskClose}>Close</button>
            </div>
        </div>
    );
}