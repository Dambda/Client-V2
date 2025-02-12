import Image, { StaticImageData } from 'next/image';
import s from './diary-view.module.scss';

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
        <div className={`${s.container} ${s[mode]}`}>
            <h3 className={s.title}>{title}</h3>
            <div className={s.hrContainer}>
                <hr className={s.leftHr} />
                <span>{date}</span>
                <hr className={s.rightHr} />
            </div>
            <div className={s.contentContainer}>
                <span className={s.content}>{content}</span>
                {contentImg && (
                    <Image
                        className={s.image}
                        src={contentImg}
                        alt="내용사진"
                        width={500}
                        height={300}
                    />
                )}
            </div>
            <div className={s.bottomSection}>
                <hr className={s.bottomHr} />
                <div className={s.bottomContainer}>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    );
}
