import './App.css';
import DisplayContainer from './components/DisplayContainer';
import FormContainer from './components/FormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header main">

        <FormContainer/>

        <DisplayContainer/>
      </header>
    </div>
  );
}

export default App;
