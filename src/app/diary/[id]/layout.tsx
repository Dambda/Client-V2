import { ReactNode } from 'react';

interface ILayoutProps {
    readonly children: ReactNode;
}

export default function Layout({ children }: Readonly<ILayoutProps>) {
    return (
        <div>
            {/* 일기 컴포넌트 */}
            {children}
        </div>
    );
}
