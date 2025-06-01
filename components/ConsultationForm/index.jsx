import { useState } from "react";
import axios from "axios";
import { send } from "emailjs-com";
import {
  HeroForm,
  Form,
  FormTitle,
  FormDescription,
  ContactForm,
  FormLabel,
  NameInput,
  PhoneInput,
  CaseInput,
  TermsCheckbox,
  SubmitForm,
  CheckboxTitle,
  Checkbox,
  UrgencySelect,
} from "./ConsultationForm.styled";

const CaseConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    caseType: "",
    urgency: "standard",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send to email service
      await send(
        "service_yourid",
        "template_yourid",
        {
          client_name: formData.name,
          client_phone: formData.phone,
          case_type: formData.caseType,
          urgency_level: formData.urgency,
          date: new Date().toLocaleString(),
        },
        "your_user_id"
      );

      // Send to spreadsheet/CRM
      await axios.post("your_sheet_endpoint", formData);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        caseType: "",
        urgency: "standard",
        agreedToTerms: false,
      });

      // Show success message
      alert(
        "Your consultation request has been submitted. We'll contact you within 24 hours."
      );
    } catch (error) {
      console.error("Submission error:", error);
      alert(
        "There was an error submitting your request. Please call us directly."
      );
    }
  };

  return (
    <HeroForm
      id="heroContact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <Form onSubmit={handleSubmit}>
      <FormTitle>Schedule Case Evaluation</FormTitle>
        <FormDescription>
          Complete this form for an immediate confidential consultation.
        </FormDescription>

        <ContactForm>
          <label htmlFor="name">Your full name</label>&nbsp;
          <NameInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            placeholder="&nbsp; John Doe"
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone number</label>&nbsp;
          <PhoneInput
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            placeholder="&nbsp; (555) 123-4567"
            onChange={handleChange}
            required
          />
          <label htmlFor="caseType">Nature of your case</label>&nbsp;
          <CaseInput
            id="caseType"
            name="caseType"
            value={formData.caseType}
            placeholder="&nbsp; e.g. DUI, assault, theft..."
            onChange={handleChange}
            required
          />
          <label htmlFor="urgency">Urgency Level</label>&nbsp;
          <UrgencySelect
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
          >
            <option value="standard">Standard Inquiry</option>
            <option value="urgent">Arrested/Need Immediate Help</option>
            <option value="court">Upcoming Court Date</option>
          </UrgencySelect>
          <br />
        </ContactForm>

        <TermsCheckbox>
          <label style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
            />
            <CheckboxTitle>
              I understand this form creates no attorney-client relationship
            </CheckboxTitle>
          </label>
        </TermsCheckbox>

        <SubmitForm type="submit">Request Case Consultation</SubmitForm>
      </Form>
    </HeroForm>
  );
};

export default CaseConsultationForm;
