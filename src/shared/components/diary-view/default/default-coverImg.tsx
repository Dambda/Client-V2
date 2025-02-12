import Image, { StaticImageData } from 'next/image';
import s from './defaultCoverImg.module.scss';

interface IDefaultCoverImgProps {
    mode: string;
    coverImg: string | StaticImageData;
    title: string;
    date: string;
    content: string;
}

export default function DefaultCoverImg({
    mode,
    coverImg,
    title,
    date,
    content,
}: IDefaultCoverImgProps) {
    return (
        <div className={`${s.container} ${s[mode]}`}>
            <div className={`${s.coverSection} ${s[mode]}`}>
                <Image className={s.img} src={coverImg} alt="커버" />
                <div className={s.overlay}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.date}>{date}</span>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.contentSection}>
                    <span>{content}</span>
                </div>
                <div className={s.bottomSection}>
                    <hr className={s.bottomHr} />
                    <div className={s.bottomContainer}>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
