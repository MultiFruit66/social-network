import React from "react";
import s from "./Messages.module.css";
import Contacts from "./Contacts/Contacts";
import Chat from "./Chats/Chat";

function Messages() {
    return (
        <div className={s.dialogs}>
            <span className={s.title}>Dialogs</span>
            <Contacts />
            <Chat />
        </div>
    );
}

export default Messages;