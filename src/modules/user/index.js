import React, { memo } from 'react';
import { UserLayout } from './layout';
import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/selectors';


export const User = memo(() => {

const user = useSelector(selectUser);

return (
    <UserLayout
      user={user}
    />
  );
});