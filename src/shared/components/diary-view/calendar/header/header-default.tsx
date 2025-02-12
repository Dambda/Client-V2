import s from './default-header.module.scss';

interface IHeaderDefaultProps {
    title: string;
}

export default function HeaderDeafult({ title }: IHeaderDefaultProps) {
    return (
        <div className={s.container}>
            <h3 className={s.title}>{title}</h3>
            <hr className={s.hr} />
        </div>
    );
}
