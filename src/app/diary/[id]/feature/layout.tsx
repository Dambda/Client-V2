import { ReactNode } from 'react';

export default function Layout({
    children,
    panel,
}: {
    children: ReactNode;
    panel: ReactNode;
}) {
    return (
        <div>
            {/* feature 모드의 일기 컴포넌트 */}
            {children}

            {/* 사이드 패널 ex. 덧말, 마음읽기 */}
            {panel}
        </div>
    );
}
