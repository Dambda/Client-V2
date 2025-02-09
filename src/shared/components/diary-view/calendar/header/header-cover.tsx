import Image, { StaticImageData } from 'next/image';
import s from './cover-header.module.scss';

interface HeaderCoverProps {
    coverImg: string | StaticImageData;
    title: string;
}

export default function HeaderCover({ coverImg, title }: HeaderCoverProps) {
    return (
        <div className={s.coverSection}>
            <div className={s.overlay}>
                <Image src={coverImg} alt="커버이미지"></Image>
                <span className={s.title}>{title}</span>
            </div>
        </div>
    );
}
