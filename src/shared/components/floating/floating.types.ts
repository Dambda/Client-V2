interface IFloatingTrigger {
    isOpen: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface IFloatingConfig {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    childRef: React.RefObject<HTMLDivElement | null>;
    toggleFloating: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => void;
}

interface IFloatingBody extends IFloatingConfig {
    menus: string[];
}

export type { IFloatingTrigger, IFloatingBody };
