import { fade, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    profileBg:{
        background: 'linear-gradient(0deg, rgba(83,100,195,1) 8%, rgba(117,178,237,1) 90%)'
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
    },
    postlistcon: {
        height: 'auto', 
        overflowY: 'none',
        [theme.breakpoints.up('sm')]: {
            height: '80vh',
            overflowY: 'scroll',
        },
    },
    btn:{
        '&:hover': {
            cursor: 'pointer',
        }
    },
    container: {
        padding: '5px 15px 5px 15px'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    tab: {
        display: 'block',
        padding: '12px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    loginContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        width: '200px'
    },
    inputLogin: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        padding: 5,
        width: '100%',
    },
    loginBtn: {
        marginTop: 5,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        color: 'white'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default useStyles;