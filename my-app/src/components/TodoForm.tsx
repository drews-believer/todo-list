import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
    handleSubmit: (value: string) => void
}

export const TodoForm:React.FC<Props> = (props) => {
    const [inputVal, setInputVal] = useState<string>('');

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!inputVal.trim()) {
            return
        }
        props.handleSubmit(inputVal);
        setInputVal('');
    }

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setInputVal(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                placeholder="Add task"
                margin="normal"
                onChange={handleChange}
                value={inputVal}
            />
        </form>
    )
};
