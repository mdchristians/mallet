import React from 'react';
import { Global } from '@emotion/core';

const CSSReset = () => (
  <Global
    styles={`
      /* Document (normalize's opinionated.css) + more
       * ========================================================================== */
      
      * {
        box-sizing: border-box;
      }

      ul, ol {
        margin: 0;
        padding: 0;
      }

      /**
       * 1. Correct the line height in all browsers.
       * 2. Prevent adjustments of font size after orientation changes in
       *    IE on Windows Phone and in iOS.
       */
      
      html {
        line-height: 1.15; /* 1 */
        -ms-text-size-adjust: 100%; /* 2 */
        -webkit-text-size-adjust: 100%; /* 2 */
      }
      
      /* Sections
       * ========================================================================== */
      
      /**
       * Remove the margin in all browsers. (opinionated)
       */
      
      body {
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
      }
      
      /**
       * Correct the font size and margin on "h1" elements within "section" and
       * "article" contexts in Chrome, Edge, Firefox, and Safari.
       */
      
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
      }
      
      /* Grouping content
       * ========================================================================== */
      
      /**
       * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.
       */
      
      dl dl,
      dl ol,
      dl ul,
      ol dl,
      ul dl {
        margin: 0;
      }
      
      /**
       * Remove the margin on nested lists in Edge 18- and IE.
       */
      
      ol ol,
      ol ul,
      ul ol,
      ul ul {
        margin: 0;
      }
      
      /**
       * 1. Add the correct box sizing in Firefox.
       * 2. Show the overflow in Edge 18- and IE.
       */
      
      hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
      }
      
      /**
       * Add the correct display in IE.
       */
      
      main {
        display: block;
      }
      
      /**
       * 1. Correct the inheritance and scaling of font size in all browsers.
       * 2. Correct the odd "em" font sizing in all browsers.
       */
      
      pre {
        font-family: Menlo, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }
      
      /* Text-level semantics
       * ========================================================================== */
      
      /**
       * Remove the gray background on active links in IE 10.
       */
      
      a {
        background-color: transparent;
      }
      
      /**
       * Add the correct text decoration in Edge 18-, IE, and Safari.
       */
      
      abbr[title] {
        text-decoration: underline;
        text-decoration: underline dotted;
      }
      
      /**
       * Add the correct font weight in Chrome, Edge, and Safari.
       */
      
      b,
      strong {
        font-weight: bolder;
      }
      
      /**
       * 1. Correct the inheritance and scaling of font size in all browsers.
       * 2. Correct the odd "em" font sizing in all browsers.
       */
      
      code,
      kbd,
      samp {
        font-family: Menlo, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }
      
      /**
       * Add the correct font size in all browsers.
       */
      
      small {
        font-size: 80%;
      }
      
      /* Embedded content
       * ========================================================================== */
      
      /**
       * Add the correct display in IE 9-.
       */
      
      audio,
      video {
        display: inline-block;
      }
      
      /**
       * Add the correct display in iOS 4-7.
       */
      
      audio:not([controls]) {
        display: none;
        height: 0;
      }
      
      /**
       * Remove the border on images within links in IE 10-.
       */
      
      img {
        border-style: none;
      }
      
      /**
       * Hide the overflow in IE.
       */
      
      svg:not(:root) {
        overflow: hidden;
      }
      
      /* Forms
       * ========================================================================== */
      
      /**
       * Remove the margin on controls in Safari.
       */
      
      button,
      input,
      select {
        margin: 0;
      }
      
      /**
       * 1. Show the overflow in IE.
       * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.
       */
      
      button {
        overflow: visible; /* 1 */
        text-transform: none; /* 2 */
      }
      
      /**
       * Correct the inability to style buttons in iOS and Safari.
       */
      
      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button;
      }
      
      /**
       * Correct the padding in Firefox.
       */
      
      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }
      
      /**
       * Show the overflow in Edge 18- and IE.
       */
      
      input {
        overflow: visible;
      }
      
      /**
       * 1. Correct the text wrapping in Edge 18- and IE.
       * 2. Correct the color inheritance from "fieldset" elements in IE.
       */
      
      legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        white-space: normal; /* 1 */
      }
      
      /**
       * 1. Add the correct display in Edge 18- and IE.
       * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.
       */
      
      progress {
        display: inline-block; /* 1 */
        vertical-align: baseline; /* 2 */
      }
      
      /**
       * Remove the inheritance of text transform in Firefox.
       */
      
      select {
        text-transform: none;
      }
      
      /**
       * 1. Change the font styles in all browsers (opinionated).
       * 2. Remove the margin in Firefox and Safari.
       * 3. Remove the default vertical scrollbar in IE.
       */
      
      textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
        overflow: auto; /* 3 */
      }
      
      /**
       * 1. Add the correct box sizing in IE 10-.
       * 2. Remove the padding in IE 10-.
       */
      
      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
      }
      
      /**
       * 1. Correct the odd appearance in Chrome, Edge, and Safari.
       * 2. Correct the outline style in Safari.
       */
      
      [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
      }
      
      /**
       * Correct the cursor style of increment and decrement buttons in Safari.
       */
      
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto;
      }
      
      /**
       * Correct the text style of placeholders in Chrome, Edge, and Safari.
       */
      
      ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
      }
      
      /**
       * Remove the inner padding in Chrome, Edge, and Safari on macOS.
       */
      
      ::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      
      /**
       * 1. Correct the inability to style upload buttons in iOS and Safari.
       * 2. Change font properties to "inherit" in Safari.
       */
      
      ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
      }
      
      /**
       * Remove the inner border and padding of focus outlines in Firefox.
       */
      
      ::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      
      /**
       * Restore the focus outline styles unset by the previous rule in Firefox.
       */
      
      :-moz-focusring {
        outline: 1px dotted ButtonText;
      }
      
      /**
       * Remove the additional :invalid styles in Firefox.
       */
      
      :-moz-ui-invalid {
        box-shadow: none;
      }
      
      /* Interactive
       * ========================================================================== */
      
      /*
       * Add the correct display in Edge 18- and IE.
       */
      
      details {
        display: block;
      }
      
      /*
       * Add the correct styles in Edge 18-, IE, and Safari.
       */
      
      dialog {
        background-color: white;
        border: solid;
        color: black;
        display: block;
        height: -moz-fit-content;
        height: -webkit-fit-content;
        height: fit-content;
        left: 0;
        margin: auto;
        padding: 1em;
        position: absolute;
        right: 0;
        width: -moz-fit-content;
        width: -webkit-fit-content;
        width: fit-content;
      }
      
      dialog:not([open]) {
        display: none;
      }
      
      /*
       * Add the correct display in all browsers.
       */
      
      summary {
        display: list-item;
      }
      
      /* Scripting
       * ========================================================================== */
      
      /**
       * Add the correct display in IE 9-.
       */
      
      canvas {
        display: inline-block;
      }
      
      /**
       * Add the correct display in IE.
       */
      
      template {
        display: none;
      }
      
      /* User interaction
       * ========================================================================== */
      
      /**
       * Add the correct display in IE 10-.
       */
      
      [hidden] {
        display: none;
      }
    `}
  />
);

export default CSSReset;