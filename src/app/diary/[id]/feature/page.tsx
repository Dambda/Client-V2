import DiaryView from '@/shared/components/diary-view/DiaryView';
import { diaryViewMock } from '@/shared/mocks/DiaryViewMock';

export default function DiaryFeatureMode() {
    const DiaryMock = diaryViewMock;
    return (
        <div>
            <DiaryView mode="feature" {...DiaryMock} />
        </div>
    );
}
