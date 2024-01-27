import React, { useState } from "react";
import "./../../styles/components/twitterCardStyle/TwitterCardStyles.css";
import Loading from "../loading/loading";

export function TwitterCard({
  userName = "",
  name = "",
  follow,
  followingYou,
}) {
  const [isFollowing, setIsFollowing] = useState(follow);
  const [loadingFollow, setLoadingFollow] = useState(false);

  const imageSrc = `https://unavatar.io/${userName}`;
  const btnText = isFollowing ? "Siguiendo" : "Seguir";
  const btnClassName = isFollowing
    ? "twitter-card-btn is-following"
    : "twitter-card-btn";

  const handleClick = () => {
    setLoadingFollow(true);
    setTimeout(() => {
      setIsFollowing(!isFollowing);
      setLoadingFollow(false);
    }, 170);
  };

  return (
    <article className="twitter-card-container">
      <header className="twitter-card-header">
        <img className="twitter-card-userimg" src={imageSrc} alt="" />
        <div className="twitter-card-userinfo">
          <strong className="twitter-card-nameuser">{name}</strong>
          <section>
            <span className="twitter-card-name">@{userName}</span>
            {followingYou && (
              <span className="twitter-card-follow-status">Te sigue</span>
            )}
          </section>
        </div>
      </header>

      <aside className="twitter-card-btn-container">
        <button className={btnClassName} onClick={handleClick}>
          <span className="twitter-card-btn-is-following">{btnText}</span>
          <span className="twitter-card-btn-stop-follow">Dejar de Seguir</span>
          {loadingFollow && <Loading />}
        </button>
      </aside>
    </article>
  );
}
