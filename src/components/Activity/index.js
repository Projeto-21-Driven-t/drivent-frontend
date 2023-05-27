/* eslint-disable */
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useActivities from '../../hooks/api/useActivity';
import { ActivityDiv } from './ActivityDiv';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

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
  const { getActivities, activitiesLoading, activitiesError } = useActivities();
  const [selectedDay, setSelectedDay] = React.useState();
  const [activities, setActivities] = useState();
  const [eventDays, setEventDays] = useState();
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  console.log(activities);
  console.log(typeof activities);

  //   useEffect(async () => {
  //     const response = await getActivities();
  //     setActivities(response);

  //     console.log( activities);
  //     console.log(typeof(activities))
  //   }, []);

  //   function renderActivities() {
  //     for (let local of activities) {
  //       console.log(local, item);
  //       if (local === item) {
  //         return <ActivityDiv />;
  //       }
  //     }
  //   }
  useEffect(async () => {
    const activities = await getActivities();
    setActivities(activities);
    activities && getEventDays(activities);
  }, []);

  function getEventDays(activities) {
    const activityDates = activities.map((a) => a.startsAt.replace('/23', '').split(' ')[0]);
    const eventDays = Array.from(new Set(activityDates));
    setEventDays(eventDays);
    setSelectedDay(eventDays[0]);
  }

  return (
    <>
      <Screen>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <DaysDiv>
          {eventDays?.map((d) =>
            d === selectedDay ? (
              <DayBoxSelected>
                {weekdays[dayjs(d, 'DD/MM').day()]}, {d}
              </DayBoxSelected>
            ) : (
              <DayBox onClick={() => setSelectedDay(d)}>
                {weekdays[dayjs(d, 'DD/MM').day()]}, {d}
              </DayBox>
            )
          )}
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
                {activities?.filter((a) => selectedDay ? a.startsAt.slice(0, 5) === selectedDay : a).map((a) => {
                  if (a.place === item) return <ActivityDiv activity={a} />;
                })}
              </Separator>
            );
          })}
        </ScheduleDiv>
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
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
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
