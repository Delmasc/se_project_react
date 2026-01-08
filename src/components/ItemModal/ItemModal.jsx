import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDelete }) {
    return (
        <div className={`modal ${activeModal === "preview" && "modal_opened"} `}>
            <div className="modal__content modal__content_type_image">
                <button
                    onClick={onClose}
                    type="button"
                    className="modal__close"
                ></button>
                <img src={card.imageUrl} alt="card" className="modal__image" />
                <div className="modal__footer card__footer">
                    <h2 className="modal__caption">{card.name}</h2>
                    <button className="modal__delete-btn" onClick={onDelete}>Delete item</button>
                    <p className="modal__weather">Weather: {card.weather}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemModal;
