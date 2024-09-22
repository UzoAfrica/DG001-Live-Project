import {ColoredDiv, SimpleB, StyleDark, StylendAtag} from './StyledProducts';
import {IoExitOutline} from "react-icons/io5";
import {LiaQuestionSolid} from "react-icons/lia";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {BiCartDownload} from "react-icons/bi";
import {FaBasketShopping} from "react-icons/fa6";
import {TiMessageTyping} from "react-icons/ti";
import profilePic from '../images/profilepic.png'; // Ensure the correct path to the image

<SimpleB>
    <ColoredDiv>
        <img src={profilePic} alt="profilepic" />
        <div>
            <StyleDark>Babalola </StyleDark>
            <p>visit your Profile</p>
        </div>
    </ColoredDiv>
    <div>
        <li>
            <StylendAtag href="">
                <BsFillPersonLinesFill />
                <p>Edit Profile</p>
            </StylendAtag>
        </li>
        <li>
            <StylendAtag href="">
                <BiCartDownload />
                <p>My Shop</p>
            </StylendAtag>
        </li>
        <li>
            <StylendAtag href="">
                <FaBasketShopping />
                <p>Cart</p>
            </StylendAtag>
        </li>
        <li>
            <StylendAtag href="">
                <TiMessageTyping />
                <p>Messaging</p>
            </StylendAtag>
        </li>
        <li>
            <StylendAtag href="">
                <LiaQuestionSolid />
                <p>Help</p>
            </StylendAtag>
        </li>
        <li>
            <StylendAtag href="">
                <IoExitOutline />
                <p>Logout</p>
            </StylendAtag>
        </li>
    </div>
</SimpleB>

