import React, { useEffect } from 'react';
import styles from './TaskList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';

import { fetchAsyncProfile } from '../login/loginSlice';
import { selectTasks, fetchAsyncGet } from './taskSlice';

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchTaskProfile = async () => {
            await dispatch(fetchAsyncGet());
            await dispatch(fetchAsyncProfile());
        }
        fetchTaskProfile();
    }, [dispatch]);

    return (
        <div>
            <ul className={styles.TaskList}>
                {tasks.map((task) => {
                    return (
                        <TaskItem key={task.id} task={task} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskList;