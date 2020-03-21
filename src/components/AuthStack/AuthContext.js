import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import database from '../../../database.js';

export const Context = createContext({});

export const Provider = props => {
  // Initial values are obtained from the props
  var sportsInitialState = database.tables.sports.map(obj=> ({ ...obj, checked: false }))

  // Use State to keep the values
  const [sports, setSports] = useState(sportsInitialState);
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');

  const handleCheckBox = (sport) => {
    var newSportsState = sports.map((obj) => {
      if(obj.sid == sport.sid){
        obj.checked = !obj.checked;
      }
      return obj;
    });
    setSport(newSportsState);
  }

  // Make the context object:
  const authContext = {
    sports,
    setSports,
    gender,
    setGender,
    status,
    setStatus,
    handleCheckBox
  };

  // pass the value in provider and return
  return <Context.Provider value={authContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;