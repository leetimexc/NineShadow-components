import makeInstaller from './makeInstaller'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import printLogo from './printLogo'
import '@xc-element/theme/index.css'

printLogo()

library.add(fas)

const installer = makeInstaller(components)

export * from '@xc-element/components'
export * from '@xc-element/locale'
export default installer
