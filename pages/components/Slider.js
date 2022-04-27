import Link from "next/link";
import {useEffect} from "react";
import Image from "next/image";

function Slider(props) {
    //I show and hide the menu according to the size information returned to me by props.
    return (
        props.open ? (<div className="wrapper">
                <div className="logo">
                    <Link href="#">
                        <a>
                            <Image src="/images/logo.png" alt="Fligt Logo" width={119} height={72} />
                        </a>
                    </Link>
                </div>
                <div className="slider-wrapper">
                    <ul>
                        <li><Link href="#"><a>home</a></Link></li>
                        <li><Link href="#"><a>about us</a></Link></li>
                        <li><Link href="#"><a>newsroom</a></Link></li>
                        <li><Link href="#"><a>contact</a></Link></li>
                    </ul>
                    <div className="book-slider">
                        <button>
                            book now
                        </button>
                    </div>
                </div>
            </div>)
            :
            (<noscript> </noscript>)

    );
}
export default Slider;