import "../styles.css";
import "./styles/form.css";
import * as Form from "./CreateForm";
import { useState } from "react";
import { countryDialCodes } from "./countryCodes";
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
      },
    ]);
  }

  const removeLangTab = (e, indexToRemove) => {
    e.preventDefault();
    console.log(indexToRemove);
    setLangTabs((prevTabs) =>
      prevTabs.filter((_, index) => index !== indexToRemove)
    );
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
      },
    ]);
  }

  const removeLinkTab = (e, indexToRemove) => {
    e.preventDefault();
    setLinkTabs((prevTabs) =>
      prevTabs.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <div className="Gen Form">
      <form id="gen_form">
        <div className="paired">
          <Form.AddTextInput
            name="first_name"
            label="First Name"
            placeholder="John"
            isRequired={true}
            
          />
          <Form.AddTextInput
            name="last_name"
            label="Last Name"
            placeholder="Doe"
            isRequired={true}
            
          />
        </div>
        <Form.AddTextInput
          name="address"
          label="Address"
          placeholder="Your, Address"
          isRequired={true}
          
        />
        <Form.AddEmailInput
          name="email"
          label="Email"
          placeholder="johndoe@example.com"
          isRequired={true}
          
        />
        <div className="paired">
          <Form.AddDropDownMenu
            name="phoneExt"
            label="Region"
            placeholder="+00"
            
            options={Object.values(countryDialCodes)}
          />
          <Form.AddNumberInput
            name="phoneNo"
            label="Phone Number"
            placeholder="12345 67890"
            
          />
        </div>

        <div className="languages">
          {langTabs.map((item, index) => (
            <div key={index}>
              <Form.AddTextInput
                name={item.name}
                label={item.label}
                placeholder={item.placeholder}
                isRequired={true}                
              />
              <button onClick={(e) => removeLangTab(e, index)} className="remove">-</button>                  
            </div>
          ))}
          <button onClick={addLangTab} className="add_Lnag">
            Add languages
          </button>
        </div>

        <div className="links">
          {linkTabs.map((item, index) => (
            <div key={index}>
              <Form.AddTextInput
                name={item.name}
                label={item.label}
                placeholder={item.placeholder}
                isRequired={true}                
              />
              <button onClick={(e) => removeLinkTab(e, index)} className="remove">-</button>     
            </div>
          ))}          
          <button onClick={addLinkTab} className="add_Link">
            Add Personal Links
          </button>
        </div>

        <div className="buttons">
          <button onClick={saveGenInfo} className="submit_button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
