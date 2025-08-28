export default function () {
  if (PROD) {
    const logo = "" +
"_______________________________________________________________________\n" +
"       _   _ _            ____  _               _               \n" +
"      | \\ | (_)_ __   ___/ ___|| |__   __ _  __| | _____      __\n" +
"      |  \\| | | '_ \\ / _ \\___ \\| '_ \\ / _` |/ _` |/ _ \\ \\ /\\ / /\n" +
"      | |\\  | | | | |  __/___) | | | | (_| | (_| | (_) \\ V  V / \n" +
"      |_| \\_|_|_| |_|\\___|____/|_| |_|\\__,_|\\__,_|\\___/ \\_/\\_/  \n" +
"_______________________________________________________________________\n" +
"                                           author: lishuai\n";
    

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
