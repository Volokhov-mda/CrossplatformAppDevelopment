import React from "react";
import TodoTask from "components/TodoTask/TodoTask";
import TodoAddTask from "components/TodoAddTask/TodoAddTask";

import styles from "./TodoList.module.css";

class TodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 0,
                name: 'Погулять в парке',
                description: 'Парк который в центре города',
                completed: false
            },
            {
                id: 1,
                name: 'Выгулять собаку',
                description: 'Собака которая дома живет',
                completed: false
            },
            {
                id: 2,
                name: 'Поесть еду в обед',
                description: '13:00. Еда которая в холодильнике, разогреть',
                completed: false
            },
            {
                id: 3,
                name: 'Посидеть в ноутбуке 4 часа подряд',
                description: 'Ноутбук который в комнате греется',
                completed: true
            },
            {
                id: 4,
                name: 'Лечь спать на кровать',
                description: 'Кровать которая в спальне',
                completed: true
            },   
        ]
    }

    toggleCompleted = (id) => {
        let newTasks = [...this.state.tasks];
        newTasks[id].completed = !newTasks[id].completed;

        this.setState({
            tasks: newTasks
        });
    }

    addNewTask = (taskName, taskDescription) => {
        let newTask = {
            id: this.state.tasks.length,
            name: taskName,
            description: taskDescription,
            completed: false
        }

        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

    render() {
        const tasks = this.state.tasks.map(task => 
                <TodoTask key={task.id} name={task.name} description={task.description} isCompleted={this.state.tasks[task.id].completed} onClick={() => { this.toggleCompleted(task.id)} } />
            );

        return (
            <div className={styles.todo_list_container}>
                <div className={styles.todo_header}>Todo List</div>
                <div className={styles.todo_list}>
                    {tasks}
                </div>

                <TodoAddTask addNewTask={this.addNewTask} />
            </div>
        );
    }
}

export default TodoList;