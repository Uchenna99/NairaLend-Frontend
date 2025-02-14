import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { DB_BankAccount, hostURL, JWT } from "./interfaces";
import axios from "axios";
import { ClipLoader,  } from "react-spinners";


const ListOfBankAcc = () => {
    const [bankAccounts, setBankAccounts] = useState<DB_BankAccount[]|null>(null);
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const getAccounts = async ()=>{
            const user = await localStorage.getItem('nairaLender');
            if(!user){
                console.log('Error: Cannot find user');
            }else{
                try {
                    const getUser: JWT = jwtDecode(user);
                    await axios.get(`${hostURL}/api/v1/user/get-bank-accounts/${getUser.id}`)
                    .then((response)=>{
                        setBankAccounts(response.data as DB_BankAccount[]);
                        setLoading(false);
                    })
                } catch (error) {
                    setLoading(false);
                    alert(error);
                    console.log(error);
                }
            }
        }
        getAccounts();
    },[]);

  return (
    <>
        {
            loading? 
            <div className="pageLoader">
                <ClipLoader 
                color="#1E3A8A"
                size={50}
                /> 
            </div>
            :
            <div className="bank-acc-box">
                {
                    bankAccounts &&
                    bankAccounts.map((account)=>(
                        <div className={`mapped-bank-acc ${selected===account.id? 'selected-div':'unselected-div'}`}
                            key={account.id}
                            onClick={()=>{setSelected(account.id)}}>
                            <p>{account.bankName}</p>
                            <p>{account.accountNumber}</p>
                            <div className="bank-logo" style={{backgroundImage: `url(${account.image})`}}></div>
                        </div>
                    ))
                }

            </div>
        }
    </>
  )
}

export default ListOfBankAcc;