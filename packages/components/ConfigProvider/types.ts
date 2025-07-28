import type { Language, TranslatePair } from '@xc-element/locale'

export interface ConfigProviderProps {
  locale?: Language
  extendsI18nMsg?: TranslatePair
}
