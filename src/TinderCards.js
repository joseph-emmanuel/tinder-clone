import React,{useState} from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card"
import { SwipeableDrawer } from '@material-ui/core';
function TinderCards() {
    const [people,setPeople]=useState([
       { name:'Elon Musk',
       url:"https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
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
