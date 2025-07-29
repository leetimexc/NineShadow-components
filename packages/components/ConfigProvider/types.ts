import type { Language, TranslatePair } from '@shadow-ui/locale'

export interface ConfigProviderProps {
  locale?: Language
  extendsI18nMsg?: TranslatePair
}
