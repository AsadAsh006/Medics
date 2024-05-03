import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [
        {
            name:'Asad'  , phone:'03213905471'
        },
        {
            name:'saad'  , phone:'03261905471'
        }
    ],

 newValue:   [

    ]
  },
  reducers: {
    addContact: (state, action) => {
        console.log(state.value)
    console.log(action.payload)
     state.value = [...state.value, action.payload]
     console.log("🚀 ~  state.value:",  state.value)
    },
    deletContact: (state, action) => {
   console.log(action.payload)
   const data = state.value.filter(val => val.phone != action.payload)
   state.value = data
    },
  searchContact:(state, action)=> {
    const data = state.value.filter(val=>val.name ==action.payload)
    state.newValue=data
    // console.log("🚀 ~ newValue:",state.newValue)
   }


  }
})

// Action creators are generated for each case reducer function
export const { addContact , deletContact, searchContact} = counterSlice.actions

export default counterSlice.reducer