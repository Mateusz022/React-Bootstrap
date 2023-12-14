//import logo from './logo.svg';
//import './App.css';

import {Component} from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Footer from "./components/Footer/Footer";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          tasks: [
            {id: 0, name: "Task #1", user: "Ania", status:"To Do", color:"danger"},
            {id: 1, name: "Task #2", user: "Basia", status:"Done", color:"success"},
            {id: 2, name: "Task #3", user: "Franciszek", status:"In Progress", color:"warning"},
          ]
        }
    }

    createNewTask = (task) => {
      const newId = this.state.tasks.length
      const availableStatuses = ["To Do", "In Progress", "Done", "No info"];

      const statusOptions = [
        { status: "To Do", color: "danger" },
        { status: "In Progress", color: "warning" },
        { status: "Done", color: "success" },
        { status: "No Info", color: "dark" },
      ];
      
      
      const randomIndex = Math.floor(Math.random() * statusOptions.length);
      this.setState({
        tasks: [
          ...this.state.tasks,
          {id: newId, 
          name: task.newTaskName, 
          user: task.user,
          status: statusOptions[randomIndex].status, 
          color: statusOptions[randomIndex].color, 
          }
        ]
      });
    }
    render() {
        return(
            <div className="App">
                <div>
                    <Header createNewTaskCallback={this.createNewTask}></Header>
                    <Tasks taskItems={this.state.tasks}></Tasks>
                    
                </div>
            </div>
        )
    }
}

export default App;
