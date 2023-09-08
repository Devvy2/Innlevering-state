import "./form.css";
import { useState } from "react";

export function Form() {
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setSubmissionMessage("Form has been submitted successfully");
  };

  const handleReset = () => {
    setSubmissionMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form component</h1>
      <p className="submissionMessage">{submissionMessage}</p>
      <div className="btn-form">
        <button className="form-submit" type="submit">
          Submit form
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}
