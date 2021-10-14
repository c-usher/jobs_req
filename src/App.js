import "./App.css";
import { Form } from "./Component/Form";
import { JobsList } from "./Component/JobsList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Job Requests</h1>
      </header>
      <Form />
      <JobsList />
    </div>
  );
}

export default App;
