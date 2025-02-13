import axios from "axios";
import { useEffect, useState } from "react"
import { DB_PaymentCard, hostURL, JWT } from "./interfaces";
import { jwtDecode } from "jwt-decode";
import { ClipLoader } from "react-spinners";


const PaymentCards = () => {
  const [loading, setLoading] = useState(true);
  const [cardArray, setCardArray] = useState<DB_PaymentCard[]|null>(null);
  

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
              <h4>Your registered cards</h4>

              <div className="payment-cards-holder">

                {
                  cardArray &&
                  cardArray.map((card)=>(
                    <div className="payment-card" key={card.id}><p>{card.cardName}</p></div>
                  ))
                }

                <div className="payment-card"><p><span id="plus">+</span> Add New Card</p></div>
              </div>

            </div>
          }
    </>
  )
}

export default PaymentCards