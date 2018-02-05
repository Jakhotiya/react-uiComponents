import React from 'react';

const Messages = props => {
  return (
    <div id="messages">
      <div class="messages">
        <div class="message message-success success">
          <div data-ui-id="messages-message-success">{props.msg}</div>
        </div>
      </div>
    </div>
  );
}

export default Messages;