import Header from "./modules/Header.jsx";
import "./styles.css";
import ExpForm from "./modules/ExperienceForm.jsx";
import EduForm from "./modules/EducationForm.jsx";
import GenForm from "./modules/GeneralForm.jsx";
import {
  ResumePage,
  EduPanel,
  ExpPanel,
  getLoopEntries,
} from "./modules/ResumePage.jsx";
import { useState } from "react";

export default function App() {
  const [genInfo, setGenInfo] = useState({});

  function saveGenInfo(e) {
    e.preventDefault();
    const form = document.querySelector("#gen_form");
    const genData = new FormData(form);
    // console.log(genData.get("first_name"));
    setGenInfo({
      name: genData.get("first_name") + " " + genData.get("last_name"),
      address: genData.get("address"),
      email: genData.get("email"),
      phone: genData.get("phoneExt") + " " + genData.get("phoneNo"),
      languages: getLoopEntries("#gen_form", "lang"),
      links: getLoopEntries("#gen_form", "link"),
    });
  }

  const [eduInfo, setEduInfo] = useState([]);

  function saveEduInfo(e) {
    e.preventDefault();
    const form = document.querySelector("#edu_form");
    const eduData = new FormData(form);
    setEduInfo((t) => [
      ...t,
      {
        lvl: eduData.get("eduLvl"),
        inst: eduData.get("edu_inst"),
        dateStart: eduData.get("startDate"),
        dateEnd: eduData.get("endDate"),
        gradeType: eduData.get("gradeType"),
        grade: eduData.get("grade"),
      },
    ]);
  }

  const [expInfo, setExpInfo] = useState([]);

  function saveExpInfo(e) {
    e.preventDefault();
    const form = document.querySelector("#exp_form");
    const expData = new FormData(form);
    setExpInfo((t) => [
      ...t,
      {
        compName: expData.get("company"),
        compPos: expData.get("post"),
        dateStart: expData.get("startDate"),
        dateEnd: expData.get("endDate"),
        point: expData.get("details"),
        skills: getLoopEntries("#exp_form", "skill"),
      },
    ]);
  }

  function printPage() {
    var printContents = document.querySelector(".Page").innerHTML;
    let w = window.open();
    w.document.write(printContents);
    w.print();
    w.close();
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="Forms">
          <GenForm saveGenInfo={saveGenInfo} />
          <EduForm saveEduInfo={saveEduInfo} />
          <ExpForm saveExpInfo={saveExpInfo} />
        </div>
        <div className="panel">
          <button className="print_button" onClick={printPage}>
            Print Resume
          </button>
          <span id="HeadSpan"></span>
          <div className="Page">        
            <ResumePage
              name={genInfo.name}
              address={genInfo.address}
              email={genInfo.email}
              phone={genInfo.phone}
              languages={genInfo.languages}
              links={genInfo.links}
            />
            {eduInfo.map((edu, index) => {
              return (
                <EduPanel
                  lvl={edu.lvl}
                  inst={edu.inst}
                  dateStart={edu.dateStart}
                  dateEnd={edu.dateEnd}
                  gradeType={edu.gradeType}
                  grade={edu.grade}
                  key={index}
                />
              );
            })}
            {expInfo.map((exp, index) => {
              return (
                <ExpPanel
                  compName={exp.compName}
                  compPos={exp.compPos}
                  dateStart={exp.dateStart}
                  dateEnd={exp.dateEnd}
                  point={exp.point}
                  skils={exp.skills}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
