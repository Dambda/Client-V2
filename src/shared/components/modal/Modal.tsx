'use client';

import S from './modal.module.scss';
import { useRouter } from 'next/navigation';

/**
 *
 * @param children 모달 내부에 들어갈 컨텐츠
 * @returns 닫기 버튼이 존재하지 않는 모달
 */
export function Modal({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className={S.modal}>
            <div className={S.modalContent}>{children}</div>
        </div>
    );
}

/**
 *
 * @param children 모달 내부에 들어갈 컨텐츠
 * @param btnSize 닫기 버튼의 크기(default: 24)
 * @returns 닫기 버튼이 존재하는 모달
 */
export function CloseModal({
    children,
    btnSize = 24,
}: Readonly<{
    children: React.ReactNode;
    btnSize?: 24 | 32;
}>) {
    const router = useRouter();
    return (
        <div className={S.modal}>
            <div className={S.modalContent}>
                <button
                    className={S.closeBtn}
                    style={{ width: `${btnSize}px`, height: `${btnSize}px` }}
                    onClick={() => router.back()}
                >
                    close
                </button>
                {children}
            </div>
        </div>
    );
}
