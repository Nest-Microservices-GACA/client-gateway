import 'dotenv/config';
import * as joi from 'joi';

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
  UsuariosMicroserviceHost: envVars.USUARIOS_MICROSERVICE_HOST,
  UsuariosMicroservicePort: envVars.USUARIOS_MICROSERVICE_PORT,
  RVIACO_MicroserviceHost: envVars.RVIACO_MICROSERVICE_HOST,
  RVIACO_MicroservicePort: envVars.RVIACO_MICROSERVICE_PORT,
  AuthMicroserviceHost: envVars.AUTH_MICROSERVICE_HOST,
  AuthMicroservicePort: envVars.AUTH_MICROSERVICE_PORT,
  RVIACP_MicroserviceHost: envVars.RVIACP_MICROSERVICE_HOST,
  RVIACP_MicroservicePort: envVars.RVIACP_MICROSERVICE_PORT,
  // natsServers: envVars.NATS_SERVERS,
}