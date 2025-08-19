export default function () {
  if (PROD) {
    const logo = `
_______________________________________________________________________

              _                 _               _               
            (_)               | |             | |              
        _ __  _ _ __   ___  ___| |__   __ _  __| | _____      __
      | '_ \| | '_ \ / _ \/ __| '_ \ / _' |/ _' |/ _ \ \ /\ / /
      | | | | | | | |  __/\__ \ | | | (_| | (_| | (_) \ V  V / 
      |_| |_|_|_| |_|\___||___/_| |_|\__,_|\__,_|\___/ \_/\_/  
                                                          
                                                          
                                                                                              
_______________________________________________________________________
                                           author: lishuai
`;

    const rainbowGradient = `
      background: linear-gradient(135deg, orange 60%, cyan);
      background-clip: text;
      color: transparent;
      font-size: 16px; 
      line-height: 1;
      font-family: monospace;
      font-weight: 600;
    `;

    console.info(`%c${logo}`, rainbowGradient);
  } else if (DEV) {
    console.log("[shadow-ui]:dev mode...");
  }
}
