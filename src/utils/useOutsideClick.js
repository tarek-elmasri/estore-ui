import { useEffect, useState } from "react";

export default function useOutsideClick(refArray) {
  const [isClicked, setIsClicked] = useState();
  useEffect(() => {
    function handleClickOutside(event) {
      let triggered = false

      refArray.forEach(ref => {
        if (ref.current && !ref.current.contains(event.target)) {
          triggered = true;
        } else {
          triggered = false;
        }
      })

      if (triggered) {
        setIsClicked(true)
      } else {
        setIsClicked(false)
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refArray]);
  return isClicked;
}