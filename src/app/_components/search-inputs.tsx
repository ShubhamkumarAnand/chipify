"use client";
import { useState, type FC } from "react";

interface SearchInputsProps {
  setResult: (result: UserInterface[]) => void;
}

export interface UserInterface {
  id: number;
  name: string;
  email: string;
}

const SearchInputs: FC<Readonly<SearchInputsProps>> = ({ setResult }) => {
  const [input, setInput] = useState<string>("");

  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((json) => {
        const result: UserInterface[] = json.filter((user: UserInterface) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResult(result);
      })
    );
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full px-5 mt-32">
      <input
        className="w-2/5 px-3 py-2 text-2xl border-b-4 border-blue-700 outline-none"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search for Users"
      />
    </div>
  );
};

export default SearchInputs;
