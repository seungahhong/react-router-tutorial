import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Template.module.scss';
import Navigation from './Navigation';

type TemplateProps = {
  children: React.ReactChild;
};

const Template = ({ children }: TemplateProps) => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'red',
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/with/1"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            User Params with router
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user/1"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            User Params hooks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/useroutlet/1"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            User Outlet Params hooks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/item/2"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            User Params render
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/optional"
            end
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Optional None params
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/optional/3"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            Optional params
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/main"
            style={({ isActive }) => (isActive ? activeStyle : {})}
          >
            redirect from main to usermain
          </NavLink>
        </li>
      </ul>
      <Navigation />
      {children}
    </div>
  );
};

Template.defaultProps = {};

export default Template;
