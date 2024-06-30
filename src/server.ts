import { createApp } from './app/app';
import { loadEnv } from '../config/env.config';
import { loadAppConfig } from '../config/app/app.config';
import { loadDBConfig } from '../config/server/db.config';


// Load environmen variables
loadEnv();

// Load application configuration
const appConfig = loadAppConfig();
const dbConfig = loadDBConfig();

const app = createApp();

const PORT = appConfig.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
             
