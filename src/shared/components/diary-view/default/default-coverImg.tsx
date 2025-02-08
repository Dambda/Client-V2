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
        <div>
            <div>
                <Image src={coverImg} alt="커버" />
                <div>
                    <h3>{title}</h3>
                    <span>{date}</span>
                </div>
            </div>
            <div className={s.bottom}>
                <div>
                    <span>{content}</span>
                </div>
                <hr className={s.bottomHr} />
                <div className={s.bottomContainer}></div>
            </div>
        </div>
    );
}
