interface IStatusBarStyleType {
  light: 'light-content';
  dark: 'dark-content';
}

export const statusBarStyle: IStatusBarStyleType = Object.freeze({
  light: 'light-content',
  dark: 'dark-content',
});

export const colors = Object.freeze({
  transparent: 'rgba(0, 0, 0, 0.0)',
  white: 'rgba(255, 255, 255, 1.0)',
  toryBlue: 'rgba(16, 88, 161, 1.0)',
  silver: 'rgba(242, 243, 248, 1.0)',
  charcoal: 'rgba(24, 24, 24, 1.0)',
  cursedGrey: 'rgba(102, 102, 102, 1.0)',
  orange: 'rgba(253, 141, 131, 1.0)',
});

export const containerProps = Object.freeze({
  absolute: 'position: absolute; top: 0; left: 0; right: 0;',
  flex: 'flex-grow: 1',
  flexShrink: 'flex-shrink: 1',
  row: 'flex-direction: row;',
  column: 'flex-direction: column;',
  center: 'justify-content: center; align-items: center;',
  aCenter: 'align-items: center;',
  aStart: 'align-items: flex-start;',
  aEnd: 'align-items: flex-end;',
  aStretch: 'align-items: stretch;',
  jCenter: 'justify-content: center;',
  jStart: 'justify-content: flex-start;',
  jEnd: 'justify-content: flex-end;',
  jSpaceBtw: 'justify-content: space-between;',
  jSpaceAround: 'justify-content: space-around;',
});

const systemFont = 'System';

export const fontTypeProps = Object.freeze({
  body: `
    font-family: ${systemFont};
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  `,
  detail: `
    font-family: ${systemFont};
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  `,
});
