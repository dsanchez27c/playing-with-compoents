import React from "react";
import { TwitterCard } from "./TwitterCard";
import "./../../styles/components/twitterCardStyle/WhoToFollowStyles.css";

function WhoToFollow() {
    const whoToFollowData = [
        {
            id: 1,
            name: "Daniel Alejandro Sánchez Contreras",
            userName: "daniel",
            follow: true,
            followingYou: false
        },
        {
            id: 2,
            name: "Yelibel Cordova",
            userName: "Yelibel",
            follow: false,
            followingYou: true
        },
        {
            id: 3,
            name: "Juan Carlos Marin",
            userName: "juan",
            follow: true,
            followingYou: false
        },
        {
            id: 4,
            name: "Diguel Josue Peña Garcia",
            userName: "diguel",
            follow: false,
            followingYou: true
        },
        {
            id: 5,
            name: "Feli Tigrera",
            userName: "feli",
            follow: false,
            followingYou: false
        },
    ]

  return (
    <div className="who-to-follow-container">
      <h2 className="who-to-follow-title">A Quien Seguir</h2>
      {whoToFollowData.slice(0, 3).map((el)=>{
        const {id, name, userName, follow, followingYou} = el
        return(
            <TwitterCard key={id} userName={userName} name={name} follow={follow} followingYou={followingYou} />
        )
      })}
      {whoToFollowData.length>3 && <p className="who-to-follow-show-more">Mostrar más</p>}
    </div>
  );
}

export default WhoToFollow;
