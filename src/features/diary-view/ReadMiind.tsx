import Image from 'next/image';
import S from './ReadMind.module.scss';

export default function ReadMind() {
    return (
        <div className={S.minCotainer}>
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
                    <div className={S.imgBox}>
                        <Image
                            alt="d"
                            src="/캐릭터.svg"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
            <div className={S.bottomContainer}>
                <h3 className={S.bottomTitle}>당신을 위한 한마디</h3>
                <span className={S.bottomContent}>
                    가을의 찬 바람과 물든 나무들 속에서 느낀 평온함처럼, 바쁜
                    하루 중에도 잠시 멈춰 마음을 쉬게 해주는 순간을 소중히
                    간직하세요.
                </span>
            </div>
            <div className={S.ment}>
                <span>지금 당신에게 필요한 순간은...</span>
            </div>
        </div>
    );
}
