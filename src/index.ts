import getFont from "./components/font";
import hash from "hash.js";

const getFingerprint = () => {
  const font = getFont();
  return {
    visitorId: hash.sha256().update(font).digest("hex"),
    components: {
      font,
    },
  };
};

export default getFingerprint;
