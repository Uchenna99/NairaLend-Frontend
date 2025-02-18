import axios from "axios";
import { useEffect, useState } from "react"
import { AddPaymentCard, DB_PaymentCard, hostURL, JWT } from "../interfaces";
import { jwtDecode } from "jwt-decode";
import { CircleLoader, ClipLoader } from "react-spinners";
import PaymentCardsStep1 from "./PaymentCardsStep1";
import PaymentCardsStep2 from "./PaymentCardsStep2";
import { toast } from "sonner";
import userAxios from "../../config/axios.config";


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
          await userAxios.get(`/api/v1/user/get-cards-list/${userInfo.id}`)
          .then((response)=>{
            setCardArray(response.data as DB_PaymentCard[]);
            setUserId(userInfo.id);
          })
          .then(()=>{setLoading(false);})
        }
      } catch (error) {
        setLoading(false);
        if(axios.isAxiosError(error)) {
          toast.error(error.response?.data.message || "Network error: Couldn't fetch payment cards");
        }else{
          toast.error('An unexpected error occurred');
        }
      }
    }
    getCards();
  },[]);


  const handleSubmit = (data: AddPaymentCard)=>{
    setSubmitData(data);
  }


  const handlereateCard = async ()=>{
    setButtonLoader(true);
    if(submitData?.issuingBank==='Choose a bank' || submitData?.cardName==='' || submitData?.cardNumber==='' || 
      submitData?.expiry==='') {
        alert('Please fill in all the fields');
        setButtonLoader(false);
      }else{
        try {
          await axios.post(`${hostURL}/api/v1/user/new-card`, submitData)
          .then((response)=>{
            console.log(response.data);
            alert('Card added successfully');
            setStep(1);
          })
        } catch (error) {
          alert(error);
          setButtonLoader(false);
        }
      }
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
            <div className="dash-bottom-section" style={{position:'relative'}}>
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