import figlet, { Fonts } from 'figlet';
import { wait } from './utils';

export const showAsciiArt = async (
  text: string,
  font: Fonts = 'Standard',
  sec = 0.5
): Promise<void> => {
  const aa = figlet.textSync(text, font).split('\n');
  for (const v of aa) {
    console.log(v);
    await wait(sec);
  }
};
