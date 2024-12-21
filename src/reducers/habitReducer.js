import { ADD_HABIT, REMOVE_HABIT, TOGGLE_HABIT } from "../actions/habitActions";


const initialState = {
    habits: [],
};

const habitReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HABIT:
            return {
                ...state,
                habits: [...state.habits, action.payload],
            };
        case TOGGLE_HABIT:
            return {
                ...state,
                habits: state.habits.map(habit => 
                    habit.id === action.payload ? { ...habit, completed: !habit.completed } : habit
                ),
            };
        case REMOVE_HABIT:
            return {
                ...state,
                habits: state.habits.filter(habit => habit.id !== action.payload),
            };
        default:
            return state;
    }
};

export default habitReducer;