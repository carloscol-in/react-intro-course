export const Checkbox = ({ completed, onCheck }) => {
    return (
        <input type="checkbox" defaultChecked={completed} onClick={onCheck} />
    );
 }