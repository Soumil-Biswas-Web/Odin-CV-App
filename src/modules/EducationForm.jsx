import "../styles.css";
import "./styles/form.css";
import * as Form from "./CreateForm";
import { useState } from "react";

export default function EduForm({ saveEduInfo = (e) => {} }) {
  const [eduTabs, setEduTabs] = useState([]);

  function addEduTab(e) {
    e.preventDefault();
    setEduTabs((t) => [...t, ["eduTab"]]);
  }

  function removeExpTab(e, indexToRemove) {
    e.preventDefault();
    console.log(indexToRemove);
    setEduTabs((prevTabs) =>
      prevTabs.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <div className="Edu Form">
      <form id="edu_form">
        {eduTabs.map((tab, index) => (
          <div key={index} className="FormBloc Form">
            <div className="paired">
              <Form.AddDropDownMenu
                name="eduLvl"
                label="Education Level"
                placeholder="Undergraduate"
                options={[
                  "Undergraduate",
                  "Post-Graduate",
                  "Highschool",
                  "Diploma",
                ]}
              />
              <Form.AddTextInput
                name="edu_inst"
                label="Education Institution"
                placeholder="Enter Institution Name"
              />
            </div>
            <div className="paired">
              <Form.AddDateInput name="startDate" label="From" />
              <Form.AddDateInput name="endDate" label="To" />
            </div>
            <div className="paired">
              <Form.AddDropDownMenu
                name="gradeType"
                label="Grade Type/ Scale"
                placeholder="..."
                options={["CGPA", "Grade", "Number"]}
              />
              <Form.AddTextInput
                name="grade"
                label="Your grade"
                placeholder="8.0"
              />
            </div>
            <button onClick={(e) => removeExpTab(e, index)} className="close_button">
              Cancel
            </button>            
          </div>
        ))}
        <button onClick={addEduTab} className="add_Edu">
          Add Education
        </button>

        <div className="buttons">
          <button onClick={saveEduInfo} className="submit_button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
