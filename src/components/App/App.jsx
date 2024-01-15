import CollectTodoItem from '../toDoForm/toDoForm';
import BuildTodoList from '../toDoList/toDoList';

function App () {

  function refreshPage(){
    const getTodo = getToDoList();
    getTodo
    .then((response) => {
        //console.log(response);
        setTodoList(response.data)
    })
    .catch((error) => {
        console.error(error);
        res.sendStatus(500);
    });
  };

  return (
    <div>
      <h1>TO DO APP</h1>
      <CollectTodoItem todoRefreshCallback={refreshPage}/>
      <BuildTodoList />
    </div>
  );
x
};

export default App;
