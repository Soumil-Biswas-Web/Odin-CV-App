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

  return (
    <div className="Edu Form">
      <form id="edu_form">
        {eduTabs.map((tab, index) => (
          <div key={index} className="eduFormBloc">
            <div className="paired">
              <Form.AddDropDownMenu
                name="eduLvl"
                label="Education Level"
                placeholder="Undergraduate"
                inputKey="1"
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
                inputKey="2"
              />
            </div>
            <div className="paired">
              <Form.AddDateInput name="startDate" label="From" inputKey="3" />
              <Form.AddDateInput name="endDate" label="To" inputKey="4" />
            </div>
            <div className="paired">
              <Form.AddDropDownMenu
                name="gradeType"
                label="Grade Type/ Scale"
                placeholder="..."
                inputKey="5"
                options={["CGPA", "Grade", "Number"]}
              />
              <Form.AddTextInput
                name="grade"
                label="Your grade"
                placeholder="8.0"
                inputKey="6"
              />
            </div>
          </div>
        ))}
        <button onClick={addEduTab} className="add_Edu">
          Add Education
        </button>

        <div className="buttons">
          <button onClick={saveEduInfo} className="submit_button" type="submit">
            Save
          </button>
          <button className="close_button" formAction="close">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
