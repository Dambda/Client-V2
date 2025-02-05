'use client';

import { ReactNode } from 'react';
import styles from './layout.module.scss';
import { usePathname } from 'next/navigation';

export default function CenteredFrameLayout({
    children,
}: {
    children: ReactNode;
}) {
    const pathname = usePathname();
    const isKeywordSelectPage = pathname === '/keyword-select';

    return (
        <div className={styles.container}>
            {/* 키워드 선택 페이지 가이드 문구 */}
            {isKeywordSelectPage && (
                <div className={styles.guide_container}>
                    <h1>마음 읽기</h1>
                    <p>
                        차분히 나의 마음에 귀를 귀울여 보세요. 그날의 이야기가
                        조금씩 선명해질 거예요.
                    </p>
                </div>
            )}
            <div className={styles.frame}>{children}</div>
        </div>
    );
}
