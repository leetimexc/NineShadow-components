export default function () {
  if (PROD) {
    const logo = `
__________________________________________________________________________________________________________

    ___   ___   ______         _______  __       _______ .___  ___.  _______ .__   __. .___________.
    \  \ /  /  /      |       |   ____||  |     |   ____||   \/   | |   ____||  \ |  | |           |
    \  V  /  |  ,----' ______|  |__   |  |     |  |__   |  \  /  | |  |__   |   \|  | '---|  |----'
      >   <   |  |     |______|   __|  |  |     |   __|  |  |\/|  | |   __|  |  . '  |     |  |     
    /  .  \  |  '----.       |  |____ |  '----.|  |____ |  |  |  | |  |____ |  |\   |     |  |     
    /__/ \__\  \______|       |_______||_______||_______||__|  |__| |_______||__| \__|     |__|     
                                                                                              
__________________________________________________________________________________________________________
                                           author: leetimexc
`

    const rainbowGradient = `
      background: linear-gradient(135deg, orange 60%, cyan);
      background-clip: text;
      color: transparent;
      font-size: 16px; 
      line-height: 1;
      font-family: monospace;
      font-weight: 600;
    `

    console.info(`%c${logo}`, rainbowGradient)
  } else if (DEV) {
    console.log('[XcElement]:dev mode...')
  }
}
