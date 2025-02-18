import { useEffect, useState } from "react";
import { AddPaymentCard, Bank, hostURL } from "../interfaces";
import axios from "axios";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";


interface Props {
    userId: string;
    submit: (data: AddPaymentCard)=>void;
}


const PaymentCardsStep2 = ({userId, submit}: Props) => {
    const [bankList, setBankList] = useState<Bank[]|null>(null);
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [bank, setBank] = useState('Choose a bank');
    const [drop, setDrop] = useState(false);


    const submitData = {
        cardName: cardName,
        cardNumber: cardNumber,
        issuingBank: bank,
        expiry: expiry,
        userId: userId
    }

    useEffect(()=>{
        submit(submitData);
    },[bank, cardName, cardNumber, expiry])

    useEffect(()=>{
        const getBanks = async ()=>{
            await axios.get(`${hostURL}/api/v1/user/get-banks-list`)
            .then((response)=>{
                setBankList(response.data as Bank[])
            })
            .catch(()=>{toast.error('Network error: Could not fetch banks')})
        }
        getBanks();
    },[])

    useEffect(()=>{
        expiry.length === 2 ? setExpiry(expiry + '/') : ''
    },[expiry]);

  return (
    <>
        <div className="payment-cards-step2">

            <div className="loan-input-wrapper">
                <p>Select a bank</p>
                <div className="bank-select-div" onClick={()=>setDrop(!drop)}>
                    <p>{bank}</p>
                    {
                        drop? 
                        <HiOutlineChevronUp id="bank-chevron" /> :
                        <HiOutlineChevronDown id="bank-chevron" />
                    }
                    <div className="bank-select-dropdown" style={{display: drop? 'flex':'none'}}>
                        {
                            bankList?
                            bankList.map((bank)=>(
                                <div className="bank-option" key={bank.id} onClick={()=>{
                                    setBank(bank.name); 
                                    }}>
                                    <p>{bank.name}</p>
                                </div>
                            ))
                            :
                            <div className="full-pageLoader">
                                <ClipLoader 
                                color="#1E3A8A"
                                size={40}
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="loan-input-wrapper">
                <label htmlFor="">Card Number</label>
                <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" value={cardNumber} 
                    onChange={(e)=>setCardNumber(e.target.value)} maxLength={16}
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
                    style={{width:'130px'}}>
                    <label htmlFor="">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" value={expiry} 
                        onChange={(e)=> setExpiry(e.target.value)} maxLength={5}
                    />
                </div>

                <div className="loan-input-wrapper" 
                    style={{width:'120px'}}>
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