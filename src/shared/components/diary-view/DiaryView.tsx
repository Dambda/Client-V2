import { StaticImageData } from 'next/image';
import DefaultCoverImg from './default/default-coverImg';
import DefaultDiary from './default/dafultDiary';

type DiaryViewMode = 'calendar' | 'feature' | 'default';

interface DiaryViewProps {
    mode: DiaryViewMode;
    title: string;
    content: string;
    coverImg?: string | StaticImageData;
    contentImg?: string | StaticImageData;
    date: string;
}

export default function DiaryView({
    mode,
    title,
    content,
    coverImg,
    contentImg,
    date,
}: DiaryViewProps) {
    console.log(coverImg);
    switch (mode) {
        case 'calendar':
            return <div>달력 페이지</div>;
        case 'feature':
            return <div>덧말이나 감정보기... 등 기능</div>;
        default:
            if (coverImg) {
                return (
                    <DefaultCoverImg
                        coverImg={coverImg}
                        title={title}
                        date={date}
                        content={content}
                    ></DefaultCoverImg>
                );
            } else {
                return (
                    <DefaultDiary
                        title={title}
                        date={date}
                        content={content}
                        contentImg={contentImg}
                    ></DefaultDiary>
                );
            }
    }
}
