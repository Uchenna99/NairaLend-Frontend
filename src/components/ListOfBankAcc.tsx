import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { DB_BankAccount, hostURL, JWT } from "./interfaces";
import axios from "axios";
import fbn from "../assets/Images/first-bank-nigeria.512x512.png"


const ListOfBankAcc = () => {
    const [bankAccounts, setBankAccounts] = useState<DB_BankAccount[]|null>(null);
    const [selected, setSelected] = useState('');


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
                    })
                    
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getAccounts();
    },[]);
  return (
    <>
        <div className="bank-acc-box">
            {
                bankAccounts &&
                bankAccounts.map((account)=>(
                    <div className={`mapped-bank-acc ${selected===account.id? 'selected-div':'unselected-div'}`}
                        key={account.id}
                        onClick={()=>{setSelected(account.id)}}>
                        <p>{account.bankName}</p>
                        <p>{account.accountNumber}</p>
                        <img className="bank-logo" src={fbn} alt="" />
                    </div>
                ))
            }

        </div>
    </>
  )
}

export default ListOfBankAcc;