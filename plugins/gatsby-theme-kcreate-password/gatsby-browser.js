import { checkPassword } from "./src/utils";

export const wrapPageElement = (
  { props: { location } },
  { password, paths }
) => {
  return checkPassword(location, password, paths);
};
