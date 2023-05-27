import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { IoEnterOutline } from 'react-icons/io5';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export function ActivityDiv({ activity }) {
  const { name, capacity, startsAt, endsAt } = activity;
  const start = startsAt.slice(-5);
  const end = endsAt.slice(-5);

  //const duration = Number(end.replace(':00', '') - start.replace(':00', ''));

  return (
    <>
      <StyleActivityDiv>
        <ActivityInfoDiv>
          <ActivityName>{name}</ActivityName>
          <p>
            {start} - {end}
          </p>
        </ActivityInfoDiv>
        <ActivityBorder></ActivityBorder>
        <ActivityStatusDiv>
          <IconContext.Provider value={{ size: 25 }}>
            <IoEnterOutline />
          </IconContext.Provider>

          <p>{capacity} vagas</p>
        </ActivityStatusDiv>
      </StyleActivityDiv>
    </>
  );
}

const StyleActivityDiv = styled.div`
  height: ${(duration) => (duration === 2 ? '160px' : '80px')};
  width: 100%;
  border-radius: 5px;

  margin-bottom: 10px;

  display: flex;
  background-color: #f1f1f1;
`;

const ActivityInfoDiv = styled.div`
  height: 100%;
  width: 200px;

  padding: 12px 10px;

  p {
    font-family: Roboto, sans-serif;
    font-size: 12px !important;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const ActivityName = styled.h4`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  margin-bottom: 6px;
`;

const ActivityStatusDiv = styled.div`
  height: 100%;
  width: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: Roboto;
    font-size: 9px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const ActivityBorder = styled.div`
  height: 80%;
  border-right: 1px solid #cfcfcf;
  margin-top: 10px;
`;
