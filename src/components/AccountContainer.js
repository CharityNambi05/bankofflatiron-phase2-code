import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
let baseUrl="http://localhost:8001/transactions";
function AccountContainer() {
  const[data,setData]=useState([])
  const fetchData=async()=>{
    let res =await fetch(baseUrl)
    let data =await res.json()
    setData(data)
  }
  useEffect(()=>{
    fetchData()
  }, [])
  const searchData = (searchForm) => {
    let filterData = data.filter((trans) => {
      return trans.description.toLowerCase().includes(searchForm.toLowerCase());
    });

    setData(filterData);
  };
  useEffect(() => {
    fetchData()
  }, [])
 return (
    <div>
      <Search searchData={searchData}/>
      <AddTransactionForm />
      <TransactionsList list={data}/>
    </div>
  );
}

export default AccountContainer;
