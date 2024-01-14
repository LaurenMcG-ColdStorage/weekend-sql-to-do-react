import axios from 'axios';

export const getToDoList = () => {
    //Here we make an axios get call
    return axios.get('/api/todo');
};

export const postToDoList = (todoData) => {
    //This is our axios post call
    return axios.post('/api/todo', todoData);
};