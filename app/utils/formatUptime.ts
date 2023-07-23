export const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const remainingSeconds = seconds % 86400;
    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);

    const formattedDays = days > 0 ? `${days} days` : "";
    const formattedHours = hours > 0 ? `${hours} hours` : "";
    const formattedMinutes = minutes > 0 && hours === 0 ? `${minutes} minutes` : "";

    if (formattedDays && (formattedHours || formattedMinutes)) {
        return `${formattedDays} ${formattedHours} ${formattedMinutes}`;
    } else if (formattedHours && formattedMinutes) {
        return `${formattedHours} ${formattedMinutes}`;
    } else {
        return formattedDays || formattedHours || formattedMinutes || "0 minutes";
    }
};
