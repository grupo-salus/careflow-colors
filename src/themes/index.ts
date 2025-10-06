import { Theme } from './types';
import { sorridentsGradientTheme } from './sorridentsGradient';
import { gioGradientTheme } from './gioGradient';

export const themes: Record<string, Theme> = {
  sorridentsGradient: sorridentsGradientTheme,
  gioGradient: gioGradientTheme,
};

export type { Theme };
