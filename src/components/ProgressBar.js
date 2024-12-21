import React from 'react';
import { useSelector } from 'react-redux';
import './ProgressBar.css'; // Import the CSS file

const ProgressBar = () => {
    const habits = useSelector((state) => state.habit.habits);
    const completedCount = habits.filter((habit) => habit.completed).length;
    const totalCount = habits.length;
    const progress = totalCount ? (completedCount / totalCount) * 100 : 0;

    return (
        <div className="progress-bar-container">
            <h2>Progress</h2>
            <div className="progress-bar-background">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="progress-text">
                {completedCount} of {totalCount} habits completed
            </p>
        </div>
    );
};

export default ProgressBar;
