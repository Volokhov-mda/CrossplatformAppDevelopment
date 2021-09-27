import { useEffect, useState } from "react";
import styles from "./TodoAddTask.module.css";

function TodoAddTask({addNewTask}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAddButton = () => {
        if (name === "") {
            alert("Task name can't be empty")
            return;
        }

        addNewTask(name, description);

        setName("");
        setDescription("");

        document.getElementById("input_name").value = "";
        document.getElementById("desc_name").value = "";

    }

    const handleTextInput = (e, setState) => {
        setState(e.target.value);
    }

    useEffect(() => {
        console.log(name);
    }, [name]);

    return (
        <div className={styles.add_container}>
            <input id="input_name" className={styles.text_input} type="text" placeholder="Задача" onChange={(e) => handleTextInput(e, setName)} />
            <input id="desc_name" className={styles.text_input} type="text" placeholder="Описание" onChange={(e) => handleTextInput(e, setDescription)} />
            <button id={styles.add_button} onClick={handleAddButton}>+</button>
        </div>
    );
}

export default TodoAddTask;