import { each, isFunction } from 'lodash-es'
import shell from 'shelljs'

export default function customHooksPlugin({
  rmFiles = [],
  afterBuild,
  beforeBuild,
}: {
  rmFiles?: string[]
  afterBuild?: Function
  beforeBuild?: Function
}) {
  return {
    name: 'custom-hooks-plugin',
    buildStart() {
      each(rmFiles, (fName) => shell.rm('-rf', fName))
      isFunction(beforeBuild) && beforeBuild()
    },
    buildEnd(err?: Error) {
      !err && isFunction(afterBuild) && afterBuild()
    },
  }
}
