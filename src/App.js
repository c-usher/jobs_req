import React, { useState } from "react";
import "./App.css";
import { Form } from "./Component/Form";
import { JobsList } from "./Component/JobsList";

function App() {
  const [jobInput, setJobInput] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Job Requests</h1>
      </header>
      <Form
        jobInput={jobInput}
        setJobInput={setJobInput}
        job={job}
        setJob={setJob}
        description={description}
        setDescription={setDescription}
      />
      <JobsList jobInput={jobInput} description={description} />
    </div>
  );
}

export default App;
