import 'dotenv/config';
import * as joi from 'joi';
import { RVIACAL_SERVICE } from './services';

interface EnvVars {

  PORT: number;

  NATS_SERVERS: string[];
  PATH_PROJECTS: string;
}

const envsSchema = joi.object({

  PORT: joi.number().required(),

  NATS_SERVERS: joi.array().items( joi.string() ).required(),
  PATH_PROJECTS: joi.string().required(),

})
.unknown(true);

const { error, value } = envsSchema.validate({ 
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(',')
});

if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}

const envVars:EnvVars = value;


export const envs = {
  port: envVars.PORT,
  natsServes: envVars.NATS_SERVERS,
  pathProjects: envVars.PATH_PROJECTS,
}
