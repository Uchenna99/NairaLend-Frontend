import { DB_PaymentCard } from "../interfaces"

interface Props {
  cardArray: DB_PaymentCard[] | null;
  step: ()=>void;
}

const PaymentCardsStep1 = ({cardArray, step}: Props) => {
  return (
    <>
      <div className="payment-cards-step1">
        {
          cardArray?
          <h4>Your registered cards</h4>
          :
          <h4>No registered cards</h4>
        }

        <div className="payment-cards-holder">

          {
            cardArray &&
            cardArray.map((card)=>(
              <div className="payment-card" key={card.id}><p>{card.cardName}</p></div>
            ))
          }

          <div className="payment-card" onClick={()=>{step()}} >
            <p><span id="plus">+</span> Add New Card</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCardsStep1;