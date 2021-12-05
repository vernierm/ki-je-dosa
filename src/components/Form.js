import React, { useState } from 'react';
import './Form.css';
import { useAlert } from 'react-alert';

function InputLabel(props) {
  return (
    <label>
      {props.label}
      <input
        className="Form-input"
        name={props.name}
        type="text"
        spellCheck="false"
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
}

const initialValues = {
  male: '',
  female: '',
  where: '',
  doingWhat: '',
  thirdPerson: '',
  statement: '',
}

export default function Form(props) {
  const [values, setValues] = useState(initialValues);
  const alert = useAlert();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  };

  const resetValues = () => {
    setValues(initialValues);
  };

  const valid = (values) => {
    return values.male && values.female && values.where && values.doingWhat && values.thirdPerson && values.statement;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentValues = values;
    if (!valid(currentValues)) {
      alert.show('popuni sva polja');
    } else {
      event.target.reset();
      resetValues();
      props.onClick(currentValues);
    }
  }

  return (
    <form className="Form-input" onSubmit={handleSubmit}>
      <InputLabel label="Muški:" name="male" value={values.male} onChange={handleInputChange} />
      <InputLabel label="Ženska:" name="female" value={values.female} onChange={handleInputChange} />
      <InputLabel label="Kadi?" name="where" value={values.where} onChange={handleInputChange} />
      <InputLabel label="Ča delaju?" name="doingWhat" value={values.doingWhat} onChange={handleInputChange} />
      <InputLabel label="Ki je doša?" name="thirdPerson" value={values.thirdPerson} onChange={handleInputChange} />
      <InputLabel label="Ča je reka?" name="statement" value={values.statement} onChange={handleInputChange} />
      <input className="Form-button" type="submit" value="Unesi" />
    </form>
  );
}
