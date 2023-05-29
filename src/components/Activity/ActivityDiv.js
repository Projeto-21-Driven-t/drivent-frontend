import styled from 'styled-components';
import dayjs from 'dayjs';
import { SelectActivity } from './ChooseActivityButton';
import { useState } from 'react';

export function ActivityDiv({ activity }) {
  const { id, name, capacity, startsAt, endsAt, ingressed } = activity;
  const [localIngressed, setLocalIngressed] = useState(ingressed);
  const start = startsAt.slice(-5);
  const end = endsAt.slice(-5);
  const diff = dayjs(endsAt, 'DD/MM/YY HH:mm').diff(dayjs(startsAt, 'DD/MM/YY HH:mm')) / 3600000 || 1;
  return (
    <>
      <StyleActivityDiv diff={`${diff * 80}px`}>
        <ActivityInfoDiv>
          <ActivityName>{name}</ActivityName>
          <p>
            {start} - {end}
          </p>
        </ActivityInfoDiv>
        <ActivityBorder></ActivityBorder>
        <SelectActivity
          id={id}
          startsAt={startsAt}
          setIngressed={setLocalIngressed}
          ingressed={localIngressed}
          capacity={capacity}
        />
      </StyleActivityDiv>
    </>
  );
}

const StyleActivityDiv = styled.div`
  height: ${(props) => props.diff};
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

const ActivityBorder = styled.div`
  height: 80%;
  border-right: 1px solid #cfcfcf;
  margin-top: 10px;
`;
