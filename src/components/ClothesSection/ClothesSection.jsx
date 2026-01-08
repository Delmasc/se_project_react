import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({ clothingItems, onCardClick, handleAddClick }) {
    return (
        <div className="clothes-section">
            <div className="clothes-section__row">
                <p className="clothes-Section__text">Your items</p>
                <button className="clothes-section__button" onClick={handleAddClick}>+ Add Items</button>
            </div>
            <ul className="clothes-section__list ">
                {clothingItems && Array.isArray(clothingItems) && clothingItems.map((item) => (
                    <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
                ))}
            </ul>
        </div>
    );
}