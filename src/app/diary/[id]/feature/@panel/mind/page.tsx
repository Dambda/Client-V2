import ReadMind from '@/features/diary-view/ReadMiind';

type MoodType = 'joy' | 'sad' | 'rage' | 'anxiety' | 'calm';

export interface IEmotionAnalysis {
    mood: MoodType;
    emotionKeyword: string[];
    comment: string;
}

export default function PanelPage({ params }: { params: { id: string } }) {
    console.log(params.id); // id로 마음 읽기 정보 조회 후 props로 전달
    // 일기의 기분(기쁨 (joy), 슬픔(sad), 분노(rage), 불안(anxiety), 평온(calm) 중 하나), 감정들 요약(편안한, 고요한, 등등..), 당신을 위한 한 마디 내용

    const response: IEmotionAnalysis = {
        mood: 'joy',
        emotionKeyword: ['편안한', '고요한'],
        comment:
            '가을의 찬 바람과 물든 나무들 속에서 느낀 평온함처럼, 바쁜 하루 중에도 잠시 멈춰 마음을 쉬게 해주는 순간을 소중히 간직하세요.',
    };

    return (
        <div>
            <ReadMind response={response}></ReadMind>
        </div>
    );
}
