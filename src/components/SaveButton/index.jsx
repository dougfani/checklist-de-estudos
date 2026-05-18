import './save-button.style.css';

export function SaveButton({ children, ...rest}) {
    return (
        <button {...rest} className='save-button'>
            {children}
        </button>)
}
