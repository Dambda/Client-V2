import { diaryViewMock } from '@/shared/mocks/diary/diaryViewMock';
import DiaryView from '@/shared/components/diary-view/DiaryView';

export default function PanelPage() {
    const diaryMock = diaryViewMock; // diary의 정보를 받아오는 api 호출
    return <DiaryView mode="feature" {...diaryMock} />;
}
