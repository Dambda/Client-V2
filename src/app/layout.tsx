import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import GlobalNavigationBar from '@/shared/components/gnb/GlobalNavigationBar';
import '@/shared/styles/base/_global.scss';

const noto_sans_kr = Noto_Sans_KR({
    variable: '--font-noto-sans-kr',
    display: 'swap',
});

export const metadata: Metadata = {
    title: '담다',
    description: '모든 순간은 이야기가 됩니다',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={`${noto_sans_kr.className} `}>
                <GlobalNavigationBar />
                <main>{children}</main>
            </body>
        </html>
    );
}
