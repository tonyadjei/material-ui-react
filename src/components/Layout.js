import { makeStyles } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";




const drawerWidth = 240;


const useStyles = makeStyles((theme) => { //the makeStyles hook can take a function instead of an object as a parameter, and that funciton must then return the object. But we can also receive as a parameter for our function the theme object, provided to us by the makeStyles hook
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        }
    }
})


const Layout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory(); //history.go(-1), history.push('/create') ,examples of the history  
    const location = useLocation(); //the useLocation hook helps us know which route we are at currently

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />, //take note that a component is a value
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>
            {/* app bar */}
            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title} >
                        Ninja notes
                    </Typography>
                </div>

                { /* List links */}

                <List>
                    {menuItems.map(item => ( // the button prop on the next line, adds styling to make something appear 'clickable'. We can also place click events on ListItem's
                        <ListItem 
                            key={item.text}
                            button
                            onClick={() => history.push(item.path)}
                            className={location.pathname === item.path ? classes.active : null}
                        > 
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
  

            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
            
        </div>
     );
}
 
export default Layout;