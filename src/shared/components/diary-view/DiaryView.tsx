import { StaticImageData } from 'next/image';
import DefaultCoverImg from './default/default-coverImg';
import DefaultDiary from './default/dafultDiary';
import DiaryCalendar from './calendar/diary-calendar';

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
            return (
                <DiaryCalendar
                    coverImg={coverImg}
                    title={title}
                    content={content}
                    contentImg={contentImg}
                ></DiaryCalendar>
            );
        default:
            if (coverImg) {
                return (
                    <DefaultCoverImg
                        mode={mode}
                        coverImg={coverImg}
                        title={title}
                        date={date}
                        content={content}
                    ></DefaultCoverImg>
                );
            } else {
                return (
                    <DefaultDiary
                        mode={mode}
                        title={title}
                        date={date}
                        content={content}
                        contentImg={contentImg}
                    ></DefaultDiary>
                );
            }
    }
}
