import Image, { StaticImageData } from 'next/image';
import S from './DiaryCalendar.module.scss';
import HeaderCover from './header/HeaderCover';
import HeaderDeafult from './header/HeaderDefault';

interface IDiaryCalendarProps {
    readonly title: string;
    readonly content: string;
    readonly coverImg?: string | StaticImageData;
    readonly contentImg?: string | StaticImageData;
}

export default function DiaryCalendar({
    title,
    content,
    contentImg,
    coverImg,
}: Readonly<IDiaryCalendarProps>) {
    return (
        // calendier 컴포넌트에서는 내용 부분은 그대로 가져가고 헤더 부분을 coverImg의 여부로 분기하여 호출
        <div className={S.container}>
            {coverImg ? (
                <HeaderCover coverImg={coverImg} title={title} />
            ) : (
                <HeaderDeafult title={title} />
            )}
            <div className={S.contentContainer}>
                <span className={S.content}>{content}</span>
                {contentImg && <Image src={contentImg} alt="이미지" />}
            </div>
            <div className={S.hrContainer}>
                <hr className={S.hr} />
            </div>
        </div>
    );
}
