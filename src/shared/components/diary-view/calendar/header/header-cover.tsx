import Image, { StaticImageData } from 'next/image';

interface HeaderCoverProps {
    coverImg: string | StaticImageData;
    title: string;
}

export default function HeaderCover({ coverImg, title }: HeaderCoverProps) {
    return (
        <div>
            <span>{title}</span>
            <Image src={coverImg} alt="커버이미지"></Image>
        </div>
    );
}
