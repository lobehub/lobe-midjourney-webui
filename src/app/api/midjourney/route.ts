import urlJoin from 'url-join';

export const runtime = 'edge';

const base = process.env.MIDJOURNEY_PROXY_URL;

const getBase = (req: Request) => {
  const userDefineBaseUrl = req.headers.get('X-Midjourney-Proxy-Url');

  return userDefineBaseUrl || base;
};

export const POST = async (req: Request) => {
  const baseUrl = getBase(req);

  if (!baseUrl) return new Response('no base url', { status: 400 });

  const path = new URL(req.url).searchParams.get('path')!;

  const body = await req.text();

  return fetch(urlJoin(baseUrl, path), {
    body,
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });
};

export const GET = async (req: Request) => {
  const baseUrl = getBase(req);

  if (!baseUrl) return new Response('no base url', { status: 400 });

  const path = new URL(req.url).searchParams.get('path')!;

  return fetch(urlJoin(baseUrl, path), { headers: { 'Content-Type': 'application/json' } });
};
