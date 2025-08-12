import { isString } from 'lodash-es'

class NsUIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'NsUIError'
  }
}
function createNsError(scope: string, msg: string) {
  return new NsUIError(`[${scope}]:${msg}`)
}

export function throwError(scope: string, msg: string) {
  throw createNsError(scope, msg)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, msg: string): void
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== 'production') {
    const err = isString(scope) ? createNsError(scope, msg!) : scope
    console.warn(err)
  }
}
