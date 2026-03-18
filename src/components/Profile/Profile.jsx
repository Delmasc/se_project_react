import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  handleEditProfileClick,
  handleCardLike,
  handleLogOutClick,
}) {
  return (
    <section className="profile">
      <SideBar
        handleEditProfileClick={handleEditProfileClick}
        handleLogOut={handleLogOutClick}
      />
      <ClothesSection
        onCardClick={onCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
        handleCardLike={handleCardLike}
      />
    </section>
  );
}
