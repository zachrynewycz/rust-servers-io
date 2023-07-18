import { formatDistanceToNow } from "date-fns";

export const formatWipeDate = (unformattedWipeDate: string) => {
    const date = new Date(unformattedWipeDate);
    return formatDistanceToNow(date, { addSuffix: true });
};
