import axios from "axios";
import { useEffect, useState } from "react"
import { AddPaymentCard, DB_PaymentCard, hostURL, JWT } from "../interfaces";
import { jwtDecode } from "jwt-decode";
import { CircleLoader, ClipLoader } from "react-spinners";
import PaymentCardsStep1 from "./PaymentCardsStep1";
import PaymentCardsStep2 from "./PaymentCardsStep2";


const PaymentCards = () => {
  const [loading, setLoading] = useState(true);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [step, setStep] = useState(1);
  const [cardArray, setCardArray] = useState<DB_PaymentCard[]|null>(null);
  const [userId, setUserId] = useState('');
  const [submitData, setSubmitData] = useState<AddPaymentCard|null>(null);
  

  useEffect(()=>{
    const getCards = async ()=>{
      try {
        const user = await localStorage.getItem('nairaLender');
        if(!user){
          console.log('Error: Cannot find user');
        }else{
          const userInfo: JWT = jwtDecode(user);
          await axios.get(`${hostURL}/api/v1/user/get-cards-list/${userInfo.id}`)
          .then((response)=>{
            setCardArray(response.data as DB_PaymentCard[]);
            setUserId(userInfo.id);
          })
          .then(()=>{setLoading(false);})
        }
      } catch (error) {
        alert(error);
        setLoading(false);
      }
    }
    getCards();
  },[]);


  const handleSubmit = (data: AddPaymentCard)=>{
    setSubmitData(data);
  }


  const handlereateCard = async ()=>{
    await axios.post(`${hostURL}/api/v1/user/new-card`, submitData)
    .then((response)=>{
      console.log(response.data);
      setStep(1);
    })
  }

  return (
    <>
      {
        loading?
        <div className="full-pageLoader">
          <ClipLoader
          color="#1E3A8A"
          size={70}
          />
        </div>
        :
        <div className="payment-cards-wrapper">
          {
            step === 1 &&
            <PaymentCardsStep1 cardArray={cardArray} step={()=>setStep(2)} />
          }
          {
            step === 2 &&
            <PaymentCardsStep2 userId={userId} submit={handleSubmit} />
          }

          {
            step === 2 &&
            <div className="dash-bottom-section">
              <button id="dash-bottom-butn" onClick={()=>setStep(1)}>
                  Back
              </button>
              <button id="dash-bottom-butn" onClick={handlereateCard}>
                  Add Card
                  {
                    buttonLoader &&
                    <div className="button-loader-div">
                    <CircleLoader 
                    color="#1E3A8A"  
                    size={15}
                    />
                  </div>
                  }
              </button>
            </div>
          }
        </div>
      }
    </>
  )
}

export default PaymentCards