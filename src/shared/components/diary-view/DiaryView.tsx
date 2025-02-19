import { StaticImageData } from 'next/image';
import DiaryCalendar from './calendar/diary-calendar';
import DefaultCoverImg from './default/default-coverImg';
import DefaultDiary from './default/dafultDiary';

// 캘린더 페이지에서 볼 때 사용하는, 덧말 등의 기능을 할 때 사용하는, default로 컴포넌트의 Mode 타입 선언
export type DiaryViewMode = 'calendar' | 'feature' | 'default';

interface IDiaryViewProps {
    mode: DiaryViewMode;
    title: string;
    content: string;
    coverImg?: string | StaticImageData;
    contentImg?: string | StaticImageData;
    date: string;
}
/**
 *
 * @param mode 사용하는 용도에 따라서 calendar, feature, default로 맞춰서 입력
 * @param title 일기의 제목
 * @param content 일기 내용(텍스트)
 * @param coverImg 커버 이미지 주소(optional이라 없으면 안 넣어도 됨)
 * @param contentImg 일기의 내용에 들어갈 이미지(이미지 주소)
 * @param date 일기 작성한 날짜
 */
export default function DiaryView({
    mode,
    title,
    content,
    coverImg,
    contentImg,
    date,
}: IDiaryViewProps) {
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
