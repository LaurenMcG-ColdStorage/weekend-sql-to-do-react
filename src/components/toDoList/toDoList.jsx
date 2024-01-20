import { toDoItemDelete, changeToDoList } from '../../../server/todoApi/todoApi';
import './toDoList.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function BuildTodoList({todoList, RefreshTodoCallback}){

   function DeleteTodo(id){
        console.log('Record to delete: ', id);
        toDoItemDelete(id)
        .then((response) => {
            RefreshTodoCallback();
        })
        .catch((error) => {
            console.error(error);
        })
    };

    function CompleteTodo(id){
        console.log('Record to complete: ', id);
        changeToDoList(id)
        .then((response) => {
            RefreshTodoCallback();
        })
        .catch((error) => {
            console.error(error)
        })
    }
    
    return (
        <div>
            <Grid container spacing={2} rowSpacing={1} className='TodoFormat'>
                <Grid item xs={4} md={4}rowSpacing={2}>What Needs Done?</Grid>
                <Grid item xs={3} md={3}rowSpacing={2}>When is it Due?</Grid>
            </Grid>
            <Grid container spacing={2}>
            {todoList.map(listData => {
                <Grid item key={listData.id} xs={4} sm={6} md={8} lg={10}>
                    <Box sx={{borderRadius: '15px', margin: '20px', padding: '10px'}} 
                         className={`${listData.complete ? 'TodoItem complete' : 'TodoItem incomplete'}`}>
                        <p>{listData.note}</p>
                        <p>{listData.priority}</p>
                        <Button variant='contained' onClick={() => CompleteTodo(listData.id)}>Complete</Button>
                        <Button variant='contained' onClick={() => DeleteTodo(listData.id)}>Delete</Button>
                    </Box>
                </Grid>
            })}
            </Grid>
        </div>
    );
};

export default BuildTodoList;