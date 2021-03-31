import Typography from '@material-ui/core/Typography';

const Create = () => {
    return ( 
        <div className="Create">
            <Typography
                variant="h6" //still looks like an h6
                color="textSecondary"
                component="h2" //but I actually want it to be an h2 element
                gutterBottom
            >
                Create a New Note
            </Typography>
        </div>
     );
}
 
export default Create;