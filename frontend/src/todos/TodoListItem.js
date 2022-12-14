const TodoListItem = ({ todo, onRemovePressed, markTodoCompleted }) => {
  return (
    <div className='card w-100 lg:mx-20 mx-10 my-5 bg-primary text-primary-content'>
      <div className='card-body'>
        <h2 className='card-title'>{todo.title}</h2>

        <div className='card-actions justify-end'>
          {!todo.isCompleted && (
            <button
              className='btn'
              onClick={() => markTodoCompleted(todo.title)}
            >
              Mark as completed
            </button>
          )}
          <button className='btn' onClick={() => onRemovePressed(todo.title)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoListItem;
