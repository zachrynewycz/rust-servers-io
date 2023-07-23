const MapStats = ({ data }: any) => {
    return (
        <>
            {data?.details?.rust_maps?.thumbnailUrl && (
                <div className="border p-5 rounded-lg border-neutral-500 flex justify-around items-center gap-16">
                    <img className="rounded-lg w-72" src={data.details.rust_maps.thumbnailUrl} />
                    <div className="server-info-table flex flex-col gap-10 px-5">
                        <div>
                            <h3>Size</h3>
                            <h1>{data.details.rust_maps.size}</h1>
                        </div>
                        <div>
                            <h3>Seed</h3>
                            <h1>{data.details.rust_maps.seed}</h1>
                        </div>
                        <div>
                            <h3>Full map</h3>
                            <h1>
                                <a className="underline" href={data.details.rust_maps.url}>
                                    See full map
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MapStats;
