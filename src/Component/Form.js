import React, { useState } from "react";

export const Form = () => {
  const [jobInput, setJobInput] = useState("");

  const inputJobHandler = (e) => {
    console.log(e);
  };
  return (
    <form>
      <input type="text" className="job-input" />
      <button className="submit-button" type="submit">
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
