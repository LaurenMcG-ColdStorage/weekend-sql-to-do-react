import axios from 'axios';

export const getToDoList = () => {
    //Here we make an axios get call
    return axios.get('/api/todo');
};

export const postToDoList = (todoData) => {
    //This is our axios post call
    return axios.post('/api/todo', todoData);
};

export const changeToDoList = (toDoUpdate) => {
    //Axios put call
    return axios.put(`/api/todo/${toDoUpdate}`);
};

export const toDoItemDelete = (todoDelete) => {
    //Axios delete call
    return axios.delete(`/api/todo/${todoDelete}`);
};