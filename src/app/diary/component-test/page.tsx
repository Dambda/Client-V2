import DiaryView from '@/shared/components/diary-view/DiaryView';
import { diaryViewMock } from '@/shared/mocks/DiaryViewMock';

export default function DiaryComponentTest() {
    const diaryMock = diaryViewMock;
    return (
        <div>
            <div key={diaryMock.id}>
                <DiaryView {...diaryMock} mode="default" />
            </div>
        </div>
    );
}
