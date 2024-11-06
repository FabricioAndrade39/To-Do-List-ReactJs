import TaskItem from './TaskItem';

const ItemsContainer = ({ taskList, removeFromList }) => {
  return (
    <div className='items-container'>
      {taskList.map((t) => (
        <TaskItem task={t} removeFromList={removeFromList} />
      ))}
    </div>
  );
};

export default ItemsContainer;
