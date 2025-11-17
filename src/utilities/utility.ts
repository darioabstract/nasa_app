import { APOD_LABEL, HOME_LABEL, IMAGES_LABEL } from "../constants/dictionary";
import { AppUrls } from "../type/appTypes";

export const NavBarStructure = [
  { link: HOME_LABEL, to: AppUrls.HOME },
  { link: IMAGES_LABEL, to: AppUrls.IMAGES },
  { link: APOD_LABEL, to: AppUrls.APOD },
];
