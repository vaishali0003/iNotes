import React, { useContext, useState ,useEffect} from 'react'
import noteContext from '../context/notes/noteContext'

const AddItem = () => {

    const context = useContext(noteContext);

    const { addnote } = context;

    const [note, setNote] = useState({ title: '', description: '' })

    const handleInput1 = () => {
        document.getElementById('inputBox1').addEventListener('click', () => {
            document.getElementById('inputBox2').style.display = 'block';
            document.getElementById('inputBox1').style.display = 'none';
        })
    }

    useEffect(() => {
        window.addEventListener('mouseup', (e) => {
            if (!document.getElementById('inputBox2').contains(e.target)) {
                document.getElementById('inputBox2').style.display = 'none';
                document.getElementById('inputBox1').style.display = 'block';
            }
        })
    }, [])
    
  
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addnote(note.title,note.description);
        setNote({title:"",description:""});
    }

    return (
        <>
            <div className="inputBox1" id="inputBox1">
                <input type="text" name="input" className="inputBoxInput" placeholder='Take a note...' onClick={handleInput1} />
            </div>
            <div className="inputBox2" id="inputBox2">
                <form method="POST" onSubmit={handleSubmit}>
                <input type="text" name="title" className="inputBoxInput" placeholder='Title...' onChange={onChange} value={note.title} minLength="3" required/>
                <textarea id="description" name="description" rows="3" className="inputBoxInput" placeholder='Take a note...' onChange={onChange} value={note.description} minLength="5" required></textarea>
                <div className="closebutton">
                    <button type="submit" className="closebtn" data-toggle="tooltip" data-placement="bottom" title="Save and Close">Close</button>
                </div>
                </form>
            </div>
        </>
    )
}

export default AddItem;