import { AppState } from './initialState';

export const mockState: AppState = {
  activeTaskId: '1705298817774894',
  prompts: 'cute little duckling, soft fluffy feathers, bright eyes, standing by a pond',
  runningTaskIds: [],
  tasks: [
    {
      action: 'IMAGINE',
      description:
        '/imagine cute little duckling, soft fluffy feathers, bright eyes, standing by a pond',
      finishTime: 1705298852605,
      id: '1705298817774894',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1174150905801736255/1196334838370816040/meng1011_cute_little_duckling_soft_fluffy_feathers_bright_eyes__19295cb6-11f9-49c9-a012-5e0bf76946d4.png?ex=65b740a4&is=65a4cba4&hm=ded84a6c8600b73135a9607e0ea4eca14e20eb4a566bf614e1f98450b75585be&',
      progress: '100%',
      prompt: 'cute little duckling, soft fluffy feathers, bright eyes, standing by a pond',
      promptEn: 'cute little duckling, soft fluffy feathers, bright eyes, standing by a pond',
      properties: {
        discordInstanceId: '1174150905801736255',
        finalPrompt:
          'cute little duckling, soft fluffy feathers, bright eyes, standing by a pond --v 6.0 --s 250',
        flags: 0,
        messageHash: '19295cb6-11f9-49c9-a012-5e0bf76946d4',
        messageId: '1196334838697951244',
        nonce: '1467884005067145216',
        progressMessageId: '1196334697198919881',
      },
      startTime: 1705298817775,
      state: null,
      status: 'SUCCESS',
      submitTime: 1705298817774,
    },
    {
      action: 'IMAGINE',
      description: '/imagine a dog',
      failReason: null,
      finishTime: 1705301559304,
      id: '1705301507336856',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1174150905801736255/1196346191131197490/meng1011_a_dog_a4335ba5-eafa-41b9-baed-a6bb4901e61d.png?ex=65b74b37&is=65a4d637&hm=2e2d695575a05a66b9df93293e0da112e28b6f7a5c9e06ca4bed571b50d65db2&',
      progress: '100%',
      prompt: 'a dog',
      promptEn: 'a dog',
      properties: {
        discordInstanceId: '1174150905801736255',
        finalPrompt: 'a dog --v 6.0 --s 250',
        flags: 0,
        messageHash: 'a4335ba5-eafa-41b9-baed-a6bb4901e61d',
        messageId: '1196346191693226096',
        nonce: '1467895285907800064',
        notifyHook: null,
        progressMessageId: '1196345977104253018',
      },
      startTime: 1705301507337,
      state: null,
      status: 'SUCCESS',
      submitTime: 1705301507336,
    },
    {
      action: 'IMAGINE',
      description:
        '/imagine Overhead drone view, speed to the clouds, black and dark green blue tones and a powerful sense of oppression, Portrait of a dragon with two massive wings, hugging body tightly covering the sky, close shot, movie poster vibe, thunderstorm, at night, dynamic photography, huge whirlpool, towering tsunami, photo studio, vibrant vivid color, 135mm Canon lens, Live movie, similar to Pacific Rim --no legs, person, people, man, woman, anime, cg, game --ar 21:9 --v 6',
      failReason: null,
      finishTime: 1705305600408,
      id: '1705305488385054',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1174150905801736255/1196363140699533312/meng1011_Overhead_drone_view_speed_to_the_clouds_black_and_dark_2631fc4d-31d2-4925-9d55-02d010943bdf.png?ex=65b75b00&is=65a4e600&hm=a71f0c85796178895341ae05561e97b2ad5f3a1483100ad2bf294276d1d07065&',
      progress: '100%',
      prompt:
        'Overhead drone view, speed to the clouds, black and dark green blue tones and a powerful sense of oppression, Portrait of a dragon with two massive wings, hugging body tightly covering the sky, close shot, movie poster vibe, thunderstorm, at night, dynamic photography, huge whirlpool, towering tsunami, photo studio, vibrant vivid color, 135mm Canon lens, Live movie, similar to Pacific Rim --no legs, person, people, man, woman, anime, cg, game --ar 21:9 --v 6',
      promptEn:
        'Overhead drone view, speed to the clouds, black and dark green blue tones and a powerful sense of oppression, Portrait of a dragon with two massive wings, hugging body tightly covering the sky, close shot, movie poster vibe, thunderstorm, at night, dynamic photography, huge whirlpool, towering tsunami, photo studio, vibrant vivid color, 135mm Canon lens, Live movie, similar to Pacific Rim --no legs, person, people, man, woman, anime, cg, game --ar 21:9 --v 6',
      properties: {
        discordInstanceId: '1174150905801736255',
        finalPrompt:
          'Overhead drone view, speed to the clouds, black and dark green blue tones and a powerful sense of oppression, Portrait of a dragon with two massive wings, hugging body tightly covering the sky, close shot, movie poster vibe, thunderstorm, at night, dynamic photography, huge whirlpool, towering tsunami, photo studio, vibrant vivid color, 135mm Canon lens, Live movie, similar to Pacific Rim --no legs, person, people, man, woman, anime, cg, game --ar 21:9 --v 6.0 --s 250',
        flags: 0,
        messageHash: '2631fc4d-31d2-4925-9d55-02d010943bdf',
        messageId: '1196363141219618836',
        nonce: '1467911983637544960',
        notifyHook: null,
        progressMessageId: '1196362675622514718',
      },
      startTime: 1705305488386,
      state: null,
      status: 'SUCCESS',
      submitTime: 1705305488385,
    },
    {
      action: 'IMAGINE',
      description:
        '/imagine a tall, rocky mountain covered in snow and fog, in the style of santiago rusinol, gritty reportage, juxtaposition of hard and soft lines, óscar domínguez, rough textures, low depth of field --ar 16:9 --v 6.0',
      failReason: null,
      finishTime: 1705305958903,
      id: '1705305919492541',
      imageUrl:
        'https://cdn.discordapp.com/attachments/1174150905801736255/1196364644395257886/meng1011_a_tall_rocky_mountain_covered_in_snow_and_fog_in_the_s_dd23072e-a024-48d9-a7ae-c0ef003856fd.png?ex=65b75c66&is=65a4e766&hm=cde3f4b43218ac4660e542aefe2ea401858d35a40a6cb62efefbaec70f57bee4&',
      progress: '100%',
      prompt:
        'a tall, rocky mountain covered in snow and fog, in the style of santiago rusinol, gritty reportage, juxtaposition of hard and soft lines, óscar domínguez, rough textures, low depth of field --ar 16:9 --v 6.0',
      promptEn:
        'a tall, rocky mountain covered in snow and fog, in the style of santiago rusinol, gritty reportage, juxtaposition of hard and soft lines, óscar domínguez, rough textures, low depth of field --ar 16:9 --v 6.0',
      properties: {
        discordInstanceId: '1174150905801736255',
        finalPrompt:
          'a tall, rocky mountain covered in snow and fog, in the style of santiago rusinol, gritty reportage, juxtaposition of hard and soft lines, óscar domínguez, rough textures, low depth of field --ar 16:9 --v 6.0 --s 250',
        flags: 0,
        messageHash: 'dd23072e-a024-48d9-a7ae-c0ef003856fd',
        messageId: '1196364644835667989',
        nonce: '1467913791831359488',
        notifyHook: null,
        progressMessageId: '1196364488501362728',
      },
      startTime: 1705305919493,
      state: null,
      status: 'SUCCESS',
      submitTime: 1705305919492,
    },
  ],
};
