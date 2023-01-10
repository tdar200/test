import React, { useState } from "react";
import Modal from "./Modal";

const Form = () => {
  //DRY methodology, not to repeat code, if just created an object then the refrence would be messed up
  const formDataObject = () => {
    return {
      textField1: "",
      dropdown: "",
      calendar: "",
      radio: "",
      textField2: "",
    };
  };

  const [formData, setFormData] = useState(formDataObject);

  const [modalVisible, setModalVisible] = useState(false);

  const [modalMessage, setModalMessage] = useState("Error");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const messageArr = [];

    if (!formData.textField1) {
      isValid = false;
      messageArr.push("textfield is required");
    }

    if (!formData.dropdown) {
      messageArr.push("dropdown is required");
      isValid = false;
    }

    if (!formData.radio) {
      messageArr.push("radio is required");
      isValid = false;
    }

    if (!formData.textField2) {
      messageArr.push("textField2 is required");
      isValid = false;
    }

    if (!formData.calendar) {
      messageArr.push("calendar is required");
      isValid = false;
    }

    if (isValid) {
      setModalMessage("Success");
      setFormData(formDataObject);
    } else {
      setModalMessage(messageArr.length === 0 ? "Error" : [...messageArr]);
    }

    setModalVisible(true);
  };

  return (
    <>
      <Modal
        message={
          typeof modalMessage === "string"
            ? modalMessage
            : modalMessage.map((message, idx) => {
                return <li key={`${message}${idx}`}>{message}</li>;
              })
        }
        visible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <form onSubmit={handleSubmit}>
        {/* <label for="textField1">TextField1</label> */}
        <input
          aria-label='textField1'
          type='text'
          name='textField1'
          value={formData.textField1}
          onChange={handleInputChange}
        />
        <br />
        <select
          aria-label='dropdown'
          name='dropdown'
          value={formData.dropdown}
          onChange={handleInputChange}>
          <option value=''></option>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
        </select>
        <br />
        <input
          aria-label='calendar'
          type='date'
          name='calendar'
          value={formData.calendar}
          onChange={handleInputChange}
        />
        <br />
        <div>
          <input
            type='radio'
            name='radio'
            value='option1'
            aria-label='option1'
            checked={formData.radio === "option1"}
            onChange={handleInputChange}
          />
          <input
            type='radio'
            name='radio'
            value='option2'
            aria-label='option2'
            checked={formData.radio === "option2"}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <input
          type='text'
          name='textField2'
          aria-label='textField2'
          value={formData.textField2}
          onChange={handleInputChange}
        />
        <br />
        <button aria-label='save' type='submit'>
          save
        </button>
      </form>
    </>
  );
};
export default Form;
