export const getLocalStorage = (key) => {
  let result = {}
  try {
    result = JSON.parse(localStorage.getItem(key)||'');
    // eslint-disable-next-line no-empty
  } catch (err) {}
  return result;
};

export const setLocalStorage = (key, value) => {
  const _value = typeof value === 'object' ? JSON.stringify(value) : value;
  localStorage.setItem(key, _value);
};
