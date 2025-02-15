import Image from 'next/image';
import S from './ReadMind.module.scss';

export default function ReadMind() {
    return (
        <div>
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
                    <div></div>
                    <Image alt="d" src="/캐릭터.svg" width={200} height={200} />
                    <div></div>
                </div>
            </div>
            <div>
                <h3>당신을 위한 한마디</h3>
                <span>어쩌구</span>
            </div>
        </div>
    );
}
