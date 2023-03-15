import { createContext } from "react";

interface MyContextProps {
  name: string;
  age: number;
  occupation: string;
}

const MyContext = createContext<MyContextProps>({
  name: "",
  age: 0,
  occupation: "",
});

export default MyContext;
