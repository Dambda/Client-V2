import { useRef, useState } from 'react';

export const useFloatingToggle = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);

    const toggleFloating = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault();

        setIsOpen((prev) => {
            const newIsOpen = !prev;

            // 상태 업데이트 후 높이 설정
            if (newIsOpen) {
                parentRef.current!.style.height = `${childRef.current!.clientHeight}px`;
            } else {
                parentRef.current!.style.height = '0';
            }

            return newIsOpen;
        });
    };

    const config = {
        isOpen,
        setIsOpen,
        parentRef,
        childRef,
        toggleFloating,
    };
    return config;
};
