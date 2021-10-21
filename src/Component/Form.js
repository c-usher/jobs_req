import React from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({
  setJobInput,
  setJob,
  job,
  description,
  setDescription,
  jobInput,
}) => {
  const inputJobHandler = (e) => {
    setJobInput(e.target.value);
  };

  const inputDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const addJobHandler = (e) => {
    e.preventDefault();
    setJob([
      ...job,
      {
        title: jobInput,
        description: description,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setJobInput("");
    setDescription("");
  };
  return (
    <form>
      <input
        type="text"
        className="job-input"
        onChange={inputJobHandler}
        value={jobInput}
      />
      <input
        type="text"
        className="description-input"
        onChange={inputDescriptionHandler}
        value={description}
      />
      <button className="submit-button" type="submit" onClick={addJobHandler}>
        Submit
      </button>
      <div className="sort">
        <select name="jobs" className="sort-jobs">
          <option value="done">Done</option>
          <option value="not-done">Not Done</option>
          <option value="all">All</option>
        </select>
      </div>
    </form>
  );
};
