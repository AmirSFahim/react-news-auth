import Qimg from '../../../assets/qZone1.png'
import Qimg2 from '../../../assets/qZone2.png'
import Qimg3 from '../../../assets/qZone3.png'

import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSide = () => {
    return (
        <div>
            <div className="p-4 space-y-2 mb-6">
                <h2 className="text-2xl">log in with</h2>
                <button className="btn btn-outline w-full"> <FaGoogle> </FaGoogle>Google</button>
                <button className="btn btn-outline w-full"> <FaGithub></FaGithub> Github</button>
            </div>

            <div className="p-4  mb-6">
                <h2 className="mb-4 text-2xl">FInd us on</h2>
                <a className="flex p-2 items-center border rounded-t-lg text-lg" href=""><FaFacebook className="mr-3"></FaFacebook><span>facebook</span></a>
                <a className="flex p-2 items-center border rounded-y-lg text-lg" href=""><FaTwitter className="mr-3"></FaTwitter><span>Twitter</span></a>
                <a className="flex p-2 items-center border rounded-b-lg text-lg" href=""><FaInstagram className="mr-3"></FaInstagram><span>Instagram</span></a>

            </div>

            <div className="p-4 space-y-2 mb-6">
                <h2 className="text-2xl">Q zone</h2>
                <img src={Qimg} alt="" />
                <img src={Qimg2} alt="" />
                <img src={Qimg3} alt="" />
                
                
            </div>
        </div>



    );
};

export default RightSide;