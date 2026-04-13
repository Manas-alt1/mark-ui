export type ThemeId =
  // Professional
  | 'monochrome'
  | 'arctic'
  | 'obsidian'
  | 'ivory'
  | 'slate'
  | 'sage'
  | 'carbon'
  // Fun
  | 'cyberpunk'
  | 'shinigami'
  | 'titan'
  | 'nebula'
  | 'matrixx'
  | 'gotham'
  | 'akira'
  | 'hobbit';

export type ThemeCollection = 'professional' | 'fun';

export type ThemeStatus = 'live' | 'planned';

export interface ThemeTokens {
  accentPrimary: string;
  accentSecondary: string;
  accentGlow: string;
  accentSubtle: string;
}

export interface Theme {
  id: ThemeId;
  name: string;
  collection: ThemeCollection;
  status: ThemeStatus;
  personality: string;
  tokens: ThemeTokens;
}
