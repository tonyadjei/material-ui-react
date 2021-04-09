import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControlLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router'; //don't forget, react hooks begin with the word 'use', custom hooks must follow same rule

// const useStyles = makeStyles({
//     btn: {
//         fontSize: 60,
//         backgroundColor: 'violet',
//         '&:hover': {
//             background: 'blue'
//         }
//     },
//     title: {
//         textDecoration: 'underline',
//         marginBottom: 20
//     }
// })

const useStyles = makeStyles({ //makeStyles returns to us a hook, the hook subsequently gives us the object. NB: react hooks must begin with the word 'use'
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});



const Create = () => {
    const classes = useStyles();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('todos');



    const handleSubmit = (e) => {
        e.preventDefault() //always remember to prevent the default action
        setTitleError(false);
        setDetailsError(false);
        if(title && details){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, details, category})
            }).then(() => history.push("/"))
        }
        if(!title){
            setTitleError(true);
        }
        if(!details){
            setDetailsError(true);
        }
    }


    return ( 
        <Container className="Create">
            <Typography
                variant="h6" //still looks like an h6
                color="secondary"
                component="h2" //but I actually want it to be an h2 element
                gutterBottom
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note Title"
                    variant="outlined"
                    fullWidth
                    required //just adds the asterix
                    error={titleError} //this prop just adds a 'red styling' to the TextField to indicate an error, it is set to either true or false
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    label="Note Details"
                    fullWidth
                    required
                    variant="outlined"
                    className={classes.field}
                    multiline //creates an html 'textarea' input field
                    rows={4} //specifies the size of the 'textarea' or multiline input field
                    error={detailsError}
                />

                <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>

                <Button
                    type="submit" //if you are using a button inside a form, please set type="submit"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}
                    disableElevation
                    size='medium'
                >
                Submit
            </Button>
            </form>

            
            {/* <Button type="submit">Submit</Button>
            <Button type="submit" color="secondary" variant="outlined">Submit</Button>

            <ButtonGroup color="secondary" variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>

            </ButtonGroup> */}
            {/* icons */}
            {/* <br/>
            <AcUnitOutlinedIcon color="secondary" fontSize="small" />
            <AcUnitOutlinedIcon color="primary" fontSize="large" />
            <AcUnitOutlinedIcon color="error" fontSize="large" />
            <AcUnitOutlinedIcon color="disabled" fontSize="large" />
            <AcUnitOutlinedIcon color="action" fontSize="large" /> */}

        </Container>
     );
}
 
export default Create;