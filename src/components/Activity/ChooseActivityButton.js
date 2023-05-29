import { IconContext } from 'react-icons';
import { IoEnterOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import useActivity from '../../hooks/api/useActivity';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export function SelectActivity({ id, startsAt, capacity, ingressed, setIngressed }) {
  const { scheduleActivity, scheduleActivityLoading } = useActivity.scheduleActivity();
  const { deleteScheduledActivity, deleteScheduleLoading } = useActivity.deleteScheduledActivity();
  const [localCapacity, setCapacity] = useState(capacity);

  async function handleActivityScheduling() {
    if (capacity > 0 && !ingressed) {
      try {
        const body = {
          activityId: id,
          startsAt,
        };
        await scheduleActivity(body);
        setIngressed(true);
        setCapacity(localCapacity - 1);
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    }
    if (ingressed) {
      try {
        await deleteScheduledActivity(id);
        setIngressed(false);
        setCapacity(localCapacity + 1);
      } catch (error) {
        toast.error(error);
      }
    } else {
    }
  }
  return (
    <ActivityStatusDiv  onClick={handleActivityScheduling}>
      <IconContext.Provider value={{ size: 25 }}>
        {localCapacity > 0 && !ingressed && <IoEnterOutline color="black" />}
        {ingressed && <AiOutlineCheckCircle color="green" />}
        {localCapacity <= 0 && !ingressed && <AiOutlineCloseCircle color="red" />}
      </IconContext.Provider>

      <p>{localCapacity} vagas</p>
    </ActivityStatusDiv>
  );
}

const ActivityStatusDiv = styled.button`
  height: 100%;
  width: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  p {
    font-family: Roboto;
    font-size: 9px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
