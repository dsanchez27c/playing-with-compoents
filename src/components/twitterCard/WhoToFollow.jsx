import React from "react";
import { TwitterCard } from "./TwitterCard";
import "./../../styles/components/twitterCardStyle/WhoToFollowStyles.css";

function WhoToFollow() {
    const whoToFollowData = [
        {
            id: crypto.randomUUID(),
            name: "Daniel Alejandro Sánchez Contreras",
            userName: "daniel",
            follow: true,
            followingYou: false
        },
        {
            id: crypto.randomUUID(),
            name: "Yelibel Cordova",
            userName: "Yelibel",
            follow: false,
            followingYou: true
        },
        {
            id: crypto.randomUUID(),
            name: "Juan Carlos Marin",
            userName: "juan",
            follow: true,
            followingYou: false
        },
        {
            id: crypto.randomUUID(),
            name: "Diguel Josue Peña Garcia",
            userName: "diguel",
            follow: false,
            followingYou: true
        },
        {
            id: crypto.randomUUID(),
            name: "Feli Tigrera",
            userName: "feli",
            follow: false,
            followingYou: false
        },
    ]

    // console.log(whoToFollowData);

  return (
    <div className="who-to-follow-container containers">
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
