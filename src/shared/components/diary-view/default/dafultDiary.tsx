import Image, { StaticImageData } from 'next/image';
import S from './DiaryView.module.scss';

interface IDefaultDiaryProps {
    mode: string;
    title: string;
    date: string;
    content: string;
    contentImg?: string | StaticImageData;
}

export default function DefaultDiary({
    mode,
    title,
    date,
    content,
    contentImg,
}: IDefaultDiaryProps) {
    return (
        <div className={`${S.container} ${S[mode]}`}>
            <h3 className={S.title}>{title}</h3>
            <div className={S.hrContainer}>
                <hr className={S.leftHr} />
                <span>{date}</span>
                <hr className={S.rightHr} />
            </div>
            <div className={S.contentContainer}>
                <span className={S.content}>{content}</span>
                {contentImg && (
                    <Image
                        className={S.image}
                        src={contentImg}
                        alt="내용사진"
                        width={500}
                        height={300}
                    />
                )}
            </div>
            <div className={S.bottomSection}>
                <hr className={S.bottomHr} />
                <div className={S.bottomContainer}>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
}
