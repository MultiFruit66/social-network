import React from "react";
import s from "./Contacts.module.css";
import Item from "./Item/Item";

let contactsData = [
    {id: 1, name: "Andrew"},
    {id: 2, name: "Dmitry"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Valera"},
    {id: 6, name: "Viktor"},
]

function Contacts() {
    let contacts = contactsData.map(item => <Item name={item.name} />);
    return (
        <div className={s.contacts}>
            <ul>
                {contacts}
            </ul>
        </div>
    );
}

export default Contacts;