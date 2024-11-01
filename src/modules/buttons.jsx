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

function CreateFieldButton({ id = "", text = "", onClick }) {
  return (
    <button onClick={onClick} id={id}>
      {text}
    </button>
  );
}

export { TabButton, CreateFieldButton };
