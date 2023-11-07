import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { Provider } from 'react-redux';
//import { createStore} from 'redux';
import { StoreProvider } from './state/Context';
import { RootStore } from './state/RootStore';

// const originState = 100;

// function calculator(state = originState,action){
//   if(action.type === '증가'){
//     state++;
//     return state
//   }else if(action.type === '감소'){
//     state--;
//     return state
//   }else{
//     return state
//   }
// }

// let store = createStore(calculator);
const rootStore = new RootStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <StoreProvider value={rootStore}>
      <App />
      </StoreProvider>
    {/* </Provider> */}
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
