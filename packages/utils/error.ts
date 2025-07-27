import { isString } from 'lodash-es'

class XcUIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'XcUIError'
  }
}
function createXcError(scope: string, msg: string) {
  return new XcUIError(`[${scope}]:${msg}`)
}

export function throwError(scope: string, msg: string) {
  throw createXcError(scope, msg)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, msg: string): void
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== 'production') {
    const err = isString(scope) ? createXcError(scope, msg!) : scope
    console.warn(err)
  }
}
