import { fade, makeStyles, createStyles, useThemes } from '@material-ui/core/styles';
export const MaterialStyles = { fade, makeStyles, createStyles, useThemes };

if(typeof window == "object"){
    window.MaterialStyles = MaterialStyles;
}

