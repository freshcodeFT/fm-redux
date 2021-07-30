import Counter from './components/Counter';
import HeroForm from './components/HeroForm';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App (props) {
  return (
    <div>
      <Counter />
      <TaskForm />
      <TaskList />
      <HeroForm />
    </div>
  );
}

export default App;
