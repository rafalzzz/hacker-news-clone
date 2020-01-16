import React from 'react';

export const UserLayout = ({ user }) => {

  return (
    <div>
      <div className="container text-center" style={{marginTop: '40px'}}>
        <h4>{user.id}</h4>
        <h6>... joined {user.created}, and has {user.karma} karma</h6>
      </div>
    </div>
    )
  };