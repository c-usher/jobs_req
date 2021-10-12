import React from "react";

export const Form = () => {
  return (
    <form>
      <input type="text" class="job-input" />
      <button class="submit-button" type="submit">
        Submit
      </button>
      <div class="sort">
        <select name="jobs" class="sort-jobs">
          <option value="done">Done</option>
          <option value="not-done">Not Done</option>
          <option value="all">All</option>
        </select>
      </div>
    </form>
  );
};
