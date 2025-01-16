const baseFonts = ["Arial", "Helvetica", "sans-serif"] as const;
type TBaseFont = (typeof baseFonts)[number];

const windowFonts = [
  "Calibri",
  "Consolas",
  "Cambria",
  "MS Gothic",
  "MS Mincho",
] as const;

const macFonts = [
  "Helvetica Neue",
  "Menlo",
  "Monaco",
  "Apple Symbols",
] as const;

const generalFonts = [
  "sans-serif-thin",
  "ARNO PRO",
  "Agency FB",
  "Arabic Typesetting",
  "Arial Unicode MS",
  "AvantGarde Bk BT",
  "BankGothic Md BT",
  "Batang",
  "Bitstream Vera Sans Mono",
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
  "Humanst521 BT",
  "Leelawadee",
  "Letter Gothic",
  "Levenim MT",
  "Lucida Bright",
  "Lucida Sans",
  "Menlo",
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
  "Vrinda",
  "ZWAdobeF",
] as const;

const fontList = [...windowFonts, ...macFonts, ...generalFonts];

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

  const measureWidthAndHeight = (element: HTMLSpanElement) => {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
  };

  const defaultFontSize = {} as Record<
    TBaseFont,
    { width: number; height: number }
  >;

  baseFonts.forEach((baseFont) => {
    const spanElement = createSpanElement(baseFont);
    const { width, height } = measureWidthAndHeight(spanElement);
    document.body.removeChild(spanElement);
    defaultFontSize[baseFont] = { width, height };
  });

  const availableFonts: string[] = [];
  fontList.forEach((font) => {
    const availableResults = baseFonts.map((baseFont) => {
      const spanElement = createSpanElement(`${font}, ${baseFont}`);
      const { width, height } = measureWidthAndHeight(spanElement);
      document.body.removeChild(spanElement);
      return (
        width !== defaultFontSize[baseFont].width ||
        height !== defaultFontSize[baseFont].height
      );
    });
    if (availableResults.some((result) => result)) {
      availableFonts.push(font);
    }
  });

  return availableFonts;
};

export default getFontList;
