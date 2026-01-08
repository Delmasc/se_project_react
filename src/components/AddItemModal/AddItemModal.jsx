import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
    const defaultValues = {
        name: "",
        imageUrl: "",
        weatherType: "",
    };
    const { values, handleChange, reset } = useForm(defaultValues);
    function handleSumbit(evt) {
        evt.preventDefault();
        onAddItem(values, reset);
    }


    return (
        <ModalWithForm
            title="New garment"
            buttonText="Add garment"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSumbit}
        >
            <label htmlFor="name" className="modal__label">
                NAME{" "}
                <input
                    type="text"
                    name="name"
                    className="modal__input"
                    id="name"
                    placeholder="Name"
                    required
                    minLength="1"
                    maxLength="30"
                    value={values.name}
                    onChange={handleChange}
                />
            </label>
            <label className="modal__label">
                Image{" "}
                <input
                    type="url"
                    name="imageUrl"
                    className="modal__input modal__input_type_imageUrl"
                    id="clothes-imageURL"
                    placeholder="Image URL"
                    value={values.imageUrl}
                    onChange={handleChange}
                />
            </label>
            <fieldset className="modal__radio-buttons">
                <legend className="modal__legend">Select the weather type:</legend>
                <label htmlFor="hot" className=" modal__label_type_radio">
                    <input
                        id="hot"
                        type="radio"
                        name="weatherType"
                        className="modal__radio-input"
                        value="hot"
                        onChange={handleChange}
                    />{" "}
                    Hot
                </label>
                <label htmlFor="warm" className=" modal__label_type_radio">
                    <input
                        id="warm"
                        type="radio"
                        name="weatherType"
                        className="modal__radio-input"
                        value="warm"
                        onChange={handleChange}
                    />{" "}
                    Warm
                </label>
                <label htmlFor="cold" className=" modal__label_type_radio">
                    <input
                        id="cold"
                        type="radio"
                        name="weatherType"
                        className="modal__radio-input"
                        value="cold"
                        onChange={handleChange}
                    />{" "}
                    Cold
                </label>
            </fieldset>
        </ModalWithForm>
    );
};

export default AddItemModal;
