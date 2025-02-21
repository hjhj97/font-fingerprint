# font-fingerprint

[![npm](https://img.shields.io/npm/v/font-fingerprint)](https://www.npmjs.com/package/font-fingerprint)

`font-fingerprint` is a library that generates a unique identifier for each visitor based on the installed fonts of the browser.

You can see the demo [here](https://hjhj97.github.io/font-fingerprint/).

Almost fingerprint libraries are based on the various browser features. Even with the same device, different browser types can generate different identification values.

`font-fingerprint` is free from these constraints because
it only considers the types of installed fonts.

This library is inspired by [fingerprintjs](https://github.com/fingerprintjs/fingerprintjs).

## Install

```bash
npm install font-fingerprint
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/font-fingerprint@1.0.0/dist/index.min.js"></script>
```

## Usage

```ts
import getFingerprint from "font-fingerprint";

const result = getFingerprint();
```

## Result

- `visitorId` is a unique identifier for each visitor. Hashed by `sha1`.
- `components` contains `font`, which is the available fonts in the browser.

```
{
  "visitorId": "77ce0377defbd11b77b1f4ad54ca40ea5ef28490",
  "components": {
    "font": [
      "Helvetica Neue",
      "Menlo",
      "Monaco",
      "Apple Symbols",
      "Arial Unicode MS",
      "Gill Sans",
      "Menlo"
    ]
  }
}
```
