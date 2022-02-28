import {DataTypes} from "sequelize";

const Users = {
    id: {
        type: DataTypes.STRING(1054),
        defaultValue: "",
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    emailVerified: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    ethAddress: {type: DataTypes.STRING}
}

export default Users;