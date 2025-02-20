import ReadMind from '@/features/diary-view/read-mind/ui/ReadMind';
import { emotionAnalysis } from '@/shared/mocks/diary/emotionAnalysis';
import { IemotionAnalysis } from '@/shared/types/diary.types';

export default function PanelPage() {
    // export default function PanelPage({ params }: { params: { id: string } }) {
    // console.log(params.id); // id로 마음 읽기 정보 조회 후 props로 전달
    // 일기의 기분(기쁨 (joy), 슬픔(sad), 분노(rage), 불안(anxiety), 평온(calm) 중 하나), 감정들 요약(편안한, 고요한, 등등..), 당신을 위한 한 마디 내용

    const response: IemotionAnalysis = emotionAnalysis;

    return (
        <div>
            <ReadMind response={response}></ReadMind>
        </div>
    );
}
