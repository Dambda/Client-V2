import { DiaryViewMockData } from '../types/diary.types';
import test1 from '../../../public/next.svg';

export const diaryViewMock: DiaryViewMockData[] = [
    {
        id: 1,
        mode: 'default',
        title: '제목',
        content: '오늘은 날씨가 흐리고...',
        date: '01월 10일 오후 3:42',
        contentImg: test1,
    },
    {
        id: 2,
        mode: 'default',
        title: '제목',
        content: '오늘은 날씨가 흐리고...',
        date: '01월 10일 오후 3:42',
        coverImg: test1,
        contentImg: test1,
    },
    {
        id: 3,
        mode: 'feature',
        title: '제목',
        content: '오늘은 날씨가 흐리고 ...',
        date: '01월 10일 오후 3:42',
        coverImg: test1,
        contentImg: test1,
    },
    {
        id: 4,
        mode: 'feature',
        title: '제목',
        content: '오늘은 날씨가 흐리고 ...',
        date: '01월 10일 오후 3:42',
        contentImg: test1,
    },
    {
        id: 5,
        mode: 'calendar',
        title: '제목',
        content: '오늘은 날씨가 흐리고 ...',
        date: '01월 10일 오후 3:42',
        coverImg: test1,
        contentImg: test1,
    },
    {
        id: 6,
        mode: 'calendar',
        title: '제목',
        content: '오늘은 날씨가 흐리고 ...',
        date: '01월 10일 오후 3:42',
        contentImg: test1,
    },
];
