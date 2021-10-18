import React from "react";

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
        id: Math.floor(Math.random() * 1000),
      },
    ]);
  };
  return (
    <form>
      <input type="text" className="job-input" onChange={inputJobHandler} />
      <input
        type="text"
        className="description-input"
        onChange={inputDescriptionHandler}
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
