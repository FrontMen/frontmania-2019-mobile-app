import { Dimensions } from 'react-native';
import { initSprayPaint } from './initSprayPaint';
import { Theme } from '../../types';
import { functionToString } from '../../utils';

const win = Dimensions.get('window');

/**
 * String.raw is like a no-op method for template literals
 * We are using this `html` just for the tooling support like prettier and syntax highlighting
 */
const html = String.raw;

export function getHtml({ theme }: { theme: Theme }): string {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <style>
          html,
          body {
            margin: 0;
            background-color: ${theme.containerBgColor};
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .full-width {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.containerBgColor};
          }
        </style>
      </head>
      <body>
        <div class="full-width">
          <canvas
            id="canvas"
            class="full-width"
            width="${win.width}"
            height="${win.height}"
          ></canvas>
        </div>
        <script type="text/javascript">
          ${functionToString(initSprayPaint)};
        </script>
      </body>
    </html>
  `;
}
