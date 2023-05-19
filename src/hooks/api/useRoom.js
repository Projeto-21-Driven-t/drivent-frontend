import useAsync from '../useAsync';
import useToken from '../useToken';
import * as roomApi from '../../services/roomApi';

function useCreateRooms() {
  const token = useToken();
  
  const {
    data: Room,
    loading: RoomLoading,
    error: RoomError,
    act: createRoom,
  } = useAsync(() => roomApi.reservateRoom(token), false);
  
  return {
    Room,
    RoomLoading,
    RoomError,
    createRoom
  };
}

function useFindRooms() {
  const token = useToken();
    
  const {
    data: Room,
    loading: RoomLoading,
    error: RoomError,
    act: findRoom,
  } = useAsync(() => roomApi.findRoom(token), false);
    
  return {
    Room,
    RoomLoading,
    RoomError,
    findRoom
  };
}

export { useCreateRooms, useFindRooms };
