export default async function getPopularRustServers(): Promise<any> {
    const params = new URLSearchParams({
        "filter[game]": "rust",
        "filter[status]": "online",
        sort: "-players",
        "page[size]": "4",
        "fields[server]": "name,ip,players,maxPlayers, details, status",
    });

    const url = `https://api.battlemetrics.com/servers?${params.toString()}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${process.env.BATTLEMETRICS_OAUTH}`,
            },
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
