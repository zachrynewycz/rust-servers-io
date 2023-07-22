export const getPlayerCounts = async () => {
    try {
        const response = await fetch("https://api.battlemetrics.com/games/rust", {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return data.data.attributes;
    } catch (error) {
        console.error(error);
    }
};
