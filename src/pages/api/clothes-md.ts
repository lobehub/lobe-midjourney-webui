import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { manClothes, womanClothes } from '@/data';
import { RequestData, ResponseData } from '@/type';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { gender, mood } = (await req.json()) as RequestData;

  const clothes = gender === 'man' ? manClothes : womanClothes;

  const result: ResponseData = {
    clothes: mood ? clothes[mood] : Object.values(clothes).flat(),
    mood,
    today: Date.now(),
  };

  return new Response(
    `由于你的心情是${result.mood},我推荐你穿 ${result.clothes.map((c) => c.name).join('、')}。`,
  );
};
