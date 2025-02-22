import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { DB_BankAccount, JWT } from "../interfaces";
import axios from "axios";
import { ClipLoader,  } from "react-spinners";
import glitch from "../../assets/Images/glitch_bacground.png"
import userAxios from "../../config/axios.config";
import { toast } from "sonner";


interface Props {
    netError: ()=>void;
}


const ListOfBankAcc = ({netError}: Props) => {
    const [bankAccounts, setBankAccounts] = useState<DB_BankAccount[]|null>(null);
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState('true');


    useEffect(()=>{
        const getAccounts = async ()=>{
            const user = await localStorage.getItem('nairaLender');
            if(!user){
                console.log('Error: Cannot find user');
            }else{
                try {
                    const getUser: JWT = jwtDecode(user);
                    await userAxios.get(`/api/v1/user/get-bank-accounts/${getUser.id}`)
                    .then((response)=>{
                        setBankAccounts(response.data as DB_BankAccount[]);
                        setLoading('false');
                    })
                } catch (error) {
                    setLoading('error');
                    if(axios.isAxiosError(error)) {
                        toast.error(error.response?.data.message || "Network error");
                    }else{
                        toast.error("An unexpected error occurred");
                    }
                }
            }
        }
        getAccounts();
    },[]);


    useEffect(()=>{
        if(loading === 'error'){
            netError();
        }else{null};
    },[loading]);

  return (
    <>
        {
            loading === 'true'?
            <div className="pageLoader">
                <ClipLoader 
                color="#1E3A8A"
                size={50}
                /> 
            </div>
            :
            loading === 'error'?
            <div className="glitch-screen" style={{backgroundImage:`url(${glitch})`}}>
                <h2>No network connection</h2>
            </div>
            :
            loading === 'false'?
            <div className="bank-acc-box-cover">
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
            </div> : null
        }
    </>
  )
}

export default ListOfBankAcc;