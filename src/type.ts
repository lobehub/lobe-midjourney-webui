export interface ClothesItem {
  description: string;
  name: string;
}
type Mood = 'happy' | 'sad' | 'anger' | 'fear' | 'surprise' | 'disgust';

export interface ResponseData {
  clothes: ClothesItem[];
  mood: Mood;
  today: number;
}

export interface RequestData {
  gender: 'man' | 'woman';
  mood: Mood;
}
