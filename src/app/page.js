"use client"
//1. Import area

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'


//2. Define area
export default function Home() {
  //2.1 Hooks area
  const [selectValue, setSelectValue] = useState('');
  const [stockPrice, setStockPrice] = useState('')

  //function Defination area
  const handleChange = (e) => {
              //object.property.property
    console.log(e.target.value);
    // This is called promiseChain
    fetch('/api/getstockprice').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      console.log(data.price);
      setStockPrice(data.price)

    }).catch((err)=>{

    }).finally(()=>{

    })
    // Now call the API
  } 
  return (
    <main>
      <h1>Current price of below stock is {stockPrice} </h1>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Stock Market</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Stock Price"
          value={selectValue}
          onChange={handleChange}
        >
          <MenuItem value="idfc">IDFC LIMITED</MenuItem>
          <MenuItem value="icici">ICICI BANK LIMITED</MenuItem>
          <MenuItem value="hdfc">HDFC BANK LIMITED</MenuItem>
        </Select>
      </FormControl>
    </main>
  )
}
