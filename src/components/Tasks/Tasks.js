import {Component} from "react";
import TaskItem from "../TaskItem/TaskItem";

export default class Tasks extends Component {
    constructor(props) {
        super(props);

    }

    getTaskItems = () => {
        return this.props.taskItems.map(item => <TaskItem key={item.id} {...item}/>);
    }
    render() {
        return(
            <div className="container">
                <div className="my-3 p-3 bg-body rounded shadow-sm"> 
                    {this.getTaskItems()}
                </div>
            </div>
        )
    }
}