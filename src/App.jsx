import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import './App.css'
import Posts from "./Posts/Posts.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-2xl">Objave</h1>
      <Posts/>
    </QueryClientProvider>
  )
}

export default App
