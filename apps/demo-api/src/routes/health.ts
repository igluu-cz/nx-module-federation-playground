import {
  FastifyPluginOptions,
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from 'fastify';

export async function health(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions
) {
  fastify.route({
    method: 'GET',
    url: '/health',
    handler: onHealth,
  });

  fastify.route({
    method: 'GET',
    url: '/error',
    handler: async () => fastify.httpErrors.notFound(),
  });

  async function onHealth(
    req: FastifyRequest,
    reply: FastifyReply
  ): Promise<{ status: string }> {
    return { status: 'OK' };
  }
}
