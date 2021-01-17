import React,{useState} from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core';
function TinderCards() {
    const [people,setPeople]=useState([
       { name:'Elon Musk',
       url:"data:image/jpeg;base64,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"
    },
    { name:'Jeff Bezos',
       url:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
    }
    ]);

    const swiped=(direction,nameToDelete)=>{
        console.log("removing :"+nameToDelete);
        // setLastDirection(direction);need to work on it after the deployment
    }
    const outOfFrame=(name)=>{
        console.log(name+" left of the screen")
    }



    return (
        <div className ="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person)=>(
               
               <TinderCard
               className="swipe"
               key={person.name}
               preventSwipe={["up","down"]}
               onSwipe={(dir)=>swiped(dir,person.name)}
               onCardLeftScreen={()=>outOfFrame(person.name)}
               >
                
                <div
                style={{backgroundImage:`url(${person.url})`}}className="card">
                    <h3>{person.name}</h3>
                </div>

                
               </TinderCard>
            ))}
            </div>


            
        </div>
    )
}

export default TinderCards
