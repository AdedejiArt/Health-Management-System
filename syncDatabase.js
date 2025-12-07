import { sequelize } from './db/dbConnect.js';
import User from './models/usersmodel.js';
import Patient from './models/Patientsmodel.js';
import Hospital from './models/Hospitalmodel.js';
import HospitalUser from './models/HospitalusersModel.js';
import Appointment from './models/appointmentsModel.js';
import HospitalAdmin from './models/hospitalAdminModel.js';
import Record from './models/recordsModel.js';

async function syncDatabase() {
  try {
    console.log('Starting database synchronization...');

    // Test connection first
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    // Sync all models (create tables)
    await sequelize.sync({ force: false }); // Normal sync mode

    console.log('All models were synchronized successfully.');
    console.log('Database tables created successfully!');

    // Close connection
    await sequelize.close();
    console.log('Database connection closed.');

  } catch (error) {
    console.error('Unable to sync database:', error);
    process.exit(1);
  }
}

syncDatabase();