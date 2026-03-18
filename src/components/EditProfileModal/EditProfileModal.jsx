import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onProfile }) {
  const defaultValues = {
    name: "",
    avatar: "",
  };
  const { values, handleChange, reset, setValues } = useForm(defaultValues);
  function handleSubmit(evt) {
    evt.preventDefault();
    onProfile(values, reset);
  }
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({ name: currentUser.name, avatar: currentUser.avater });
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      title="Edit Profile"
      buttonText="Save Changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
