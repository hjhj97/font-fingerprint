import getFont from "./components/font";

const getFingerprint = () => {
  const font = getFont();
  return {
    visitorId: "123",
    components: {
      font,
    },
  };
};

export default getFingerprint;
