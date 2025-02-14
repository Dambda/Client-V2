import {
    IExtendedModalConfig,
    IModalConfig,
    IModalReturn,
} from '@/shared/types/useModal.types';
import { useState } from 'react';

const defaultModalConfig: IModalConfig = {
    open: false,
    btnSize: 24,
    outerTouchClose: true,
};
/**
 * 동적 모달 관리를 위한 커스텀 훅
 * @param config 모달 기본 설정을 할 수 있는 객체(선택)
 * - open: 모달이 열려있는지 여부(기본값: false)
 * - showCloseButton: 모달 내부 버튼 유무(기본값: true)
 * - btnSize: 모달 내부 버튼 크기(기본값: 24
 * @returns 모달 설정을 변경할 수 있는 함수
 * - toggleModal: 모달을 열거나 닫는 함수
 * - showModal: 모달을 열어주는 함수
 * - hideModal: 모달을 닫아주는 함수
 * - updateModalConfig: 모달 설정을 업데이트하는 함수
 * - modalConfig: 모달 설정
 */
const useModal = (config?: IModalConfig): IModalReturn => {
    const [modalConfig, setModalConfig] = useState<IModalConfig>({
        ...defaultModalConfig,
        ...config,
    });

    // 모달을 열거나 닫는 함수
    const toggleModal = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: !prev.open,
            };
        });
    };
    // 모달을 열어주는 함수
    const showModal = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: true,
            };
        });
    };
    // 모달을 닫아주는 함수
    const hideModal = () => {
        setModalConfig((prev) => {
            return {
                ...prev,
                open: false,
            };
        });
    };
    // 모달 설정을 업데이트하는 함수
    const updateModalConfig = (config: Partial<IModalConfig>) => {
        setModalConfig((prev) => {
            return {
                ...prev,
                ...config,
            };
        });
    };
    // 닫기 함수 사용을 위한 모달 설정을 확장
    const extendConfig: IExtendedModalConfig = {
        ...modalConfig,
        handleClose: hideModal,
    };
    // 모달 설정과 함수들을 반환
    return {
        toggleModal,
        showModal,
        hideModal,
        updateModalConfig,
        modalConfig: extendConfig,
    };
};

export { useModal };
