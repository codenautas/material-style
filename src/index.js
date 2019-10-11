import { fade, makeStyles, createStyles } from '@material-ui/core/styles';

export const MaterialStyles = { fade, makeStyles, createStyles };

if(typeof window == "object"){
    window.MaterialStyles = MaterialStyles;
}

