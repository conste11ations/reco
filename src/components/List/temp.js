const render = () => {
  const { recommendationRooms, activeRecoRoom } = state;
  return (
    <div className="conversationsList">
      {/* <ActionCable
        channel={{ channel: 'RecommendationsChannel' }}
        onReceived={handleReceivedRecoRoom}
      /> */}
      {state.recommendationRooms.length ? (
        <Cable
          recommendationRooms={state.recommendationRooms}
          handleReceivedComment={handleReceivedComment}
        />
      ) : null}
      <h2>Recommendation Rooms</h2>
      {/* diverged, passed changeRecoRoom as prop to RecommendationDrawer}
      <ul>{mapRecommendationRooms(state.recommendationRooms, changeRecoRoom)}</ul>
      {/* Edit comment form -> <NewConversationForm /> */}
            {state.activeRecoRoom ? (
              <RecommendationDrawer
                recoRoom={findActiveRecoRoom(
                  state.recommendationRooms,
                  state.activeRecoRoom
                )}
              />
            ) : null}
    </div>
  );
};
} // to remove

// const findActiveRecoRoom = (recommendationRooms, activeRecoRoom) => {
//   return recommendationRooms.find(
//     recoRoom => recoRoom.id === activeRecoRoom
//   );
// };

// const mapRecommendationRooms = (recommendationRooms, changeRecoRoom) => {
//   return recommendationRooms.map(recoRoom => {
//     return (
//       <li key={recoRoom.id} onClick={() => changeRecoRoom(recoRoom.id)}>
//         {recoRoom.business_id}
//       </li>
//     );
//   });
// };

// for later
{/* <ListItem key={index}>
<Typography paragraph color='secondary'>{comment.because}</Typography>
</ListItem> */}



