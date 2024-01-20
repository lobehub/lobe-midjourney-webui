import urlJoin from 'url-join';

import { getServerConfig } from '@/config/server';

export const runtime = 'edge';

const { MIDJOURNEY_PROXY_URL: base } = getServerConfig();

const getBase = (req: Request) => {
  const userDefineBaseUrl = req.headers.get('X-Midjourney-Proxy-Url');

  return userDefineBaseUrl || base;
};

export const POST = async (req: Request) => {
  const baseUrl = getBase(req);

  if (!baseUrl) return new Response(JSON.stringify({ type: 'NO_BASE_URL' }), { status: 400 });

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

  if (!baseUrl) return new Response(JSON.stringify({ type: 'NO_BASE_URL' }), { status: 400 });

  const path = new URL(req.url).searchParams.get('path')!;

  return fetch(urlJoin(baseUrl, path), { headers: { 'Content-Type': 'application/json' } });
};
