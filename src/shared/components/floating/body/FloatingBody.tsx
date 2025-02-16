import classNames from 'classnames';
import { IFloatingBody } from '../floating.types';
import S from './FloatingBody.module.scss';
import moveDrawerIcon from '@public/icons/floating/move-drawer.svg';
import deleteIcon from '@public/icons/floating/delete.svg';
import commentIcon from '@public/icons/floating/comment.svg';

export default function FloatingBody({
    isOpen,
    parentRef,
    childRef,
}: IFloatingBody) {
    return (
        <div
            ref={parentRef}
            className={classNames(S.parent, { [S.parentIsOpen]: isOpen })}
        >
            <div
                ref={childRef}
                className={classNames(S.child, { [S.childIsOpen]: isOpen })}
            >
                <button>dd</button>
                <button>dd</button>
                <button>dd</button>
            </div>
        </div>
    );
}
