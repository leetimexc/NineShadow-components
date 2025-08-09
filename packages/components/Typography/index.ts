import Paragraph from './Paragraph.vue'
import Text from './Text.vue'
import Title from './Title.vue'
import { withInstall } from '@shadow-ui/utils'

export const NsParagraph = withInstall(Paragraph)
export const NsText = withInstall(Text)
export const NsTitle = withInstall(Title)

export * from './types'
