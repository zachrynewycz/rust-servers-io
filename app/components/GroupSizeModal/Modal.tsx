import { createPortal } from "react-dom";

interface IProps {
    showModal: boolean;
}

const root: HTMLElement | null = document.getElementById("");

const Modal = ({ showModal }: IProps) => {
    return showModal && createPortal(<div></div>, root!);
};

export default Modal;
