/* eslint-disable */
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { IoEnterOutline } from 'react-icons/io5';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const response = [
    {
        date: '22/10',
        weekday: 'Sexta',
        activities: [{
            name: 'Atividade 1',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: false
        },
        {
            name: 'Atividade 2',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: true
        },
        {
            name: 'Atividade 3',
            local: 'Auditório Lateral',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 0,
            userIncluded: false
        },
        {
            name: 'Atividade 4',
            local: 'Sala de Workshop',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: false
        }
        ]
    },
    {
        date: '23/10',
        weekday: 'Sabado',
        activities: [{
            name: 'Atividade 11',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: false
        },
        {
            name: 'Atividade 12',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: true
        },
        {
            name: 'Atividade 13',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 0,
            userIncluded: false
        },
        {
            name: 'Atividade 14',
            local: 'Sala de Workshop',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: false
        }
        ]
    },
    {
        date: '24/10',
        weekday: 'Domingo',
        activities: [{
            name: 'Atividade 21',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: false
        },
        {
            name: 'Atividade 22',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: true
        },
        {
            name: 'Atividade 23',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 0,
            userIncluded: false
        },
        {
            name: 'Atividade 24',
            local: 'Auditório Principal',
            startHour: '09:00',
            endHour: '10:00',
            vacancies: 35,
            userIncluded: false
        }
        ]
    },

]

const locais = [
    'Auditório Principal', 'Auditório Lateral', 'Sala de Workshop'
]
export function ActivitiesPage() {
    const [selectedDay, setSelectedDay] = React.useState(response[0].date)
    return (
        <>
            <Screen>
                <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
                <DaysDiv>
                    {response.map(item => {
                        return (
                            item.date === selectedDay ? <DayBoxSelected>{item.weekday}, {item.date}</DayBoxSelected> : <DayBox onClick={() => setSelectedDay(item.date)}>{item.weekday}, {item.date}</DayBox>
                        )
                    })}
                </DaysDiv>
                <RoomNameDiv>
                    {locais.map(item => {
                        return (
                            <div>
                                <StyledSubtitle variant="h6">{item}</StyledSubtitle>
                            </div>
                        )
                    })}
                </RoomNameDiv>
                <ScheduleDiv>
                    {locais.map((item, i) => {
                        return (
                            <Separator border={i === response.length - 1 ? '0' : '1'}>
                                <ActivityDiv>
                                    <ActivityInfoDiv>
                                        <h1>Minecraft: montando o PC ideal</h1>
                                        <p>09:00 - 10:00</p>
                                    </ActivityInfoDiv>
                                    <ActivityBorder></ActivityBorder>
                                    <ActivityStatusDiv>
                                        <IconContext.Provider value={{size: 25 }}>
                                            <IoEnterOutline />
                                        </IconContext.Provider>
                                        
                                        <p>27 vagas</p>
                                    </ActivityStatusDiv>
                                </ActivityDiv>
                                
                            </Separator>
                        )
                    })}
                </ScheduleDiv>

            </Screen>
        </>
    )
};

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

    background-color: #E0E0E0;

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

    background-color: #FFD37D;
`;

const ScheduleDiv = styled.div`
    height: 392px;
    width: 864px;

    border: 1px solid #D7D7D7;

    display: flex;

`;

const Separator = styled.div`
    height: 392px;
    flex: 1;
    border-right: ${(props) => props.border}px solid #D7D7D7;

    padding: 10px;
`;

const RoomNameDiv = styled.div`
    width: 864px;

    display: flex;

    div{
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

const ActivityDiv = styled.div`
    height: 79px;
    width: 100%;
    border-radius: 5px;

    margin-bottom: 10px;

    display: flex;
    background-color: #F1F1F1;
`

const ActivityInfoDiv = styled.div`
    height: 100%;
    width: 200px;

    padding: 12px 10px;

    

    h1{
        font-family: Roboto;
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: left;

        margin-bottom: 6px;
    }

    p{
        font-family: Roboto;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: left;

    }
`

const ActivityStatusDiv = styled.div`
    height: 100%;
    width: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-family: Roboto;
        font-size: 9px;
        font-weight: 400;
        line-height: 11px;
        letter-spacing: 0em;
        text-align: left;

    }
`

const ActivityBorder = styled.div`
    height: 80%;
    border-right: 1px solid #CFCFCF;
    margin-top: 10px;

`