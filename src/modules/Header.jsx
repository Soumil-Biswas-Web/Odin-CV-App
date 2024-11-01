import "../styles.css";

let Forms;

function GetForms() {
  Forms = document.querySelector(".Forms").childnodes;
  // console.log(Forms);
}

function TabButton({ id = "", text = "", target = "" }) {
  const onClick = () => {
    Forms.forEach(function (currentValue, currentIndex, listObj) {
      if (currentValue.className === target) {
        // console.log(currentIndex + " " + currentValue.style.display);
        currentValue.style.display = "flex";
      } else {
        // console.log(currentIndex + " " + currentValue.style.display);
        currentValue.style.display = "none";
      }
    });
  };

  return (
    <button onClick={onClick} id={id}>
      {text}
    </button>
  );
}

function Header() {
  return (
    <div className="Header">
      <h1>Odin CV Application</h1>
      <h2>Click on a tab and start entering your details!</h2>

      {/* <div className="ButtonsTab">
        <TabButton id="GenBtn" text="General Information" target="Gen Form" />
        <TabButton id="EduBtn" text="Education Information" target="Edu Form" />
        <TabButton
          id="ExpBtn"
          text="Experience Information"
          target="Exp Form"
        />
      </div> */}
    </div>
  );
}

export { Header, GetForms };

// setTimeout(() => {
//   GetForms();
// }, 1000);
