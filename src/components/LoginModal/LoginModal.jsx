import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

function LoginModal({ isOpen, onClose, onLogin, onModalSwitch }) {
  const defaultValues = {
    email: "",
    password: "",
  };
  const { values, handleChange, reset } = useForm(defaultValues);
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values, reset);
  }

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      secondaryButtonText="or Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onSecondaryButtonClick={onModalSwitch}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
