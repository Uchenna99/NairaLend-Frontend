import { DB_PaymentCard } from "../interfaces"

interface Props {
  cardArray: DB_PaymentCard[] | null;
}

const PaymentCardsStep1 = ({cardArray}: Props) => {
  return (
    <>
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

        <div className="payment-card" >
          <p><span id="plus">+</span> Add New Card</p>
        </div>
      </div>
    </>
  )
}

export default PaymentCardsStep1