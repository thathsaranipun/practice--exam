import logo from './logo.svg';
import './App.css';
import TargetList from './components/TargetList';
import TargetForm from './components/TargetForm';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TargetList/>
      <TargetForm/>
    </div>
  );
}

export default App;
