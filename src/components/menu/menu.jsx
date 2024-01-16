import BuildTodoList from "../toDoList/toDoList";
import CollectTodoItem from "../toDoForm/toDoForm";

function Menu(){

    return (
        <section className='top_bar'>
            <div>Add A New Task</div>
            <div>View Tasks</div>
            <div>Update Tasks</div>
            <div>Delete Tasks</div>
        </section>
    );
};

export default Menu;