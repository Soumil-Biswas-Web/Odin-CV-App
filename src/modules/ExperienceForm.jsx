import "../styles.css";
import "./styles/form.css";
import * as Form from "./CreateForm";
import { useState } from "react";

export default function ExpForm({ saveExpInfo = (e) => {} }) {
  const [expTabs, setExpTabs] = useState([]);

  function addExpTab(e) {
    e.preventDefault();
    setExpTabs((t) => [...t, []]);
  }

  const [skillTabs, setSkillTabs] = useState([]);

  function addSkillTab(e) {
    e.preventDefault();
    setSkillTabs((t) => [
      ...t,
      {
        name: "skill",
        label: "Skill",
        placeholder: "Enter Skill Used",
      },
    ]);
  }

  return (
    <div className="Exp Form">
      <form id="exp_form">
        {expTabs.map((tab, index) => (
          <div key={index}>
            <Form.AddTextInput
              name="company"
              label="Company Name"
              placeholder="Enter Company Name"
              inputKey="1"
            />
            <Form.AddTextInput
              name="post"
              label="Employment Position"
              placeholder="Director"
              inputKey="2"
            />
            <div className="paired">
              <Form.AddDateInput name="startDate" label="From" inputKey="3" />
              <Form.AddDateInput name="endDate" label="To" inputKey="4" />
            </div>
            <Form.AddTextInput
              name="details"
              label="Additional Details"
              placeholder="Enter deatils..."
              inputKey="5"
            />
            <Form.AddTextInputArray items={skillTabs} />
            <button onClick={addSkillTab} className="add_skill">
              Add Skill Used
            </button>
          </div>
        ))}
        <button onClick={addExpTab} className="add_exp">
          Add Experience
        </button>

        <div className="buttons">
          <button onClick={saveExpInfo} className="submit_button" type="submit">
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
