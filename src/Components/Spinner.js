
import { BounceLoader } from "react-spinners";

function Spinner(){
    return (
        <div className="w-1/3 h-[150px] flex justify-center items-center">
           
            <BounceLoader color="#d17cc5" className="fle scale-75" />
        </div>
    );

}

export default Spinner;