const RustMapDetails = ({ data }: any) => {
    return (
        <>
            {data?.details?.rust_maps?.thumbnailUrl && (
                <div className="flex items-center gap-10">
                    <img className="rounded-lg w-80" src={data.details.rust_maps.thumbnailUrl} />

                    <div className="sm:flex flex-col gap-10 hidden">
                        <div className="map-label">
                            <img src="/images/icons/minimize-2.svg" />

                            <div>
                                <h3>Size</h3>
                                <h1 className="text-xl">{data.details.rust_maps.size}</h1>
                            </div>
                        </div>

                        <div className="map-label text-lg">
                            <img src="/images/icons/terminal.svg" />

                            <div>
                                <h3>Seed</h3>
                                <h1 className="text-xl">{data.details.rust_maps.seed}</h1>
                            </div>
                        </div>

                        <div className="map-label">
                            <img src="/images/icons/share.svg" />

                            <div>
                                <h3>View full map</h3>
                                <a className="underline hover:text-blue-400" href={data.details.rust_maps.url}>
                                    rustmaps.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RustMapDetails;
