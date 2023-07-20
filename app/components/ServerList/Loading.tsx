import { MoonLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex justify-center items-center gap-3">
            <h1 className="font-gilroy_bold text-2xl text-stone-200">Fetching data</h1>
            <MoonLoader loading={true} color="white" size="25px" />
        </div>
    );
};

export default Loading;
