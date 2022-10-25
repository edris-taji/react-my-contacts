import React from "react";
import Avatar from "./Avatar";
import Detail from "./detail";

function Cards ( props )
{
    return (
        <div className="contact">
            <div className="top">
                <h2 className="name">{ props.name }</h2>
                <Avatar imgSrc={ props.imgSrc } />
            </div>
            <div className="bottom">
                <Detail
                    detaInfo={ props.phone }
                />
                <Detail
                    detaInfo={ props.email }
                />
            </div>
        </div>
    )
}
export default Cards;