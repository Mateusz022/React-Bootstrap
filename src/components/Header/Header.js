import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = { newTaskName: "" };
    }

    TEXT_HEADER_SAVE = "Save";

    updateNewTask = (event) => {
        this.setState({ newTaskName: event.target.value });
    }

    saveNewTask = () => {
        const users = ["Ania", "Roman", "Kasia", "Marek"];
        const colors = ["success", "secondary", "primary", "danger", "warning", "dark"];

       
        if (/^task \d+$/i.test(this.state.newTaskName)) {
            this.props.createNewTaskCallback({
                newTaskName: this.state.newTaskName,
                user: users[Math.floor(Math.random() * users.length)],
                color: colors[Math.floor(Math.random() * colors.length)]
            });
            this.setState({ newTaskName: "" });
        } else {
           
            alert("Error Incorrect Value. Try something like: Task 1, Task 2, ...");
        }
    }

    render() {
        return (
            <div className="container">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text bg-light">Task: </span>
                        <input
                            type="text"
                            id="task-name"
                            placeholder="Task Information"
                            value={this.state.newTaskName}
                            onChange={this.updateNewTask}
                            className="form-control"
                        />
                        <button
                            className="btn btn-success btn-sm"
                            id="button-save"
                            type="button"
                            onClick={this.saveNewTask}
                        >
                            {this.TEXT_HEADER_SAVE}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
