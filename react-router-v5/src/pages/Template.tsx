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
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/with/1" activeStyle={activeStyle}>
            User Params with router
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/1" activeStyle={activeStyle}>
            User Params hooks
          </NavLink>
        </li>
        <li>
          <NavLink to="/item/2" activeStyle={activeStyle}>
            User Params render
          </NavLink>
        </li>
        <li>
          <NavLink to="/optional" exact activeStyle={activeStyle}>
            Optional None params
          </NavLink>
        </li>
        <li>
          <NavLink to="/optional/3" activeStyle={activeStyle}>
            Optional params
          </NavLink>
        </li>
        <li>
          <NavLink to="/main" activeStyle={activeStyle}>
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
