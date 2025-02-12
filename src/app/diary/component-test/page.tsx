import DiaryView from '@/shared/components/diary-view/DiaryView';
import { diaryViewMock } from '@/shared/mocks/DiaryViewMock';

export default function DiaryComponentTest() {
    return (
        <div>
            {diaryViewMock.map((diary, index) => (
                <div key={diary.id}>
                    <DiaryView {...diary} />
                    {index < diaryViewMock.length - 1 && <br />}
                </div>
            ))}
        </div>
    );
}
