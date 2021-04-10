import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles({
    // test: {
    //     border: (note) => {
    //         if(note.category === 'work'){
    //             return '1px solid red'
    //         }
    //     }
    // }
    avatar: {
        backgroundColor: (note) => {
            switch(note.category){
                case 'work':
                    return yellow[700] //here, we are returning a color, like 'red' or '#f3f3f3', not a material ui color object like we did in App.js, so we use the square brackets[] to give the kind of shade we want. This will return a particular kind of color and not the entire material ui color component(like in App.js)
                    break
                case 'money':
                    return green[500]
                    break
                case 'todos':
                    return pink[500]
                    break
                default:
                    return blue[500]
            }
        }
    }
})



const NoteCard = ({ note, handleDelete }) => {
    const classes = useStyles(note) //to have dynamic styles based on a certain value, you can pass that value as a parameter to the useStyles() hook.

    return ( 
        <div>
           <Card elevation={1}>
               <CardHeader
                    avatar={
                        <Avatar className={classes.avatar} >
                            {note.category[0].toUpperCase()}
                        </Avatar>
                }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
               />
               <CardContent>
                   <Typography variant="body2" color="textSecondary">
                       {note.details}
                   </Typography>
               </CardContent>
           </Card>
        </div>
     );
}
 
export default NoteCard;