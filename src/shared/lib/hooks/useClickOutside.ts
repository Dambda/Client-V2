import { useEffect } from 'react';

const useClickOutside = (
    floatingRef: React.RefObject<HTMLDivElement | null>,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                // 필터 메뉴 DOM이 화면에 렌더링 되어 있고
                floatingRef.current &&
                // 현재 클릭된 위치가 필터 메뉴 외부일 때
                !floatingRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        // mousedown(마우스 버튼이 눌린 순간) 이벤트가 발생할 때마다 함수
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [floatingRef]);
};

export { useClickOutside };
