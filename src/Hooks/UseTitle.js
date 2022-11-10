import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `Roofsie -${title}`;
  }, [title]);
};

export default UseTitle;
