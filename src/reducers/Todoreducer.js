export const TodoReducer = (state = { todos: [{task:"my task",completed:false}] }, action = {}) => {
    switch (action.type) {
      case "Add_todo":
            //added a comment for test
        console.log(action);
        
        return {
          ...state,
          todos: [...state.todos, {task:action.payload,completed:false}],
        };
      case "Complete_todo":
        return {
          todos : [...state.todos]
        }
      default:
        return state;
    }
  };
const initialTheme = localStorage.getItem("theme") || "light"

export const ThemeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case "GET_THEME":
      return state; // Return current state (theme)
    case "SET_THEME":
      localStorage.setItem("theme", action.payload); // Save theme to localStorage
      return action.payload; // Update state with new theme
    default:
      return state; // Return current state for unrecognized actions
  }
};

  
