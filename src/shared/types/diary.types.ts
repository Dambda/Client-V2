export interface DiaryViewMockData {
    id: number;
    title: string;
    content: string;
    date: string;
    contentImg?: string;
    coverImg?: string;
}

export type MoodType = 'joy' | 'sad' | 'rage' | 'anxiety' | 'calm';

export interface IemotionAnalysis {
    id: string;
    mood: MoodType;
    emotionKeyword: string[];
    comment: string;
}
