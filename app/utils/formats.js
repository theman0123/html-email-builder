export const formatCurrentPath = (pathStr) => {
  const dash = /-{1}/gi;
  const forwardSlash = /\//gi;

  const format = pathStr === '/' || pathStr === null
    ? 'Home'
    : pathStr
      .replace(dash, ' ')
      .replace(forwardSlash, '');
  return format;
};
