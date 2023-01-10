import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "../components/Form";
import Modal from "../components/Modal";

describe("Form", () => {
  it("should show a modal with error message when the first text field is empty on submit", () => {
    const { getByText } = render(<Form />);
    const submitButton = getByText("save");

    fireEvent.click(submitButton);
    const { getByText: getModalText } = render(<Modal />);
    expect(getModalText("textfield is required")).toBeTruthy();
    expect(getModalText("dropdown is required")).toBeTruthy();
    expect(getModalText("radio is required")).toBeTruthy();
    expect(getModalText("textField2 is required")).toBeTruthy();
    expect(getModalText("calendar is required")).toBeTruthy();
  });

  it("should show a modal with success message when the first text field is filled out on submit", async () => {
    const { getByLabelText, getByText } = render(<Form />);
    const textField1 = getByLabelText("textField1");
    const dropdown = getByLabelText("dropdown");
    const calendar = getByLabelText("calendar");
    const radioOption1 = getByLabelText("option1");
    const textField2 = getByLabelText("textField2");
    const submitButton = getByText("save");

    fireEvent.change(textField1, { target: { value: "Some input" } });
    fireEvent.change(dropdown, { target: { value: "option1" } });
    fireEvent.change(calendar, { target: { value: "2023-01-01" } });
    fireEvent.click(radioOption1);
    fireEvent.change(textField2, { target: { value: "Some other input" } });
    fireEvent.click(submitButton);

    const { getByText: getModalText } = render(<Modal />);

    expect(getModalText("Success")).toBeTruthy();
  });

  it("should update the state when the user interacts with the form fields", () => {
    const { getByLabelText } = render(<Form />);
    const textField1 = getByLabelText("textField1");
    const dropdown = getByLabelText("dropdown");
    const calendar = getByLabelText("calendar");
    const radioOption1 = getByLabelText("option1");
    const textField2 = getByLabelText("textField2");

    fireEvent.change(textField1, { target: { value: "Some input" } });
    fireEvent.change(dropdown, { target: { value: "option1" } });
    fireEvent.change(calendar, { target: { value: "2023-01-01" } });
    fireEvent.click(radioOption1);
    fireEvent.change(textField2, { target: { value: "Some other input" } });
  });
});
