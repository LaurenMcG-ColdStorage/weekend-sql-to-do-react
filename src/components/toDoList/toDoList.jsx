import { toDoItemDelete, changeToDoList } from '../../../server/todoApi/todoApi';
import './toDoList.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'

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
            <Grid container spacing={2} className='TodoFormat' alignItems='center'>
            {todoList.map(listData => {
                return(
                <Grid item key={listData.id} xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{borderRadius: '15px', margin: '5px', padding: '5px'}} 
                         className={`${listData.complete ? 'TodoItem complete' : 'TodoItem incomplete'}`}>
                        <Grid container className='itemSpan'>
                            <Grid item xs={3} sm={4} md={4} lg={5}>{listData.note}</Grid>
                            <Grid item xs={2} sm={2} md={2} lg={1}>{listData.priority}</Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} className='buttonSpan'>
                                <Button className='button' size='small' variant='contained' color={`${listData.complete ? 'success' : 'primary'}`} onClick={() => CompleteTodo(listData.id)}>Complete</Button>
                            </Grid>
                            <Grid item xs={2} sm={2} md={2} lg={2} className='buttonSpan'>
                                <Button className='button' size='small' variant='contained' onClick={() => DeleteTodo(listData.id)}>Delete</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                );
            })}
            </Grid>
        </div>
    );
};

export default BuildTodoList;