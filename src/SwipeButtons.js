import React from 'react'
import "./SwipeButtons.css"

import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IocnButton from "@material-ui/core/IconButton"


function SwipeButtons() {
    return (
        <div className="swipeButtons">            
            <IocnButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large"/>                
            </IocnButton>
            <IocnButton className="swipeButtons_left">
                <CloseIcon fontSize="large"/>                
            </IocnButton>
            <IocnButton className="swipeButtons_star">
                <StarRateIcon fontSize="large"/>                
            </IocnButton>
            <IocnButton className="swipeButtons_right">
                <FavoriteIcon fontSize="large"/>                
            </IocnButton>
            <IocnButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize="large"/>                
            </IocnButton>
        </div>
    )
}

export default SwipeButtons
