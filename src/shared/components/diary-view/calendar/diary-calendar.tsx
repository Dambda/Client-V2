import Image, { StaticImageData } from 'next/image';
import HeaderCover from './header/header-cover';
import HeaderDeafult from './header/header-default';

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
        <div>
            {coverImg ? (
                <HeaderCover coverImg={coverImg} title={title}></HeaderCover>
            ) : (
                <HeaderDeafult></HeaderDeafult>
            )}
            <div>
                <span>{content}</span>
                {contentImg && <Image src={contentImg} alt="이미지" />}
            </div>
        </div>
    );
}
