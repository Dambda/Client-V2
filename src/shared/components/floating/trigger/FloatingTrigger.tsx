import classNames from 'classnames';
import { IFloatingTrigger } from '../floating.types';
import S from './FloatingTrigger.module.scss';
import TriggerIcon from '@public/icons/common/plus.svg';

/**
 * FloatingTrigger 컴포넌트
 *
 * 이 컴포넌트는 플로팅 버튼 역할을 하며, 클릭하면 특정 UI를 토글하는 기능을 수행합니다.
 *
 * @param {boolean} isOpen - 플로팅 버튼이 열려 있는 상태인지 여부를 나타냄
 * @param {function} onClick - 버튼을 클릭했을 때 실행되는 핸들러 함수
 *
 * @returns {JSX.Element} 플로팅 버튼 컴포넌트
 */

export default function FloatingTrigger({ isOpen, onClick }: IFloatingTrigger) {
    return (
        // 버튼 전체를 감싸는 컨테이너, 클릭 시 onClick 핸들러 호출하여 플로팅 메뉴 토글
        <button
            onClick={onClick}
            className={classNames(S.container, { [S.isOpen]: isOpen })}
        >
            {/* 아이콘을 감싸는 래퍼, isOpen 상태에 따라 회전 효과 적용 */}
            <div
                className={classNames(S.iconWrapper, { [S.rotating]: isOpen })}
            >
                <TriggerIcon
                    width={16}
                    height={16}
                    stroke="#fff"
                    stroke-width="1.6"
                />
            </div>
        </button>
    );
}
