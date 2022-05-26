const Note = ({ note, deleteNote, toggleImportance }) => {
    const label = note.important ? "make not important" : "make important";

    return (
        <li className='note'>
            {note.content}
            <button onClick={deleteNote}>Delete</button>
            <button onClick={toggleImportance}>{label}</button>
        </li>
    );
};

export default Note;
