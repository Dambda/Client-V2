import Link from 'next/link';
import S from './Gnb.module.scss';

export default function GlobalNavigationBar() {
    return (
        <header className={S.test}>
            <Link href="/">GlobalNavigationBar</Link>
        </header>
    );
}
