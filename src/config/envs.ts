import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  LENGUAJES_MICROSERVICE_HOST: string;
  LENGUAJES_MICROSERVICE_PORT: number;
}

const envsSchema = joi.object({
  PORT: joi.number().required(),
  LENGUAJES_MICROSERVICE_HOST: joi.string().required(),
  LENGUAJES_MICROSERVICE_PORT: joi.number().required(),
})
.unknown(true);

const { error, value } = envsSchema.validate( process.env );


if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}

const envVars:EnvVars = value;


export const envs = {
  port: envVars.PORT,
  lenguajesMicroserviceHost: envVars.LENGUAJES_MICROSERVICE_HOST,
  lenguajesMicroservicePort: envVars.LENGUAJES_MICROSERVICE_PORT
}