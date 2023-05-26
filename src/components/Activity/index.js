/* eslint-disable */
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useActivities from '../../hooks/api/useActivity';
import { ActivityDiv } from './ActivityDiv';

const response = [
  {
    date: '22/10',
    weekday: 'Sexta',
    activities: [
      {
        name: 'Atividade 1',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: false,
      },
      {
        name: 'Atividade 2',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: true,
      },
      {
        name: 'Atividade 3',
        local: 'Auditório Lateral',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 0,
        userIncluded: false,
      },
      {
        name: 'Atividade 4',
        local: 'Sala de Workshop',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: false,
      },
    ],
  },
  {
    date: '23/10',
    weekday: 'Sabado',
    activities: [
      {
        name: 'Atividade 11',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: false,
      },
      {
        name: 'Atividade 12',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: true,
      },
      {
        name: 'Atividade 13',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 0,
        userIncluded: false,
      },
      {
        name: 'Atividade 14',
        local: 'Sala de Workshop',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: false,
      },
    ],
  },
  {
    date: '24/10',
    weekday: 'Domingo',
    activities: [
      {
        name: 'Atividade 21',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: false,
      },
      {
        name: 'Atividade 22',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: true,
      },
      {
        name: 'Atividade 23',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 0,
        userIncluded: false,
      },
      {
        name: 'Atividade 24',
        local: 'Auditório Principal',
        startHour: '09:00',
        endHour: '10:00',
        vacancies: 35,
        userIncluded: false,
      },
    ],
  },
];

const locais = ['Auditório Principal', 'Auditório Lateral', 'Sala de Workshop'];

export function ActivitiesPage() {
  const { getActivities } = useActivities();
  const [selectedDay, setSelectedDay] = React.useState(response[0].date);
  const [activities, setActivities] = useState();
  const [activitiesError, setActivitiesError] = useState('');


  useEffect(async () => {
    try {
      const activities = await getActivities();
      setActivities(activities);

      console.log('useEfect', activities);
    } catch (error) {
      setActivitiesError(error.response.data.message)
    }
    
  }, []);

  function renderActivities() {
    for (let local of activities) {
      console.log(local, item);
      if (local === item) {
        return <ActivityDiv />;
      }
    }
  }

  return (
    <>
      <Screen>
        {activitiesError == '' ? 
        (<>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <DaysDiv>
          {response.map((item) => {
            return item.date === selectedDay ? (
              <DayBoxSelected>
                {item.weekday}, {item.date}
              </DayBoxSelected>
            ) : (
              <DayBox onClick={() => setSelectedDay(item.date)}>
                {item.weekday}, {item.date}
              </DayBox>
            );
          })}
        </DaysDiv>
        <RoomNameDiv>
          {locais.map((item) => {
            return (
              <div>
                <StyledSubtitle variant="h6">{item}</StyledSubtitle>
              </div>
            );
          })}
        </RoomNameDiv>
        <ScheduleDiv>
          {locais.map((item, i) => {
            return (
              <Separator border={i === response.length - 1 ? '0' : '1'}>
                {activities &&
                  activities.length > 0 &&
                  activities[i] &&
                  activities[i].map((a) => (
                    <ActivityDiv
                      key={a.id}
                      name={a.name}
                      startsAt={a.startsAt}
                      endsAt={a.endsAt}
                      capacity={a.capacity}
                    />
                  ))}
              </Separator>
            );
          })}
        </ScheduleDiv></>) :
        activitiesError == 'notPaidYetError' ?
        <SubscriptionBoxMessage>
          <h4>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</h4>
        </SubscriptionBoxMessage> :
        activitiesError == 'isRemoteTycketError' ?
        <SubscriptionBoxMessage>
        <h4>Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.</h4>
      </SubscriptionBoxMessage> :
      <SubscriptionBoxMessage>
      <h4>erro no servidor</h4>
    </SubscriptionBoxMessage>
      }
      </Screen>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Screen = styled.div`
  font-family: 'Roboto' sans-serif;

  h1 {
    font-size: 34px;
    line-height: 40px;
  }

  h2 {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 18px;
    color: #8e8e8e;
  }
`;

const DaysDiv = styled.div`
  display: flex;
`;

const DayBox = styled.div`
  height: 37px;
  width: 131px;
  border-radius: 4px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

  margin: 0px 17px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 2px 10px 0px #00000040;

  background-color: #e0e0e0;
`;

const DayBoxSelected = styled.div`
  height: 37px;
  width: 131px;
  border-radius: 4px;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;

  margin: 0px 17px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 2px 10px 0px #00000040;

  background-color: #ffd37d;
`;

const ScheduleDiv = styled.div`
  height: 392px;
  width: 864px;

  border: 1px solid #d7d7d7;

  display: flex;
`;

const Separator = styled.div`
  height: 392px;
  flex: 1;
  border-right: ${(props) => props.border}px solid #d7d7d7;

  padding: 10px;
`;

const RoomNameDiv = styled.div`
  width: 864px;

  display: flex;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSubtitle = styled.h2`
  margin-top: 37px;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 18px;
  color: #8e8e8e;
`;

const SubscriptionBoxMessage = styled.div`
  width: 420px;
  height: 46px;
  margin: 243px auto;
  text-align: center;
  h4 {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;




// (<StyledTypography variant="h4">Escolha de atividades</StyledTypography>
//         <DaysDiv>
//           {response.map((item) => {
//             return item.date === selectedDay ? (
//               <DayBoxSelected>
//                 {item.weekday}, {item.date}
//               </DayBoxSelected>
//             ) : (
//               <DayBox onClick={() => setSelectedDay(item.date)}>
//                 {item.weekday}, {item.date}
//               </DayBox>
//             );
//           })}
//         </DaysDiv>
//         <RoomNameDiv>
//           {locais.map((item) => {
//             return (
//               <div>
//                 <StyledSubtitle variant="h6">{item}</StyledSubtitle>
//               </div>
//             );
//           })}
//         </RoomNameDiv>
//         <ScheduleDiv>
//           {locais.map((item, i) => {
//             return (
//               <Separator border={i === response.length - 1 ? '0' : '1'}>
//                 {activities &&
//                   activities.length > 0 &&
//                   activities[i] &&
//                   activities[i].map((a) => (
//                     <ActivityDiv
//                       key={a.id}
//                       name={a.name}
//                       startsAt={a.startsAt}
//                       endsAt={a.endsAt}
//                       capacity={a.capacity}
//                     />
//                   ))}
//               </Separator>
//             );
//           })}
//         </ScheduleDiv>)