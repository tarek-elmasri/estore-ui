import { formatDistanceToNow, parseISO } from "date-fns";
import { ar } from "date-fns/locale";

const formatDateDistanceFromNow = (date) => {
  return formatDistanceToNow(parseISO(date), {
    locale: ar,
  });
};

export default formatDateDistanceFromNow;
