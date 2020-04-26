import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import ListItem from '@material-ui/core/ListItem/ListItem';

import { calendarStringsUsers } from '../../../utils/time';
import Photo from '../../molecules/Photo';

const User = styled(ListItem)`
  padding: 10px;
`;
const UserStatus = styled.div`
  position: absolute;
  color: #8a8d91;
  right: 10px;
  top: 10px;
  font-size: 11px;
`;
const UserDetails = styled.div`
  padding-left: 10px;
  overflow: hidden;
  margin-top: 5px;
`;
const UserName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #43444f;
`;
const UserLastMessage = styled.p`
  font-size: 14px;
  color: #8a8d91;
  width: 1000px;
`;

const UserItem = ({name, lastMessage, lastMessageTs}) => {
  return (
    <User button>
      <Photo />
      <UserStatus>
        <Moment calendar={calendarStringsUsers} date={lastMessageTs} />
      </UserStatus>
    <UserDetails>
        <UserName>{name}</UserName>
        <UserLastMessage>
          {lastMessage}
        </UserLastMessage>
      </UserDetails>
    </User>
  );
};

export default UserItem;
