const useLocalStorage = () => {
  const getDataFromLocalStorage = (storageKey: string) => {
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : null;
  };
  const setDataToLocalStorage = (storageKey: string, storageValue: {}) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue));
  };
  return {
    getDataFromLocalStorage,
    setDataToLocalStorage,
  };
};

export default useLocalStorage;
