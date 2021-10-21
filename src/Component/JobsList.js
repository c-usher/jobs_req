import React from "react";
import { Job } from "./Job";

export const JobsList = ({ jobInput, description }) => {
  return (
    <div className="jobs-container">
      <ul className="jobs-list">
        <Job />
      </ul>
    </div>
  );
};
