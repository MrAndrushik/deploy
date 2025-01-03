import { useState } from 'react'
import './App.css'
import { api } from './api'
import { Status } from './components/ui/status'
import { toast } from 'react-toastify';

function App() {
  const [isReady, setIsReady] = useState(false);

  const handleHealtcheck = async () => {
    try {
      const response = await api.get<{ fine: boolean }>('/ping')

      if (response.data?.fine) {
        setIsReady(true);
        
        toast.success('Success')
      } else {
        toast.error('Error');
      }
    } catch (error) {
      toast.error(JSON.stringify(error));
    }
  }

  return (
    <>
      <div className="card">
        <div>
          {isReady ? <Status size="lg" value="success">All working</Status> : <Status size="lg" value="error">Something wrong</Status>}
        </div>
        <button onClick={handleHealtcheck}>
          Check server connection
        </button>
      </div>
    </>
  )
}

export default App
