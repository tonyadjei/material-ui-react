import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
const Create = () => {
    return ( 
        <Container className="Create">
            <Typography
                variant="h6" //still looks like an h6
                color="textSecondary"
                component="h2" //but I actually want it to be an h2 element
                gutterBottom
            >
                Create a New Note
            </Typography>

            <Button
                onClick={() => console.log('you clicked me')}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>
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