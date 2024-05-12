const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

{/*
what is slice action + reducer
slice is the collection of Redux reducer logic and actions
for a single feature in your app
In Slice we defined Action and Reducer in single file.
 
A function that accepts an initial state, an object full of reducer
 functions, and a "slice name", and
 automatically generates action creators and action types that 
 correspond to the reducers and state.
*/ }
const initialState ={
    users:JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[],
}

// inside reducers we define the action in redux toolkit
const Slice = createSlice({
    name:'userAddSlice',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const data ={
                id:nanoid(),
                name:action.payload,
            }
            state.users.push(data);
            let currentUser = JSON.stringify(current(state.users));
            // localStorage.setItem('users', currentUser);
            localStorage.setItem('users', currentUser);
            console.log(currentUser, 'currentUser');
        },
        removeUser: (state, action)=>{
            const data = state.users.filter((item)=>item.id!==action.payload);
            state.users = data;
            console.log(action);
        }
    }
});
export const {addUser, removeUser} =Slice.actions;
export default Slice.reducer;