import { useEffect, useState } from "react";


const TakeLoan = () => {
    const [duration, setDuration] = useState(1);
    const [loanAmt, setLoanAmt] = useState(2000);
    const [payback, setpayback] = useState(0);

    useEffect(()=>{
        const paybackAmt = ()=>{
            if(duration >= 1 && duration <= 3){
                const result1 = loanAmt * 0.15
                const result2 = result1 + loanAmt
                setpayback(result2)
            }else if(duration ===4 || duration===5){
                const result1 = loanAmt * 0.2
                const result2 = result1 + loanAmt
                setpayback(result2)
            }else if(duration > 5){
                const result1 = loanAmt * 0.3
                const result2 = result1 + loanAmt
                setpayback(result2)
            }
        }
        paybackAmt();

    },[duration, loanAmt])
    
  return (
    <>
        <div className="get-loan-section">
            <div className="form-progress-section">
                <div className="form-progress">
                    <div className="progress-number"><p>1</p></div>
                    <p>Choose loan option</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>2</p></div>
                    <p>Select bank account</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>3</p></div>
                    <p>Select payment card</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>4</p></div>
                    <p>Confirmation</p>
                </div>
            </div>

            <div className="loan-mid-section">
                <div className="loan-duration">
                    <h4>Select Loan Duration</h4>
                    <div className="select-duration-wrapper">
                        <div className="select-duration" onClick={()=>setDuration(1)}
                            style={{borderWidth: duration===1? '3px':''}}>
                            <p>2 weeks</p>
                        </div>

                        <div className="select-duration" onClick={()=>setDuration(2)}
                            style={{borderWidth: duration===2? '3px':''}}>
                            <p>1 month</p>
                        </div>

                        <div className="select-duration" onClick={()=>setDuration(3)}
                            style={{borderWidth: duration===3? '3px':''}}>
                            <p>3 months</p>
                        </div>

                        <div className="select-duration" onClick={()=>setDuration(4)}
                            style={{borderWidth: duration===4? '3px':''}}>
                            <p>6 months</p>
                        </div>

                        <div className="select-duration" onClick={()=>setDuration(5)}
                            style={{borderWidth: duration===5? '3px':''}}>
                            <p>12 months</p>
                        </div>
                        
                        <div className="select-duration" onClick={()=>setDuration(6)}
                            style={{borderWidth: duration===6? '3px':''}}>
                            <p>18 months</p>
                        </div>

                        <div className="select-duration" onClick={()=>setDuration(7)}
                            style={{borderWidth: duration===7? '3px':''}}>
                            <p>24 months</p>
                        </div>
                    </div>
                </div>

                {/* Loan amount */}
                <div className="loan-duration">
                    <h4>Select Loan Amount</h4>
                    <div className="select-duration-wrapper">
                        <div className="select-duration" onClick={()=>setLoanAmt(500)}
                            style={{borderWidth: loanAmt===500? '3px':''}}>
                            <p>₦ 500</p>
                        </div>

                        <div className="select-duration" onClick={()=>setLoanAmt(1000)}
                            style={{borderWidth: loanAmt===1000? '3px':''}}>
                            <p>₦ 1000</p>
                        </div>

                        <div className="select-duration" onClick={()=>setLoanAmt(2000)}
                            style={{borderWidth: loanAmt===2000? '3px':''}}>
                            <p>₦ 2000</p>
                        </div>

                        <div className="select-duration" onClick={()=>setLoanAmt(5000)}
                            style={{borderWidth: loanAmt===5000? '3px':''}}>
                            <p>₦ 5000</p>
                        </div>

                        <div className="select-duration" onClick={()=>setLoanAmt(20000)}
                            style={{borderWidth: loanAmt===20000? '3px':''}}>
                            <p>₦ 20,000</p>
                        </div>
                        
                        <div className="select-duration" onClick={()=>setLoanAmt(50000)}
                            style={{borderWidth: loanAmt===50000? '3px':''}}>
                            <p>₦ 50,000</p>
                        </div>

                        <div className="select-duration" onClick={()=>setLoanAmt(100000)}
                            style={{borderWidth: loanAmt===100000? '3px':''}}>
                            <p>₦ 100,000</p>
                        </div>
                    </div>
                </div>

                <div className="loan-duration">
                    <h4>Total payback amount</h4>
                    <div className="select-duration-wrapper">
                        <div className="select-duration" style={{width:'160px'}}>
                            <p style={{fontWeight:'bold'}}>
                                ₦ {payback.toLocaleString()}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="loan-amount"></div>

                <div className="payback-amount"></div>
            </div>

            <div className="dash-bottom-section">
                <button id="dash-bottom-butn">Next Step</button>
            </div>
        </div>
    </>
  )
}

export default TakeLoan;