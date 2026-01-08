import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({ clothingItems, onCardClick, handleAddClick }) {
    return (
        <section className="profile">
            <SideBar />
            <ClothesSection onCardClick={onCardClick} clothingItems={clothingItems} handleAddClick={handleAddClick} />
        </section>
    );
}
