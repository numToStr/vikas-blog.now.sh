import useTheme from "@material-ui/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default () => {
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down("sm"));

    return isMobile;
};
