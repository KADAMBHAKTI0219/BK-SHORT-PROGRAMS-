import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditQuote from './EditQuote'
import QuotesApp from './QuotesApp'
import AddQuote from './AddQuote'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuotesApp/>}/>
        <Route path="/edit/:id" element={<EditQuote/>}/>
        <Route path="/addQuotes" element={<AddQuote/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
