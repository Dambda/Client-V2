import Image, { StaticImageData } from 'next/image';
import s from './diary-view.module.scss';

type DiaryViewMode = 'calendar' | 'feature' | 'default';

interface DiaryViewProps {
    mode: DiaryViewMode;
    title: string;
    content: string;
    coverImg?: string | StaticImageData;
    date: string;
}

export default function DiaryView({
    mode,
    title,
    content,
    coverImg,
    date,
}: DiaryViewProps) {
    switch (mode) {
        case 'calendar':
            return <div>달력 페이지</div>;
        case 'feature':
            return <div>덧말이나 감정보기... 등 기능</div>;
        default:
            return (
                <div className={s.test}>
                    <h3 className={s.title}>{title}</h3>
                    <div className={s.hrContainer}>
                        <hr className={s.leftHr} />
                        <span>{date}</span>
                        <hr className={s.rightHr} />
                    </div>
                    <div className={s.contentContainer}>
                        <span className={s.content}>{content}</span>
                        {coverImg && (
                            <Image
                                className={s.image}
                                src={coverImg}
                                alt="커버사진"
                                width={500}
                                height={300}
                            />
                        )}
                    </div>
                    <hr className={s.bottomHr} />
                    <div className={s.bottomContainer}>
                        <span>{date}</span>
                    </div>
                </div>
            );
    }
}
