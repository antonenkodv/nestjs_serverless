import { databaseConfig as dbConfig } from './database.config';
import {Sequelize, SequelizeOptions} from 'sequelize-typescript';

export const databaseProviders = [{
    provide: "SEQUELIZE",
    useFactory: async () => {
        const sequelize = new Sequelize(dbConfig as SequelizeOptions);
        sequelize.addModels(['models here']);
        await sequelize.sync();
        return sequelize;

    },
}];
