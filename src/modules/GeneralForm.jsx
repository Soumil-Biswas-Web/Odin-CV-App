import "../styles.css";
import "./styles/form.css";
import * as Form from "./CreateForm";
import { useState } from "react";
// import ResumePage from "./ResumePage";

export default function GenForm({ saveGenInfo = (e) => {} }) {
  const [langTabs, setLangTabs] = useState([]);

  function addLangTab(e) {
    e.preventDefault();
    setLangTabs((t) => [
      ...t,
      {
        name: "lang " + (langTabs.length + 1),
        label: "Enter Language",
        placeholder: "English",
        inputKey: "lang " + (langTabs.length + 1),
      },
    ]);
  }

  const [linkTabs, setLinkTabs] = useState([]);

  function addLinkTab(e) {
    e.preventDefault();
    setLinkTabs((t) => [
      ...t,
      {
        name: "link " + (linkTabs.length + 1),
        label: "Enter Link",
        placeholder: "www.linkedin.com",
        inputKey: "link " + (linkTabs.length + 1),
      },
    ]);
  }

  return (
    <div className="Gen Form">
      <form id="gen_form">
        {/* <Form.AddTextInputArray items={formInputs} /> */}
        <div className="paired">
          <Form.AddTextInput
            name="first_name"
            label="First Name"
            placeholder="John"
            inputKey="1"
          />
          <Form.AddTextInput
            name="last_name"
            label="Last Name"
            placeholder="Doe"
            inputKey="2"
          />
        </div>
        <Form.AddTextInput
          name="address"
          label="Address"
          placeholder="Your, Address"
          inputKey="3"
        />
        <Form.AddEmailInput
          name="email"
          label="Email"
          placeholder="johndoe@example.com"
          inputKey="4"
        />
        <div className="paired">
          <Form.AddDropDownMenu
            name="phoneExt"
            label="Region"
            placeholder="+00"
            inputKey="5"
            options={["India (+91)", "USA (+01)"]}
          />
          <Form.AddNumberInput
            name="phoneNo"
            label="Phone Number"
            placeholder="+00 12345 67890"
            inputKey="6"
          />
        </div>

        <div className="languages">
          <Form.AddTextInputArray items={langTabs} />
          <button onClick={addLangTab} className="add_Lnag">
            Add languages
          </button>
        </div>

        <div className="links">
          <Form.AddTextInputArray items={linkTabs} />
          <button onClick={addLinkTab} className="add_Link">
            Add Personal Links
          </button>
        </div>

        <div className="buttons">
          <button onClick={saveGenInfo} className="submit_button" type="submit">
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
