import fs from 'fs';
import {config} from 'dotenv';

config();

const APP_CENTER_SECRET = process.env.APP_CENTER_SECRET;

console.log(APP_CENTER_SECRET);

const AppCenterConfig = {
  app_secret: APP_CENTER_SECRET,
};

const filePath = 'android/app/src/main/assets/appcenter-config.json';

fs.writeFileSync(filePath, JSON.stringify(AppCenterConfig, null, 2));

console.log('appcenter-config.json created successfully.');
