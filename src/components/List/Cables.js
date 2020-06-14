import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ recommedationRooms, handleReceivedComment }) => {
  return (
    <Fragment>
      {recommedationRooms.map(recoRoom => {
        return (
          <ActionCable
            key={recoRoom.id}  
            channel={{ channel: 'CommentsChannel', recommendation: recoRoom.id }}
            onReceived={handleReceivedComment}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;