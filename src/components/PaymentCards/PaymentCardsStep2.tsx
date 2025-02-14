import { useState } from "react";


const PaymentCardsStep2 = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const submitData = {
        
    }

  return (
    <>
        <div className="payment-cards-step2">

            <div className="loan-input-wrapper">
                <label htmlFor="">Card Number</label>
                <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" value={cardNumber} 
                    onChange={(e)=>setCardNumber(e.target.value)} 
                />
            </div>

            <div className="loan-input-wrapper">
                <label htmlFor="">Name on Card</label>
                <input type="text" placeholder="John Wick" value={cardName} 
                    onChange={(e)=>setCardName(e.target.value)}
                />
            </div>

            <div className="expiry-cvv-wrap">
                <div className="loan-input-wrapper" 
                    style={{width:'150px'}}>
                    <label htmlFor="">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" value={expiry} 
                        onChange={(e)=> setExpiry(e.target.value)}
                    />
                </div>

                <div className="loan-input-wrapper" 
                    style={{width:'150px'}}>
                    <label htmlFor="">CVV</label>
                    <input type="text" placeholder="***" maxLength={3} value={cvv} 
                        onChange={(e)=>setCvv(e.target.value)}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default PaymentCardsStep2;