import Image, { StaticImageData } from 'next/image';
import s from './defaultCoverImg.module.scss';

interface DefaultCoverImgProps {
    coverImg: string | StaticImageData;
    title: string;
    date: string;
    content: string;
}

export default function DefaultCoverImg({
    coverImg,
    title,
    date,
    content,
}: DefaultCoverImgProps) {
    return (
        <div className={s.container}>
            <div className={s.coverSection}>
                <Image className={s.img} src={coverImg} alt="커버" />
                <div className={s.overlay}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.date}>{date}</span>
                </div>
            </div>
            <div className={s.bottom}>
                <div>
                    <span>{content}</span>
                </div>
                <div>
                    <hr className={s.bottomHr} />
                    <div className={s.bottomContainer}></div>
                </div>
            </div>
        </div>
    );
}
