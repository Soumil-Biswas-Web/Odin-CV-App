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

  function removeExpTab(e, indexToRemove) {
    e.preventDefault();
    console.log(indexToRemove);
    setExpTabs((prevTabs) =>
      prevTabs.filter((_, index) => index !== indexToRemove)
    );
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

  const removeSkillTab = (e, indexToRemove) => {
    e.preventDefault();
    setSkillTabs((prevTabs) =>
      prevTabs.filter((_, index) => index !== indexToRemove)
    );
  }  

  return (
    <div className="Exp Form">
      <form id="exp_form">
        {expTabs.map((tab, index) => (
          <div key={index} className="Form FormBloc">
            <Form.AddTextInput
              name="company"
              label="Company Name"
              placeholder="Enter Company Name"
            
            />
            <Form.AddTextInput
              name="post"
              label="Employment Position"
              placeholder="Director"
            
            />
            <div className="paired">
              <Form.AddDateInput name="startDate" label="From" />
              <Form.AddDateInput name="endDate" label="To" />
            </div>
            <Form.AddTextInput
              name="details"
              label="Additional Details"
              placeholder="Enter deatils..."
            
            />

            <div className="skills">
              {skillTabs.map((item, index) => (
                <div key={index}>
                  <Form.AddTextInput
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    isRequired={true}                
                  />
                  <button onClick={(e) => removeSkillTab(e, index)} className="remove">-</button>     
                </div>
              ))}                   
              <button onClick={addSkillTab} className="add_skill">
                Add Skill Used
              </button>
            </div>
            <button onClick={(e) => removeExpTab(e, index)} className="close_button">
              Cancel
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
        </div>
      </form>
    </div>
  );
}
