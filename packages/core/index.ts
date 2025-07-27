import makeInstaller from './makeInstaller'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import printLogo from './printLogo'
import '@9shadow/ui‌/theme/index.css'

printLogo()

library.add(fas)

const installer = makeInstaller(components)

export * from '@9shadow/ui‌/components'
export * from '@9shadow/ui‌/locale'
export default installer
