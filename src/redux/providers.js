"use client"
import { store } from "./store";
const {Provider} = require("react-redux");
export function Providers({children}){
    return <Provider store={store}>
        {children}
    </Provider>
}
//interview question
// redux data flow is unidirectional
// view ---- dispatch ---> action ----> reducers ----> store --> view