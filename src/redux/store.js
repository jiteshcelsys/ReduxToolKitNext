const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './slice';
import todosReducer from './todoSlice';


export const store = configureStore({
    reducer:{
        userData: userReducer,
        todosData: todosReducer,
    }
});
