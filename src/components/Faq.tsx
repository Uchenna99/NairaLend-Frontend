import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";


const Faq = () => {
    const [open,setOpen] = useState(0);
  return (
    <>
        <div className="faq-page-wrapper">
            <div className="faq-wrap">
                <h3>Frequently Asked Questions</h3>

                <div className="search-input-wrap">
                    <input id="faq-search" type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="faq-wrap">
                <h3>About NairaLender</h3>
                <div className="faq-div">
                    <div className="faq-div-label" onClick={()=>{
                        if(open === 1) {
                            setOpen(0);
                        }else{setOpen(1)}
                        }}>
                        <p>What is NairaLender?</p>
                        {
                            open===1?
                            <HiOutlineChevronUp color="#1E3A8A"/> :
                            <HiOutlineChevronDown color="#1E3A8A"/>
                        }
                    </div>
                    {
                        open === 1?
                        <p>hello</p> : null
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq;