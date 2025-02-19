import { ReactNode } from 'react';
import S from './DiaryFeature.module.scss';
import { diaryViewMock } from '@/shared/mocks/diary/diaryViewMock';
import DiaryView from '@/shared/components/diary-view/DiaryView';

export default function Layout({ children }: { children: ReactNode }) {
    const diaryMock = diaryViewMock; // diary의 정보를 받아오는 api 호출
    return (
        <div className={S.container}>
            {/* feature 모드의 일기 컴포넌트 */}
            <DiaryView mode="feature" {...diaryMock} />

            {/* 사이드 패널 ex. 덧말, 마음읽기 */}
            {children}
        </div>
    );
}
