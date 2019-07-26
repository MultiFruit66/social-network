import React from "react";
import s from "./Item.module.css";
import {NavLink} from "react-router-dom";


function Item(props) {
    let path = `/messages/${props.name}`;
    return (
        <li className={s.item}>
            <NavLink className={s.link} activeClassName={s.active} to={path}>{props.name}</NavLink>
        </li>
    );
}

export default Item;