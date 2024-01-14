import { RequestData } from '@/type';

export const fetchClothes = async (params: RequestData) => {
  const res = await fetch('/api/clothes', {
    body: JSON.stringify(params),
    method: 'POST',
  });

  return res.json();
};
