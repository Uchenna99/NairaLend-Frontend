import axios from "axios";
import { useEffect, useState } from "react";
import { DB_BankAccount, JWT } from "../interfaces";
import { jwtDecode } from "jwt-decode";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import userAxios from "../../config/axios.config";

interface Props {
    setStep: ()=>void;
}

const BankAccStep1 = ({setStep}: Props) => {
    const navigate = useNavigate();
    const [bankAccounts, setBankAccounts] = useState<DB_BankAccount[]|null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const getAccounts = async ()=>{
            const user = localStorage.getItem('nairaLender');
            if(!user){
                toast.error('No user found');
                navigate('/login');
            }else{
                try {
                    const getUser: JWT = jwtDecode(user);
                    await userAxios.get(`/api/v1/user/get-bank-accounts/${getUser.id}`)
                    .then((response)=>{
                        setBankAccounts(response.data as DB_BankAccount[]);
                        setLoading(false);
                    })
                } catch (error) {
                    setLoading(false);
                    if(axios.isAxiosError(error)) {
                        toast.error(error.response?.data.message || "Network error");
                    }else{
                        toast.error('An unexpected error occurred');
                    }
                }
            }
        }
        getAccounts();
    },[]);


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
                        <div className="bank-logo" style={{backgroundImage:`url(${account.image})`}}></div>
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