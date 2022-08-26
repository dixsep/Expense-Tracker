import React from 'react'

const isIncome = Math.round(Math.random());
const InfoCard = () => {
  return (
    <div style={{textAlign:'center',pading:'0 10%', fontFamily:'monospace'}}>
        Try Saying:  <br/>
        Add {isIncome? 'Income ':'Expense '}
        for {isIncome? '$100 ':'$50 '}
        in Category {isIncome? 'Business ':'House '}
        for {isIncome? 'Monday ':'Tuesday '}
    </div>
  )
}

export default InfoCard