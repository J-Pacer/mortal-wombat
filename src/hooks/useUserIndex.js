import {useEffect, useState} from 'react';
import {indexBy} from '../utils';
import {listen} from '../firebase';

const indexUsers = (users) => indexBy((u) => u.email, Object.values(users));

export const useUserIndex = (onError) => {
  const [userIndex, setUserIndex] = useState({});
  useEffect(
    () => listen('users', (users) => setUserIndex(indexUsers(users)), onError),
    []
  );
  return userIndex;
};
