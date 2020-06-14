import React from 'react';

const findActiveRecoRoom = (recommendationRooms, activeRecoRoom) => {
  console.log("print", recommendationRooms, activeRecoRoom)
  return recommendationRooms.find(
    recoRoom => recoRoom.id === activeRecoRoom
  );
};

const mapRecommendationRooms = (recommendationRooms, changeRecoRoom) => {
  return recommendationRooms.map(recoRoom => {
    return (
      <li key={recoRoom.id} onClick={() => changeRecoRoom(recoRoom.id)}>
        {recoRoom.business_id}
      </li>
    );
  });
};

const findRecoRoomByBusinessAndList = (recommendationRooms, listId, businessId) => {
  const result = recommendationRooms.filter(recommendationRoom => {
    return (recommendationRoom.business_id === businessId && recommendationRoom.list_id === listId)
  })
  return result[0];
}

const findBusinessIdByLabel = (label, businesses) => {
  const result = businesses.filter(business => {
    return business.name === label
  })
  return result[0].id
}

export { findActiveRecoRoom, mapRecommendationRooms, findRecoRoomByBusinessAndList, findBusinessIdByLabel }