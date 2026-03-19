import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import heartIcon from "../../assets/Likebutton.svg";
import likedHeartIcon from "../../assets/likedheart.svg";

function ItemCard({ item, onCardClick, handleCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(item);
  };

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
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button onClick={handleLikeClick} className="card__like-button">
            <img src={isLiked ? likedHeartIcon : heartIcon} alt="Likebutton" />
          </button>
        )}
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
