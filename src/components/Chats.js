import React from 'react';
import { useHistory } from 'react-touter-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
    return (
        <h1>Chats</h1>
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                
                </div>
            </div>
        </div>
    );
}

export default Chats;
