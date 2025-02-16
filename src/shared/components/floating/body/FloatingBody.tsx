import classNames from 'classnames';
import { IFloatingBody } from '../floating.types';
import S from './FloatingBody.module.scss';
import DrawerIcon from '@public/icons/floating/drawer.svg';
import DeleteIcon from '@public/icons/floating/delete.svg';
import CommentIcon from '@public/icons/floating/comment.svg';

/**
 * FloatingBody 컴포넌트
 *
 * 이 컴포넌트는 트리거 버튼 클릭 시 플로팅 메뉴들을 보여줍니다.
 *
 * @param {boolean} isOpen - FloatingBody가 열려 있는지 여부
 * @param {React.RefObject<HTMLDivElement>} parentRef - 부모 요소의 ref
 * @param {React.RefObject<HTMLDivElement>} childRef - 자식 요소의 ref
 * @param {string[]} menus - 표시할 메뉴 이름 배열
 *
 * @returns {JSX.Element} 렌더링된 컴포넌트
 */

export default function FloatingBody({
    isOpen,
    parentRef,
    childRef,
    menus,
    toggleFloating,
}: IFloatingBody) {
    const menuList = [
        { name: 'drawer', icon: DrawerIcon },
        { name: 'delete', icon: DeleteIcon },
        { name: 'comment', icon: CommentIcon },
    ];

    // menus 배열에 포함된 이름과 일치하는 메뉴만 필터링
    const filteredMenus = menuList.filter((menu) => menus.includes(menu.name));

    // 메뉴 버튼 클릭 시 실행되는 핸들러 함수
    const handleMenuButtonClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        toggleFloating(e);

        // 메뉴 클릭 시 실행할 로직 작성
        // ex. 서랍 이동, 일기 삭제 모달 열기 / 덧말 띄우기 (이건 어떻게 띄워야하지..)
    };

    return (
        <div
            ref={parentRef}
            className={classNames(S.parent, { [S.parentIsOpen]: isOpen })}
        >
            <div
                ref={childRef}
                className={classNames(S.child, { [S.childIsOpen]: isOpen })}
            >
                {filteredMenus.map((menu) => (
                    <button
                        key={menu.name}
                        className={S.iconWrapper}
                        onClick={handleMenuButtonClick}
                    >
                        <menu.icon />
                    </button>
                ))}
            </div>
        </div>
    );
}
