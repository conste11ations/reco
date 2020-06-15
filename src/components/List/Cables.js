import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({ recommendationRooms, handleReceivedComment }) => {
  return (
    <Fragment>
      {recommendationRooms.map(recoRoom => {
        // console.log("cable", recoRoom)
        return (
          <ActionCableConsumer
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