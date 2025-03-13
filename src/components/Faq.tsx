import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";


const Faq = () => {
    const [open, setOpen] = useState(0);

  return (
    <>
        <div className="faq-page-wrapper">
            <div className="faq-scroll-container">
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
                            <p>
                                NairaLender is a cloud-based platform that enables you to use a loan to make purchases from merchants or 
                                withdraw cash without the need for a smartphone, point-of-sale hardware or plastic cards.
                            </p> : null
                        }
                    </div>
                </div>

                <div className="faq-wrap">
                    <h3>Getting a loan on NairaLender</h3>
                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 2) {
                                setOpen(0);
                            }else{setOpen(2)}
                            }}>
                            <p>How do I get a NairaLender loan?</p>
                            {
                                open===2?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 2?
                            <p>
                                To get a loan, all you have to do is enter your email and follow the short registration process
                            </p> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq;