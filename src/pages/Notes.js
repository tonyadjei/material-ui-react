import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from "@material-ui/core";
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';


const Notes = () => {
    const [notes, setNotes] = useState([])


    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then((res) => res.json())
            .then((data) => setNotes(data))

    }, [])

    const handleDelete = async (id) => { //create an async function
        await fetch('http://localhost:8000/notes/' + id, { //use await to 'wait' for delete to finish before continuing code execution
            method: 'DELETE'
        })

        let newNotes = notes.filter((note) => {
            return note.id !== id
        })
        setNotes(newNotes)
    }


    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

    return ( 
        <Container className="Notes">
            {/* <Grid container >
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>3</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper>4</Paper>
                </Grid>
            </Grid> */}
{/* 
            <Grid container spacing={3}>
                {notes.map(note => (
                    <Grid item key={note.id} xs={12} md={6} lg={4}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </Grid> 
                ))}
            </Grid> */}
            <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {notes.map(note => (
                    <div key={note.id}>
                        <NoteCard note={note} handleDelete={handleDelete} />
                    </div> 
                ))}
            </Masonry>
        </Container>
     );
}
 
export default Notes;