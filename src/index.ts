import getFont from "./components/font";

const getFingerprint = () => {
  const font = getFont();
  return {
    visitorId: "test",
    components: {
      font,
    },
  };
};

export default getFingerprint;
