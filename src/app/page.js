"use client"
//1. Import area

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'


//2. Define area
export default function Home() {
  //2.1 Hooks area
  const [stockName, setStockName] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [stockPrice, setStockPrice] = useState('')

  useEffect(()=>{
    setInterval(function (e) {
      
      // console.log(e.target.value);
      fetch(`/api/getstockprice?stockName=${stockName}`).then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data);
        console.log(data.price);
        setStockPrice(data.price)
  
      }).catch((err) => {
  
      }).finally(() => {
  
      })
    }, 60000);
  },[stockName])
  
  // 2.2 function Defination area
  const handleChange = (e) => {
    //object.property.property
    setStockName(e.target.value);
    console.log(e.target.value);
    
    // This is called promiseChain
    fetch(`/api/getstockprice?stockName=${e.target.value}`).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
      console.log(data.price);
      setStockPrice(data.price)

    }).catch((err) => {

    }).finally(() => {

    })
    
  }  //new way two define a function Es6 (2015)

  //2.3 return statement
  return (
    <main>
      <Box sx={{ minWidth: '90%', }}>
        <h1>Current price of below stock is {stockPrice} </h1>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stock Name</InputLabel>
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
      </Box>
    </main>
  )
}
