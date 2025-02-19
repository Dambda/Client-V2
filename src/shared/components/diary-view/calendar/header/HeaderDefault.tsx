import S from './DefaultHeader.module.scss';

interface IHeaderDefaultProps {
    readonly title: string;
}

export default function HeaderDeafult({
    title,
}: Readonly<IHeaderDefaultProps>) {
    return (
        <div className={S.container}>
            <h3 className={S.title}>{title}</h3>
            <hr className={S.hr} />
        </div>
    );
}
