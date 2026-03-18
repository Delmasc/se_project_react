import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(item);
  };

  // const isLiked = item.likes.some((like) => like._id === currentUser.id);
  const isLiked = item.likes
    ? item.likes.some((id) => id === currentUser?._id)
    : false;

  function handleLikeClick() {
    console.log(item);
    console.log(item._id);
    handleCardLike({ id: item._id, isLiked });
  }

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      {currentUser && (
        <button onClick={handleLikeClick} className="card__like-button">
          {isLiked ? "♥" : "♡"}
        </button>
      )}
    </li>
  );
}

export default ItemCard;
