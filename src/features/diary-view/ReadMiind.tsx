import Image from 'next/image';
import S from './ReadMind.module.scss';
import { IEmotionAnalysis } from '@/app/diary/[id]/feature/mind/page';

interface IReadMindProps {
    response: IEmotionAnalysis; // response를 객체의 프로퍼티로 정의
}

export default function ReadMind({ response }: IReadMindProps) {
    console.log(response);
    return (
        <div className={`${S.mainContainer} ${S[response.mood]}`}>
            <div className={S.topContainer}>
                <h3 className={S.topTitle}>마음 읽기</h3>
                <span className={S.topContent}>
                    일기 속에 스며든 감정과 생각들을 다시 마주하며, 당신 마음의
                    깊은 이야기를 만나보세요.
                </span>
                <hr className={S.hr} />
            </div>
            <div className={S.midContainer}>
                <h3 className={S.midTitle}>
                    마음에 머물렀던 감정을 떠올려볼까요?
                </h3>
                <div className={S.midBox}>
                    <div>감정들</div>
                    <div className={`${S.imgBox} ${S[response.mood]}`}>
                        <Image
                            alt="d"
                            src={`/character/${response.mood}.svg`}
                            width={130}
                            height={response.mood === 'calm' ? 180 : 130}
                        />
                    </div>
                </div>
            </div>
            <div className={S.bottomContainer}>
                <h3 className={S.bottomTitle}>당신을 위한 한마디</h3>
                <span className={S.bottomContent}>{response.comment}</span>
            </div>
            <div className={S.ment}>
                <span>지금 당신에게 필요한 순간은...</span>
            </div>
        </div>
    );
}
