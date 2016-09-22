import {
  transparent,
  white, darkBlack, fullBlack, grey300, cyan500,
} from 'material-ui/styles/colors';
import { spacing } from 'material-ui/styles';
import { fade } from 'material-ui/utils/colorManipulator';


export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: transparent,
    primary2Color: transparent,
    primary3Color: transparent,
    accent1Color: white,
    accent2Color: white,
    accent3Color: white,
    textColor: white,
    alternateTextColor: white,
    canvasColor: transparent,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
};
