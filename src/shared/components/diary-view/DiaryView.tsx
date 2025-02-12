import { StaticImageData } from 'next/image';
import DefaultCoverImg from './default/default-coverImg';
import DefaultDiary from './default/dafultDiary';
import DiaryCalendar from './calendar/diary-calendar';

// 캘린더 페이지에서 볼 때 사용하는, 덧말 등의 기능을 할 때 사용하는, default로 컴포넌트의 Mode 타입 선언
export type DiaryViewMode = 'calendar' | 'feature' | 'default';

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
    switch (
        mode // calendar일 때, 아닌 경우일 때로 case 분기
    ) {
        case 'calendar': // calendar일 땐 <DiaryCalendar>컴포넌트 호출
            return (
                <DiaryCalendar
                    coverImg={coverImg}
                    title={title}
                    content={content}
                    contentImg={contentImg}
                />
            );
        default: // feature, default일 땐 coverImg의 여부에 따라 컴포넌트를 분리한 후 분리된 컴포넌트 내부에서
            if (coverImg) {
                return (
                    <DefaultCoverImg
                        mode={mode}
                        coverImg={coverImg}
                        title={title}
                        date={date}
                        content={content}
                    />
                );
            } else {
                return (
                    <DefaultDiary
                        mode={mode}
                        title={title}
                        date={date}
                        content={content}
                        contentImg={contentImg}
                    />
                );
            }
    }
}
