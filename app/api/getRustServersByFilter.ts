export default async function getRustServersByFilter(filters?: any): Promise<any> {
    const params = new URLSearchParams({
        "filter[game]": "rust",
        "filter[status]": "online",
        sort: filters.sortBy || "rank",
        "page[size]": "13",
        "filter[search]": filters.searchQuery,
        "filter[players][max]": filters.maxPlayers || 2000,
        "filter[players][min]": filters.minPlayers,
        "filter[countries]": filters.countries,
        "fields[server]": "name, ip, players, maxPlayers, details, rank, country",
    });

    const url = `https://api.battlemetrics.com/servers?${params.toString()}`;

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer `,
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
