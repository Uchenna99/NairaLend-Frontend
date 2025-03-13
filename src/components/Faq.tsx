import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { TbSearch } from "react-icons/tb";


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
                        <TbSearch id="faq-search-icon" />
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
                            <div className="faq-answer">
                                <p>
                                    NairaLender is a cloud-based platform that enables you to use a loan to make purchases from merchants or 
                                    withdraw cash without the need for a smartphone, point-of-sale hardware or plastic cards.
                                </p> 
                            </div>
                            : null
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
                            <div className="faq-answer">
                                <p>
                                    To get a loan, all you have to do is enter your email and follow the short registration process.
                                </p> 
                                <p>
                                    Once you select the loan amount you want, you'll be asked to give us the details of your bank account 
                                    for the loan to be deposited. Finally, we will register your debit card information to make repayment 
                                    easier for you.
                                </p>
                            </div>
                            : null
                        }
                    </div>

                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 3) {
                                setOpen(0);
                            }else{setOpen(3)}
                            }}>
                            <p>How long does it take to get a loan?</p>
                            {
                                open===3?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 3?
                            <div className="faq-answer">
                                <p>
                                    We work hard to ensure that your loan enters your account right after you complete your application session.
                                </p> 
                            </div>
                            : null
                        }
                    </div>

                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 4) {
                                setOpen(0);
                            }else{setOpen(4)}
                            }}>
                            <p>Can I access Migo if I port my number to another network?</p>
                            {
                                open===4?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 4?
                            <div className="faq-answer">
                                <p>
                                    Yes, as long as your SIM registration details match your bank account details. We operate our USSD 
                                    service across all networks.
                                </p> 
                            </div>
                            : null
                        }
                    </div>

                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 5) {
                                setOpen(0);
                            }else{setOpen(5)}
                            }}>
                            <p>Do you have a mobile app?</p>
                            {
                                open===5?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 5?
                            <div className="faq-answer">
                                <p>
                                    No, we currently do not, but you can access loans via your web browser.
                                </p> 
                            </div>
                            : null
                        }
                    </div>

                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 6) {
                                setOpen(0);
                            }else{setOpen(6)}
                            }}>
                            <p>Do I need to provide collateral or documentation to request a loan?</p>
                            {
                                open===6?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 6?
                            <div className="faq-answer">
                                <p>
                                    No, you do not need any collateral or documentation to request a loan from NairaLender.
                                </p> 
                            </div>
                            : null
                        }
                    </div>

                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 7) {
                                setOpen(0);
                            }else{setOpen(7)}
                            }}>
                            <p>Do I need to visit a bank to request a loan?</p>
                            {
                                open===7?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 7?
                            <div className="faq-answer">
                                <p>
                                    No, all you need is a bank account linked to a valid BVN and an email address, and you're ready to go. 
                                    You can conveniently apply for the loan from your mobile phone or computer.
                                </p> 
                            </div>
                            : null
                        }
                    </div>

                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 8) {
                                setOpen(0);
                            }else{setOpen(8)}
                            }}>
                            <p>Do I need to talk to a loan agent to request a loan?</p>
                            {
                                open===8?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 8?
                            <div className="faq-answer">
                                <p>
                                    No, you can apply for your NairaLender loan directly from your phone or computer, never through an agent. 
                                    However, we are happy to assist you if you have any questions, send us an email at 
                                    support@nairalender.com.
                                </p> 
                            </div>
                            : null
                        }
                    </div>
                </div>

                <div className="faq-wrap">
                    <h3>About NairaLender loan offers</h3>
                    <div className="faq-div">
                        <div className="faq-div-label" onClick={()=>{
                            if(open === 9) {
                                setOpen(0);
                            }else{setOpen(9)}
                            }}>
                            <p>How much money can I borrow with NairaLender?</p>
                            {
                                open===9?
                                <HiOutlineChevronUp color="#1E3A8A"/> :
                                <HiOutlineChevronDown color="#1E3A8A"/>
                            }
                        </div>
                        {
                            open === 9?
                            <div className="faq-answer">
                                <p>
                                    Our loan amounts range from N500 to over N500,000. We will usually start with a small loan and 
                                    grow your loan offers over time as you borrow and repay consistently and build trust with the system.
                                </p> 
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq;