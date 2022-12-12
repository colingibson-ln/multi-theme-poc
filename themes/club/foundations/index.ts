import blur from "./blur";
import borders from "./borders";
import { breakpoints } from "./breakpoints";
import colors from "./colors";
import radii from "./radius";
import shadows from "./shadows";
import sizes from "./sizes";
import { space } from "./spacing";
import transition from "./transition";
import * as typography from "./typography";
import zIndices from "./z-index";

export const foundations = {
    blur,
    borders,
    breakpoints,
    colors,
    radii,
    shadows,
    sizes,
    space,
    transition,
    ...typography,
    zIndices,
};
