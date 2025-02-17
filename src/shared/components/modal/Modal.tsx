'use client';

import { ModalProps } from '@/shared/types/useModal.types';
import S from './modal.module.scss';
/**
 * 공용 모달 컴포넌트
 * @param {ReactNode} children 모달 내부에 들어갈 컨텐츠 (optional)
 * @parms modalConfig 모달 설정 - useModal에서 반환된 modalConfig
 * @returns 닫기 버튼이 존재하지 않는 모달
 * @example
 * const { modalConfig, toggleModal } = useModal({ open: true });
 * <Modal modalConfig={modalConfig}>
 *    <p>example</p>
 *    <button onClick={toggleModal}>toggle</button>
 * </Modal>
 */
export function Modal({
    children,
    modalConfig,
}: Readonly<{
    children?: React.ReactNode;
    modalConfig: ModalProps;
}>) {
    if (modalConfig.open === false) return null;

    const handleOuterTouchClose = () => {
        if (modalConfig.outerTouchClose) {
            modalConfig.handleClose();
        }
    };

    return (
        <div
            className={S.modal}
            onClick={() => {
                handleOuterTouchClose();
            }}
            role="presentation"
        >
            <dialog
                className={S.modalContent}
                onClick={(e) => e.stopPropagation()}
                role='presentation'
            >
                {modalConfig.outerTouchClose && (
                    <button
                        className={S.closeBtn}
                        style={{
                            width: `${modalConfig.btnSize}px`,
                            height: `${modalConfig.btnSize}px`,
                        }}
                        onClick={() => modalConfig.handleClose()}
                    >
                        close
                    </button>
                )}
                {children}
            </dialog>
        </div>
    );
}
