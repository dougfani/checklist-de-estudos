import { TextInput } from '../TextInput';
import { SaveButton } from '../SaveButton';

import './to-do-form.style.css';

export function TodoForm({ onSubmit }) {
    return (
        <form action={onSubmit} className="to-do-form">
            <TextInput 
                placeholder="Digite o item que deseja adicionar"
                required
            >
            </TextInput>
            <SaveButton>Salvar item</SaveButton>
        </form>
    );
}
