import './App.css';
import { createMuiTheme, ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { green, orange, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
   root: {
      background: theme.background,
      border: 0,
      borderRadius: 3,
      boxShadow: theme.boxShadow,
      color: 'white',
      height: 48,
      padding: '0 30px',
   },
}));

const useStyles2 = makeStyles({
   button: {
      background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px var(--box-shadow)',
   },
});

const themeInstance = {
   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

const blue = {
   '--background-start': '#2196F3',
   '--background-end': '#21CBF3',
   '--box-shadow': 'rgba(33, 203, 243, .3)',
};

const defaultColor = {
   '--background-start': '#FE6B8B',
   '--background-end': '#FF8E53',
   '--box-shadow': 'rgba(255, 105, 135, .3)',
};

function FirstChild() {
   const classes = useStyles();
   return <button className={classes.root}>Theme nesting</button>;
}

const outerTheme = createMuiTheme({
   palette: {
      secondary: {
         main: red[500],
      },
   },
});

const innerTheme = createMuiTheme({
   palette: {
      secondary: {
         main: green[500],
      },
   },
});

const darkTheme = createMuiTheme({
   palette: {
      type: 'dark',
   },
});

function DeepChild() {
   const theme = useTheme();
   return <span>{`spacing ${theme.spacing}`}</span>;
}

function App() {
   const classes = useStyles2();
  return (
     <div class='App'>
        {/*<Checkbox defaultChecked/>*/}

        <ThemeProvider theme={outerTheme}>
           <Checkbox defaultChecked />
           <ThemeProvider theme={innerTheme}>
              <Checkbox defaultChecked />
           </ThemeProvider>
        </ThemeProvider>

        <Button style={defaultColor} className={classes.button}>
           {'CSS variables'}
        </Button>

        {/*Доступ к переменным темы*/}
        <ThemeProvider theme={{
              spacing: '8px',
           }}>
           <DeepChild />
        </ThemeProvider>

        <ThemeProvider theme={themeInstance}>
           <FirstChild />
        </ThemeProvider>
     </div>
  );
}

export default App;
