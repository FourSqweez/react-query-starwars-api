import Navbar from './components/Navbar'
import React, { useState } from 'react'
import Planets from './components/Planets'
import People from './components/People'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('planets')
  return (
    <QueryClientProvider client={queryClient}>

      <div className="App">
        <h1>Star Wars Info</h1>
        <div className="content">
          <Navbar setPage={setPage} />
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App
