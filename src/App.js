// import logo from './logo.svg';
import './App.css';
import Accordion from './accordian';

function App() {
  return (
    <div className="App">
      <Accordion title="Section 1" content="Content for Section 1" />
      <Accordion title="Section 2" content="Content for Section 2" />
      <Accordion title="Section 3" content="Content for Section 3" />
    </div>
  );
}

export default App;
