interface IFloatingTrigger {
    isOpen: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface IFloatingBody {
    isOpen: boolean;
    parentRef: React.RefObject<HTMLDivElement | null>;
    childRef: React.RefObject<HTMLDivElement | null>;
}

export type { IFloatingTrigger, IFloatingBody };
