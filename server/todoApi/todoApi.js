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
    return axios.put('/api/todo/:id', toDoUpdate);
};

export const toDoItemDelete = (deleteData) => {
    //Axios delete call
    return axios.put('/api/todo/:id', deleteData);
};