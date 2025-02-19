import Image, { StaticImageData } from 'next/image';
import S from './DefaultCoverImg.module.scss';

interface IDefaultCoverImgProps {
    readonly mode: string;
    readonly coverImg: string | StaticImageData;
    readonly title: string;
    readonly date: string;
    readonly content: string;
}

export default function DefaultCoverImg({
    mode,
    coverImg,
    title,
    date,
    content,
}: Readonly<IDefaultCoverImgProps>) {
    return (
        <div className={`${S.container} ${S[mode]}`}>
            <div className={`${S.coverSection} ${S[mode]}`}>
                <Image className={S.img} src={coverImg} alt="커버" />
                <div className={S.overlay}>
                    <h3 className={S.title}>{title}</h3>
                    <span className={S.date}>{date}</span>
                </div>
            </div>
            <div className={S.bottom}>
                <div className={S.contentSection}>
                    <span>{content}</span>
                </div>
                <div className={S.bottomSection}>
                    <hr className={S.bottomHr} />
                    <div className={S.bottomContainer}>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
