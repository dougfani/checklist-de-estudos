import { useRef } from 'react';
import './dialog.style.css';

export function Dialog() {
    // não deveríamos fazer buscas no DOM desse jeito!
    // const dialog = document.querySelector('dialog');

    // "Show the dialog" button opens the dialog modally

    const dialogRef = useRef(null);

    const openDialog = () => {
        dialogRef.current.showModal();
    };

    // "Close" button closes the dialog
    const closeDialog = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeDialog}>
                    Close
                </button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button onClick={openDialog}>Show the dialog</button>
        </>
    );
}
