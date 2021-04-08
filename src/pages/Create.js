import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControlLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    btn: {
        borderRadius: 0
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});



const Create = () => {
    const classes = useStyles();
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
            console.log(title, details, category);
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
                className={classes.title}
                variant="h6" //still looks like an h6
                color="primary"
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
                    variant="filled"
                    fullWidth
                    required //just adds the asterix
                    error={titleError} //this prop just adds a 'red styling' to the TextField to indicate an error, it is set to either true or false
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    label="Note Details"
                    fullWidth
                    required
                    variant="filled"
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
                    className={classes.btn}
                    type="submit" //if you are using a button inside a form, please set type="submit"
                    color="primary"
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