const INDEX_PATH = '/index.html';

export default {
  async fetch(request, env) {
    if (!env.ASSETS) {
      return new Response('Static assets are unavailable.', { status: 503 });
    }

    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const indexUrl = new URL(INDEX_PATH, request.url);
    return env.ASSETS.fetch(new Request(indexUrl, request));
  }
};
