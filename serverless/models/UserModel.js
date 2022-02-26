import React from 'react';
import { Sequelize, DataTypes } from 'sequelize';

import { sequelizeConfig } from '../utils/db';

const UserModel = sequelizeConfig.define('User', {
  // Model attributes are defined here
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default UserModel;
