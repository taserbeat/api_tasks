import React from 'react';
import styles from './App.module.css';

import { FaSignInAlt } from 'react-icons/fa';
import TaskList from './features/task/TaskList';

function App() {
  const logout = () => {
    localStorage.removeItem('localJWT');
    window.location.href = '/';
  }

  return (
    <div className={styles.containerTasks}>
      <div className={styles.appTasks}>
        <button onClick={logout} className={styles.signBtn}>
          <FaSignInAlt />
        </button>
        <TaskList />
      </div>

      <div className={styles.appDetails}></div>
    </div>
  );
}

export default App;
