import { checkPassword } from "./src/utils";
export const wrapPageElement = ({ props: { location } }, { pws, paths }) => {
  return checkPassword(location, pws, paths);
};
