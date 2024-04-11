import urlJoin from 'url-join';

import { getServerConfig } from '@/config/server';

export const runtime = 'edge';

const { MIDJOURNEY_PROXY_URL: base, MIDJOURNEY_PROXY_API_SECRET: apiSecret } = getServerConfig();

const getBase = (req: Request) => {
  const userDefineBaseUrl = req.headers.get('X-Midjourney-Proxy-Url');

  return userDefineBaseUrl || base;
};

const getAPISecret = (req: Request) => {
  const userDefinedAPISecret = req.headers.get('X-Midjourney-Proxy-Api-Secret');

  return userDefinedAPISecret || apiSecret;
};

export const POST = async (req: Request) => {
  const baseUrl = getBase(req);
  const apiSecret = getAPISecret(req);

  if (!baseUrl) return new Response(JSON.stringify({ type: 'NO_BASE_URL' }), { status: 400 });

  const path = new URL(req.url).searchParams.get('path')!;

  const body = await req.text();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (apiSecret) {
    headers['Mj-Api-Secret'] = apiSecret;
  }

  return fetch(urlJoin(baseUrl, path), {
    body,
    headers,
    method: 'POST',
  });
};

export const GET = async (req: Request) => {
  const baseUrl = getBase(req);
  const apiSecret = getAPISecret(req);

  if (!baseUrl) return new Response(JSON.stringify({ type: 'NO_BASE_URL' }), { status: 400 });

  const path = new URL(req.url).searchParams.get('path')!;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (apiSecret) {
    headers['Mj-Api-Secret'] = apiSecret;
  }

  return fetch(urlJoin(baseUrl, path), {
    headers,
  });
};
