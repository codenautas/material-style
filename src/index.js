import { fade, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
export const MaterialStyles = { fade, makeStyles, createStyles, useTheme };

if(typeof window == "object"){
    window.MaterialStyles = MaterialStyles;
}

