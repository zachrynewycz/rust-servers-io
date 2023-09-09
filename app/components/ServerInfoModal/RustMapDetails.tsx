const RustMapDetails = ({ data }: any) => {
    return (
        <>
            {data?.details?.rust_maps?.thumbnailUrl && (
                <div className="flex items-center gap-10">
                    <img className="rounded-lg w-80" src={data.details.rust_maps.thumbnailUrl} alt="serverMap"/>

                    <div className="sm:flex flex-col gap-10 hidden">
                        <div className="map-label">
                            <img src="/images/icons/minimize-2.svg" alt="minimizeIcon"/>

                            <div>
                                <h3>Size</h3>
                                <p className="text-xl">{data.details.rust_maps.size}</p>
                            </div>
                        </div>

                        <div className="map-label text-lg">
                            <img src="/images/icons/terminal.svg" alt="terminalIcon"/>

                            <div>
                                <h3>Seed</h3>
                                <p className="text-xl">{data.details.rust_maps.seed}</p>
                            </div>
                        </div>

                        <div className="map-label">
                            <img src="/images/icons/share.svg" alt="shareIcon"/>

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
