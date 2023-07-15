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
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ0NGE0ZTcyNGQ0Y2JiMjYiLCJpYXQiOjE2ODk0NjA3NTksIm5iZiI6MTY4OTQ2MDc1OSwiaXNzIjoiaHR0cHM6Ly93d3cuYmF0dGxlbWV0cmljcy5jb20iLCJzdWIiOiJ1cm46dXNlcjo3MzQ2MzIifQ.nwXBlvOiUOnAO2E6CdfpwpzyKtuvl0f2lFz3OUqyrEE",
            },
        });

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
