import React from 'react';
import './messages.css'
import Checkbox from "../../../../ui/checkbox";
import MessageItem from "./messageItem";
import SelectedMessages from "./selectedMessages";

const Messages = () => {
  return (
    <div>
      <div className="messages_header flex">
        <Checkbox/>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
      </div>

      <div className="messages_list">
        <MessageItem/>
        <MessageItem/>
        <MessageItem/>
      </div>

      <SelectedMessages/>
    </div>
  );
};

export default Messages;