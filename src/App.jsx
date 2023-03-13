import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import "./App.css";
import CreateNewTask from "components/CreateNewTask";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <TodoResults />
      <CreateNewTask />
    </Provider>
  );
};

export default App;
