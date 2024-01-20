import { Imgur } from './imgur';

export const POST = async (req: Request) => {
  const imageBlob = await req.blob();

  const imgur = new Imgur();

  const cdnUrl = await imgur.upload(imageBlob);

  return new Response(JSON.stringify({ url: cdnUrl }));
};
// import { Imgur } from './imgur';

export const runtime = 'edge';

// export const POST = async (req: Request) => {
//   const { url } = await req.json();
//
//   const imgur = new Imgur();
//
//   const image = await fetch(url);
//
//   const cdnUrl = await imgur.upload(await image.blob());
//
//   return new Response(JSON.stringify({ url: cdnUrl }));
// };
