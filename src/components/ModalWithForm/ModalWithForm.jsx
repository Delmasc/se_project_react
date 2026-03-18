import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  secondaryButtonText,
  onSecondaryButtonClick,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"} `}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="buton"
          className="modal__close"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__btns">
            <button type="submit" className="modal__submit-btn">
              {buttonText}
            </button>
            {secondaryButtonText && (
              <button
                type="button"
                className="modal__secondary-btn"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
