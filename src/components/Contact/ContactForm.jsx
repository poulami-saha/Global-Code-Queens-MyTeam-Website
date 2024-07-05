import React, { useState } from "react";
import "./ContactForm.module.css";
import FormElement from "../utility/FormElement/FormElement";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    companyName: { value: "", error: "" },
    title: { value: "", error: "" },
    message: { value: "", error: "" },
  });

  const handleChange = (inputField) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [inputField]: { ...prevState[inputField], value: value, error: "" },
    }));
  };

  const handleBlur = (inputField) => () => {
    if (!formData[inputField].value) {
      setFormData((prevState) => ({
        ...prevState,
        [inputField]: { ...prevState[inputField], error: "This field is required" },
      }));
    } else if (inputField === "message" && formData[inputField].value.length < 25) {
      setFormData((prevState) => ({
        ...prevState,
        [inputField]: {
          ...prevState[inputField],
          error: "Message must be at least 25 characters",
        },
      }));
    }
  };
  return (
    <form>
      <FormElement
        type="text"
        placeholder="Name"
        value={formData.name.value}
        onChange={handleChange("name")}
        onBlur={handleBlur("name")}
        error={formData.name.error}
      />
      <FormElement
        type="text"
        placeholder="Email Address"
        value={formData.email.value}
        onChange={handleChange("email")}
        onBlur={handleBlur("email")}
        error={formData.email.error}
      />
      <FormElement
        type="text"
        placeholder="Company Name"
        value={formData.companyName.value}
        onChange={handleChange("companyName")}
        onBlur={handleBlur("companyName")}
        error={formData.companyName.error}
      />
      <FormElement
        type="text"
        placeholder="Title"
        value={formData.title.value}
        onChange={handleChange("title")}
        onBlur={handleBlur("title")}
        error={formData.title.error}
      />
      <FormElement
        type="textarea"
        placeholder="Message"
        value={formData.message.value}
        onChange={handleChange("message")}
        onBlur={handleBlur("message")}
        error={formData.message.error}
      />
    </form>
  );
};

export default ContactForm;
