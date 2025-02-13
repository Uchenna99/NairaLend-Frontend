import axios from "axios";
import { useEffect, useState } from "react";
import { Bank, DB_BankAccount, hostURL, JWT } from "./interfaces";
import { jwtDecode } from "jwt-decode";
import fbn from "../assets/Images/first-bank-nigeria.512x512.png"
import { ClipLoader } from "react-spinners";

interface Props {
    setStep: ()=>void;
    setBanksList: (data: Bank[]|null)=>void;
}

const BankAccStep1 = ({setStep, setBanksList}: Props) => {
    const [bankAccounts, setBankAccounts] = useState<DB_BankAccount[]|null>(null);
    const [loading, setLoading] = useState(true);
    const [banksArray, setBanksArray] = useState<Bank[] | null>(null);


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
                    .then(async()=>{
                        const response = await axios.get(`${hostURL}/api/v1/user/get-banks-list`)
                        setBanksArray(response.data as Bank[]);
                    })
                } catch (error) {
                    alert(error);
                    setLoading(false);
                    console.log(error);
                }
            }
        }
        getAccounts();
    },[]);

    useEffect(()=>{
        setBanksList(banksArray);
    },[banksArray]);

  return (
    <>
        <div className="bank-acc-box">

            {
                loading &&
                <div className="empty-div-70px">
                    <ClipLoader 
                    color="#1E3A8A"
                    size={40}
                    />
                </div>
            }
            {
                bankAccounts &&
                bankAccounts.map((account)=>(
                    <div className="mapped-bank-acc" key={account.id}>
                        <p>{account.bankName}</p>
                        <p>{account.accountNumber}</p>
                        <img className="bank-logo" src={fbn} alt="" />
                    </div>
                ))
            }

            <h4>
                Add a bank account
            </h4>
            <div className="add-bank-acc" onClick={()=>{setStep()}}>
              <p>+</p>
            </div>
        </div>
    </>
  )
}

export default BankAccStep1