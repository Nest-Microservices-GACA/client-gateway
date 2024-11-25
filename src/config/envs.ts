import 'dotenv/config';
import * as joi from 'joi';
import { RVIACAL_SERVICE } from './services';

interface EnvVars {

  PORT: number;

  LENGUAJES_MICROSERVICE_HOST: string;
  LENGUAJES_MICROSERVICE_PORT: number;

  RVIAAC_MICROSERVICE_HOST: string;
  RVIAAC_MICROSERVICE_PORT: number;

  RVIASA_MICROSERVICE_HOST: string;
  RVIASA_MICROSERVICE_PORT: number;

  USUARIOS_MICROSERVICE_HOST: string;
  USUARIOS_MICROSERVICE_PORT: number;

  RVIACO_MICROSERVICE_HOST: string;
  RVIACO_MICROSERVICE_PORT: number;

  AUTH_MICROSERVICE_HOST: string;
  AUTH_MICROSERVICE_PORT: number;

  RVIACP_MICROSERVICE_HOST: string;
  RVIACP_MICROSERVICE_PORT: number;

  RVIACAL_MICROSERVICE_HOST: string;
  RVIACAL_MICROSERVICE_PORT: number;

  RVIADOC_MICROSERVICE_HOST: string;
  RVIADOC_MICROSERVICE_PORT: number;

  RVIAPRODOC_MICROSERVICE_HOST: string;
  RVIAPRODOC_MICROSERVICE_PORT: number;

  RVIAMI_MICROSERVICE_HOST: string,
  RVIAMI_MICROSERVICE_PORT: number
=======
>>>>>>> parent of f309c6c (RVIACAL, RVIADOC, RVIAPRODOC)
  // NATS_SERVERS: string[];
}

const envsSchema = joi.object({

  PORT: joi.number().required(),

  LENGUAJES_MICROSERVICE_HOST: joi.string().required(),
  LENGUAJES_MICROSERVICE_PORT: joi.number().required(),

  RVIAAC_MICROSERVICE_HOST: joi.string().required(),
  RVIAAC_MICROSERVICE_PORT: joi.number().required(),

  RVIASA_MICROSERVICE_HOST: joi.string().required(),
  RVIASA_MICROSERVICE_PORT: joi.number().required(),

  USUARIOS_MICROSERVICE_HOST: joi.string().required(),
  USUARIOS_MICROSERVICE_PORT: joi.number().required(),
  
  RVIACO_MICROSERVICE_HOST: joi.string().required(),
  RVIACO_MICROSERVICE_PORT: joi.number().required(),
  
  AUTH_MICROSERVICE_HOST: joi.string().required(),
  AUTH_MICROSERVICE_PORT: joi.number().required(),
  
  RVIACP_MICROSERVICE_HOST: joi.string().required(),
  RVIACP_MICROSERVICE_PORT: joi.number().required(),

  RVIACAL_MICROSERVICE_HOST: joi.string().required(),
  RVIACAL_MICROSERVICE_PORT: joi.number().required(),

  RVIADOC_MICROSERVICE_HOST: joi.string().required(),
  RVIADOC_MICROSERVICE_PORT: joi.number().required(),

  RVIAPRODOC_MICROSERVICE_HOST: joi.string().required(),
  RVIAPRODOC_MICROSERVICE_PORT: joi.number().required(),

<<<<<<< HEAD
  RVIAMI_MICROSERVICE_HOST: joi.string().required(),
  RVIAMI_MICROSERVICE_PORT: joi.number().required(),

=======
>>>>>>> parent of f309c6c (RVIACAL, RVIADOC, RVIAPRODOC)
=======
>>>>>>> parent of bddb525 (RVIACAL, RVIADOC, RVIAPRODOC)
  // NATS_SERVERS: joi.array().items( joi.string() ).required(),

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
  lenguajesMicroserviceHost: envVars.LENGUAJES_MICROSERVICE_HOST,
  lenguajesMicroservicePort: envVars.LENGUAJES_MICROSERVICE_PORT,
  RVIAAC_MicroserviceHost: envVars.RVIAAC_MICROSERVICE_HOST,
  RVIAAC_MicroservicePort: envVars.RVIAAC_MICROSERVICE_PORT,
  RVIASA_MicroserviceHost: envVars.RVIASA_MICROSERVICE_HOST,
  RVIASA_MicroservicePort: envVars.RVIASA_MICROSERVICE_PORT,
  usuariosMicroserviceHost: envVars.USUARIOS_MICROSERVICE_HOST,
  usuariosMicroservicePort: envVars.USUARIOS_MICROSERVICE_PORT,

  RVIACO_MicroserviceHost: envVars.RVIACO_MICROSERVICE_HOST,
  RVIACO_MicroservicePort: envVars.RVIACO_MICROSERVICE_PORT,
  AuthMicroserviceHost: envVars.AUTH_MICROSERVICE_HOST,
  AuthMicroservicePort: envVars.AUTH_MICROSERVICE_PORT,
  RVIACP_MicroserviceHost: envVars.RVIACP_MICROSERVICE_HOST,
  RVIACP_MicroservicePort: envVars.RVIACP_MICROSERVICE_PORT,
  RVIACAL_MicroserviceHost: envVars.RVIACAL_MICROSERVICE_HOST,
  RVIACAL_MicroservicePort: envVars.RVIACAL_MICROSERVICE_PORT,
  RVIADOC_MicroserviceHost: envVars.RVIADOC_MICROSERVICE_HOST,
  RVIADOC_MicroservicePort: envVars.RVIADOC_MICROSERVICE_PORT,
  RVIAPRODOC_MicroserviceHost: envVars.RVIAPRODOC_MICROSERVICE_HOST,
  RVIAPRODOC_MicroservicePort: envVars.RVIAPRODOC_MICROSERVICE_PORT,
<<<<<<< HEAD
  RviaMicroserviceHost: envVars.RVIAMI_MICROSERVICE_HOST,
  RviaMIMicroservicePort: envVars.RVIAMI_MICROSERVICE_PORT,
=======

>>>>>>> parent of f309c6c (RVIACAL, RVIADOC, RVIAPRODOC)
=======
>>>>>>> parent of bddb525 (RVIACAL, RVIADOC, RVIAPRODOC)
}
