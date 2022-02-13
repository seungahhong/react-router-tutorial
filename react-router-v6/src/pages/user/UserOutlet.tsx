import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

type UserProps = {
  id: string;
};

const UserOutlet = () => {
  const { id } = useParams<UserProps>();

  return (
    <>
      <h1>{`User ${id}`}</h1>
      <ul>
        <li>
          <Link to="">Main</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

UserOutlet.defaultProps = {};

export default UserOutlet;
