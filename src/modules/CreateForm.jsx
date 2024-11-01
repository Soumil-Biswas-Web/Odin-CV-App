export function AddTextInputArray({ items = [] }) {
  // console.log(items);
  const result = items.map((item, index) => (
    <div key={index} className="inputDiv">
      <label htmlFor={item.name}>{item.label}</label>
      <input
        type="text"
        id={item.name}
        name={item.name}
        placeholder={item.placeholder}
      />
    </div>
  ));

  return <div>{result}</div>;
}

export function AddTextInput({
  name = String,
  label = String,
  placeholder = String,
  inputKey = String,
}) {
  const result = (
    <div key={inputKey} className="inputDiv">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} placeholder={placeholder} />
    </div>
  );
  return <div>{result}</div>;
}

export function AddDropDownMenu({
  name = String,
  label = String,
  placeholder = String,
  inputKey = String,
  options = [String],
}) {
  const result = (
    <div key={inputKey} className="inputDiv">
      <label htmlFor={name}>{label}</label>
      <input
        list={name + "options"}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      <datalist id={name + "options"}>
        {options.map((option, index) => (
          <option key={index} value={option}></option>
        ))}
      </datalist>
      <data value=""></data>
    </div>
  );
  return <div>{result}</div>;
}

export function AddDateInput({
  name = String,
  label = String,
  // placeholder = String,
  inputKey = String,
}) {
  const result = (
    <div key={inputKey} className="inputDiv">
      <label htmlFor={name}>{label}</label>
      <input type="Date" id={name} name={name} /*placeholder={placeholder}*/ />
    </div>
  );
  return <div>{result}</div>;
}

export function AddNumberInput({
  name = String,
  label = String,
  placeholder = String,
  inputKey = String,
}) {
  const result = (
    <div key={inputKey} className="inputDiv">
      <label htmlFor={name}>{label}</label>
      <input type="number" id={name} name={name} placeholder={placeholder} />
    </div>
  );
  return <div>{result}</div>;
}

export function AddEmailInput({
  name = String,
  label = String,
  placeholder = String,
  inputKey = String,
}) {
  const result = (
    <div key={inputKey} className="inputDiv">
      <label htmlFor={name}>{label}</label>
      <input type="email" id={name} name={name} placeholder={placeholder} />
    </div>
  );
  return <div>{result}</div>;
}

// export { AddTextInput, AddTextInputArray, AddDropDownMenu };
