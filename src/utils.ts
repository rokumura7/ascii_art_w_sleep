export const wait = async (sec = 1): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));
