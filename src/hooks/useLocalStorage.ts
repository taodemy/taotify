const useLocalStorage = () => {
  const getDataFromLocalStorage = (storageKey: string) => {
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : null;
  };
  const setDataToLocalStorage = (setKey: string, setValue: string) => {
    localStorage.setItem(setKey, setValue);
  };
  return {
    getDataFromLocalStorage,
    setDataToLocalStorage,
  };
};

export default useLocalStorage;
