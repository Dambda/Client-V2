import Image, { StaticImageData } from 'next/image';
import S from './CoverHeader.module.scss';

interface IHeaderCoverProps {
    coverImg: string | StaticImageData;
    title: string;
}

export default function HeaderCover({ coverImg, title }: IHeaderCoverProps) {
    return (
        <div className={S.coverSection}>
            <div className={S.overlay}>
                <Image src={coverImg} alt="커버이미지"></Image>
                <span className={S.title}>{title}</span>
            </div>
        </div>
    );
}
