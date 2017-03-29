import React from 'react';

var InviteeListItem = ({invitee}) => (
  <div>
    <div>{invitee.name}</div>
    <div>{invitee.email}</div>
  </div>
);

export default InviteeListItem;
