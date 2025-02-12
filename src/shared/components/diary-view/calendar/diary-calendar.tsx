import Image, { StaticImageData } from 'next/image';
import HeaderCover from './header/header-cover';
import HeaderDeafult from './header/header-default';
import s from './diary-calendar.module.scss';

interface IDiaryCalendarProps {
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
}: IDiaryCalendarProps) {
    return (
        // calendier 컴포넌트에서는 내용 부분은 그대로 가져가고 헤더 부분을 coverImg의 여부로 분기하여 호출
        <div className={s.container}>
            {coverImg ? (
                <HeaderCover coverImg={coverImg} title={title} />
            ) : (
                <HeaderDeafult title={title} />
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
