'use client';

import DiaryView from '@/shared/components/diary-view/DiaryView';
import { diaryViewMock } from '@/shared/mocks/diary/diaryViewMock';
import { useParams } from 'next/navigation';

export default function Diary() {
    const diaryMock = diaryViewMock; // diary의 정보를 받아오는 api 호출

    return <DiaryView mode="default" {...diaryMock} />;
}
