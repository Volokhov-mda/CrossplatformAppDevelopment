import clsx from "clsx";

import styles from "./TodoTask.module.css";

function TodoTask({id, name, description, isCompleted, onClick}) {
    return (
        <div className={clsx(styles.task_container, isCompleted && styles.completed)} onClick={onClick} role="button">
            <div className={styles.task_header}>{name}</div>
            <div className={styles.task_description}>{description}</div>
        </div>
    );
}

export default TodoTask;