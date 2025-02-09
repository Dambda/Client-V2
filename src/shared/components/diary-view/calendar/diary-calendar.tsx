import Image, { StaticImageData } from 'next/image';
import HeaderCover from './header/header-cover';
import HeaderDeafult from './header/header-default';
import s from './diary-calendar.module.scss';

interface DiaryCalendarProps {
    title: string;
    content: string;
    coverImg?: string | StaticImageData;
    contentImg?: string | StaticImageData;
}

export default function DiaryCalendar({
    title,
    content,
    contentImg,
    coverImg,
}: DiaryCalendarProps) {
    return (
        <div className={s.container}>
            {coverImg ? (
                <HeaderCover coverImg={coverImg} title={title}></HeaderCover>
            ) : (
                <HeaderDeafult title={title}></HeaderDeafult>
            )}
            <div className={s.contentContainer}>
                <span className={s.content}>{content}</span>
                {contentImg && <Image src={contentImg} alt="이미지" />}
            </div>
            <div className={s.hrContainer}>
                <hr className={s.hr} />
            </div>
        </div>
    );
}
