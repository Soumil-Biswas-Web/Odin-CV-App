import "../styles.css";
import "./styles/resumePage.css";

export function getLoopEntries(formName = String, typeName = String) {
  // console.log(formName + typeName);
  const form = document.querySelector(formName);
  const data = new FormData(form);
  let result = [];
  let index = 1;
  while (data.get(typeName + " " + index)) {
    let value = data.get(typeName + " " + index);
    result.push(value);
    index++;
  }
  // console.log(result);
  return result;
}

export function ResumePage({
  name = "",
  address = "",
  email = "",
  phone = "",
  languages = [],
  links = [],
}) {
let contactItems = [phone, address, email].filter(item => item && item.trim() !== "");
let underpage = contactItems.join(" | ");

console.log(languages);
  return (
    <div className="resumePage">
      <h1>{name}</h1>
      <p>{underpage}</p>
      <div className="undernames">      
      </div>

      {links.map((link, index) => {
        return <p key={index}>{link}</p>;
      })}
      {languages.map((lang, index) => {
        return <p key={index}>{lang}</p>;
      })}
    </div>
  );
}

export function EduPanel({
  lvl,
  inst,
  dateStart,
  dateEnd,
  gradeType,
  grade = String,
  
}) {
  return (
    <div className="eduPanel">
      <p>{inst + " -  " + lvl}</p>
      <p>{dateStart + " - " + dateEnd}</p>
      <p>{gradeType + " - " + grade}</p>
    </div>
  );
}

export function ExpPanel({
  compName,
  compPos,
  dateStart,
  dateEnd,
  point = String,
  skills = [],
  
}) {
  return (
    <div className="expPanel">
      <p>{compPos + " - " + compName}</p>
      <p>{dateStart + " - " + dateEnd}</p>
      <p>{point}</p>
      {skills.map((skill, index) => {
        return <p key={index}>{skill}</p>;
      })}
    </div>
  );
}
