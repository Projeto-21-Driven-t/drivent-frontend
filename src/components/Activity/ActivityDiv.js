import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { IoEnterOutline } from 'react-icons/io5';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export function ActivityDiv({ name, startsAt, endsAt, capacity }) {
  const activities = [
    {
      name: name,
      startsAt: startsAt,
      endsAt: endsAt,
      capacity: capacity,
      duration: Number(endsAt.replace(':00', '') - startsAt.replace(':00', ' ')),
    },
  ];

  console.log(activities);

  return (
    <>
      <StyleActivityDiv>
        {activities.map((a) => {
          return (
            <>
              <ActivityInfoDiv duration={a.duration}>
                <h1>{a.name}</h1>
                <p>
                  {a.startsAt} - {a.endsAt}
                </p>
              </ActivityInfoDiv>
              <ActivityBorder></ActivityBorder>
              <ActivityStatusDiv>
                <IconContext.Provider value={{ size: 25 }}>
                  <IoEnterOutline />
                </IconContext.Provider>

                <p>{a.capacity} vagas</p>
              </ActivityStatusDiv>
            </>
          );
        })}
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

  h1 {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;

    margin-bottom: 6px;
  }

  p {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
  }
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
