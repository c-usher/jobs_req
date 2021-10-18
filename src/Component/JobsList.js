import React from "react";

export const JobsList = ({ jobInput, description }) => {
  return (
    <div className="jobs-container">
      <ul className="jobs-list">
        <li>
          Title: {jobInput} Description:{description}
        </li>
        <li>Test Item Two</li>
        <li>Test Item Three</li>
        <li>Test Item Four</li>
      </ul>
    </div>
  );
};
