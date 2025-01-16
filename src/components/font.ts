const baseFonts = ["Arial", "Helvetica", "sans-serif"] as const;
const fontList = [
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
  "Calibri",
  "Century",
  "Century Gothic",
  "Clarendon",
  "EUROSTILE",
  "Franklin Gothic",
  "Futura Bk BT",
  "Futura Md BT",
  "GOTHAM",
  "Gill Sans",
  "HELV",
  "Haettenschweiler",
  "Helvetica Neue",
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
  "MS Mincho",
  "MS Outlook",
  "MS Reference Specialty",
  "MS UI Gothic",
  "MT Extra",
  "MYRIAD PRO",
  "Marlett",
  "Meiryo UI",
  "Microsoft Uighur",
  "Minion Pro",
  "Monotype Corsiva",
  "PMingLiU",
  "Pristina",
  "SCRIPTINA",
  "Segoe UI Light",
  "Serifa",
  "SimHei",
  "Small Fonts",
  "Staccato222 BT",
  "TRAJAN PRO",
  "Univers CE 55 Medium",
  "Vrinda",
  "ZWAdobeF",
] as const;

const TEST_STRING = "mmMwWLliI0O&1";
const TEXT_SIZE = "80px";

const getFontList = () => {
  const createSpanElement = (fontFamily: string) => {
    const span = document.createElement("span");
    span.style.fontFamily = fontFamily;
    span.textContent = TEST_STRING;
    span.style.fontSize = TEXT_SIZE;
    document.body.appendChild(span);
    return span;
  };
  const isDiffrentFromBaseFont = (fontFamily: string) => {
    return baseFonts.every((baseFont) => {
      return createSpanElement(baseFont) !== createSpanElement(fontFamily);
    });
  };

  const measureWidthAndHeight = (element: HTMLSpanElement) => {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
  };

  baseFonts.forEach((baseFont) => {
    fontList.forEach((font) => {
      const spanElement = createSpanElement(`${font}, ${baseFont}`);
      const { width, height } = measureWidthAndHeight(spanElement);
      console.log(`${font}, ${baseFont}`, width, height);
      document.body.removeChild(spanElement);
    });
  });

  return fontList.filter((font) => isDiffrentFromBaseFont(font));
};

export default getFontList;
