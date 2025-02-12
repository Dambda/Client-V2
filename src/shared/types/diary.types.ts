import { DiaryViewMode } from '../components/diary-view/DiaryView';

export interface DiaryViewMockData {
    id: number;
    mode: DiaryViewMode;
    title: string;
    content: string;
    date: string;
    contentImg?: string;
    coverImg?: string;
}
