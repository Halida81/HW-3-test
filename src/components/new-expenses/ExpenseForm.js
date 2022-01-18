import { useState } from 'react';
import './ExpenseForm.css'


const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    const titleChangeHandler  = (e) =>{
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) =>{
        setAmount(e.target.value)
    }
 
    const dateChangeHandler = (e) =>{
        setDate(e.target.value)
    }


    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date:''
    // })



    //Version -2

    // const inputChangeHandler  = (e)=>{
    //     const currentInput = e.target.name
    //     setUserInput({
    //         ...userInput,
    //         [currentInput]: e.target.value
    //     })
    // }

    // const titleChangeHandler = (e)=>{
    //      setUserInput({
    //          ...userInput,
    //          title: e.target.value
    //      })
    // }
    //  const amountChangeHandler = (e) => {
    //     setUserInput({
    //         ...userInput,
    //         amount: e.target.value
    //     })
    //  }

    //  const dateChangeHandler =(e) => {
    //     setUserInput({
    //         ...userInput,
    //         date: e.target.value
    //     })
    //  }
//Version-1
    // const inputChangeHandler = (e)=>{

    //    const currentInput = e.target.name
    //    if(currentInput === 'title'){
    //        setTitle(e.target.value)
    //    }else if(currentInput === 'amount'){
    //        setAmount(e.target.value)
    //    }else(currentInput === 'date'){
    //        setDate(e.target.value)
    //    }

    // }
     const submitHandler = (event) =>{
         event.preventDefault()
       let data = {
        enteredTitle: title,
           enteredAmount: amount,
          enteredDate: new Date(date)

       }
        console.log(data);
        setTitle('')
        setAmount('')
        setDate('')
 
        }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input name='title' type="text" onChange={titleChangeHandler} value={title} />
            </div>
            
            <div className='new-expense__control'>
                <label>Amount</label>
                <input name='amount' type="number" min='0.1' step='1' onChange={amountChangeHandler} value={amount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input name='date' type="date" min='2022-01-01'  onChange={dateChangeHandler} value={date}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;