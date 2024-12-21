import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addHabit, toggleHabit, removeHabit } from '../actions/habitActions';
import './HabitTracker.css'; // Importing the CSS file

const HabitTracker = () => {
    const [habitName, setHabitName] = useState('');
    const habits = useSelector(state => state.habit.habits);
    const dispatch = useDispatch();

    const handleAddHabit = () => {
        if (habitName) {
            const newHabit = { id: Date.now(), name: habitName, completed: false };
            dispatch(addHabit(newHabit));
            setHabitName('');
        }
    };

    return (
        <div className="habit-tracker-container">
            <h1>Habit Tracker</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                    placeholder="Enter a new habit"
                    className="habit-input"
                />
                <button onClick={handleAddHabit} className="add-button">
                    Add Habit
                </button>
            </div>
            <ul className="habit-list">
                {habits.map(habit => (
                    <li key={habit.id} className="habit-item">
                        <span
                            className={`habit-name ${
                                habit.completed ? 'completed' : ''
                            }`}
                        >
                            {habit.name}
                        </span>
                        <div className="habit-buttons">
                            <button
                                onClick={() => dispatch(toggleHabit(habit.id))}
                                className="toggle-button"
                            >
                                {habit.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button
                                onClick={() => dispatch(removeHabit(habit.id))}
                                className="remove-button"
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitTracker;
