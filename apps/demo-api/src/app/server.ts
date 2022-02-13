import { fastify, FastifyInstance, FastifyPluginOptions } from 'fastify';
import sensible from 'fastify-sensible';
import cors from 'fastify-cors';
import { health } from '../routes/health';

export async function initFastify(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.register(sensible);
  fastify.register(cors, {
    origin: false,
  });
}

export const createServer = async () => {
  const server = fastify();
  try {
    await server.register(initFastify);
  } catch (err) {
    console.log('Error init server', err);
    process.exit(0);
  }

  await server.register(health);

  return server;
};
