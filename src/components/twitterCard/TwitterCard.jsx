import React, { useState } from "react";
import "./../../styles/components/twitterCardStyle/TwitterCardStyles.css";

export function TwitterCard({userName="", name="", follow, followingYou}) {
  const [isFollowing, setIsFollowing] = useState(follow)

  const imageSrc = `https://unavatar.io/${userName}`
  const btnText = isFollowing ? "Siguiendo" : "Seguir"
  const btnClassName = isFollowing ? "twitter-card-btn is-following" : "twitter-card-btn"

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className="twitter-card-container">
      <header className="twitter-card-header">
        <img className="twitter-card-userimg" src={imageSrc} alt="" />
        <div className="twitter-card-userinfo">
          <strong className="twitter-card-nameuser">{name}</strong>
          <section>
            <span className="twitter-card-name">@{userName}</span>
            {followingYou && 
            
            <span className="twitter-card-follow-status">Te sigue</span>
            }
          </section>
        </div>
      </header>

      <aside className="twitter-card-btn-container">
        <button className={btnClassName} onClick={handleClick}>{btnText}</button>
      </aside>
    </article>
  );
}

