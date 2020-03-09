import { fade, makeStyles, createStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Autocomplete } from "@material-ui/lab"
export const MaterialStyles = { fade, makeStyles, createStyles, useTheme, withStyles, Autocomplete };

if(typeof window == "object"){
    window.MaterialStyles = MaterialStyles;
}

