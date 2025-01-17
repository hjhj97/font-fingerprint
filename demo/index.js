import getFingerprint from "../dist/index.esm.js";

const fonts = getFingerprint();

const pre = document.createElement("pre");
pre.textContent = JSON.stringify(fonts, null, 2);
document.body.appendChild(pre);
