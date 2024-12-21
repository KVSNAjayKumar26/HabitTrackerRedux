export const ADD_HABIT = 'ADD_HABIT';
export const TOGGLE_HABIT = 'TOGGLE_HABIT';
export const REMOVE_HABIT = 'REMOVE_HABIT';

export const addHabit = (habit) => ({
    type: ADD_HABIT,
    payload: habit,
});

export const toggleHabit = (id) => ({
    type: TOGGLE_HABIT,
    payload: id,
});

export const removeHabit = (id) => ({
    type:REMOVE_HABIT,
    payload: id,
});