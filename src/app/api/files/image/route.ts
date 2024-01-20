import { getServerConfig } from '@/config/server';

export const runtime = 'edge';

const baseURL = 'https://api.imgur.com/3';

export const POST = async (req: Request) => {
  const clientId = getServerConfig().IMGUR_CLIENT_ID;

  const res = await fetch(`${baseURL}/upload`, {
    body: await req.blob(),
    headers: {
      Authorization: `Client-ID ${clientId}`,
    },
    method: 'POST',
  }).catch((error) => {
    return new Response(JSON.stringify(error.cause), { status: 400 });
  });

  if (!res.ok) {
    return res;
  }

  const data: UploadResponse = await res.json();

  let url: string | undefined;
  if (data.success) {
    url = data.data.link;
  }

  if (!url) return new Response(JSON.stringify({ error: 'upload failed' }), { status: 500 });

  return new Response(JSON.stringify({ url }));
};

interface UploadResponse {
  data: UploadData;
  status: number;
  success: boolean;
}

interface UploadData {
  account_id: any;
  account_url: any;
  ad_type: any;
  ad_url: any;
  animated: boolean;
  bandwidth: number;
  datetime: number;
  deletehash: string;
  description: any;
  favorite: boolean;
  has_sound: boolean;
  height: number;
  hls: string;
  id: string;
  in_gallery: boolean;
  in_most_viral: boolean;
  is_ad: boolean;
  link: string;
  mp4: string;
  name: string;
  nsfw: any;
  section: any;
  size: number;
  tags: any[];
  title: any;
  type: string;
  views: number;
  vote: any;
  width: number;
}
