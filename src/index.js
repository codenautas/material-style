import { fade, makeStyles, createStyles, useTheme, withStyles } from '@material-ui/core/styles';
export const MaterialStyles = { fade, makeStyles, createStyles, useTheme, withStyles };

if(typeof window == "object"){
    window.MaterialStyles = MaterialStyles;
}

