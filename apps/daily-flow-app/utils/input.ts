import React from "react";

export const handleChange = <T>(
  e: React.ChangeEvent<HTMLInputElement>,
  setter: React.Dispatch<React.SetStateAction<T>>
) => {
  setter(e.target.value as T);
};
