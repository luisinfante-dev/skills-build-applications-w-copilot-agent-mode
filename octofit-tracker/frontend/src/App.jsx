import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Checking backend...')
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const healthResponse = await fetch('http://localhost:8000/api/health')
        const healthData = await healthResponse.json()
        setStatus(healthData.status)

        const usersResponse = await fetch('http://localhost:8000/api/users')
        if (usersResponse.ok) {
          const usersData = await usersResponse.json()
          setUsers(usersData)
        }
      } catch (error) {
        setStatus('Backend unavailable')
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-5">
              <span className="badge text-bg-primary mb-3">OctoFit Tracker</span>
              <h1 className="display-5 fw-bold mb-3">Modern multi-tier fitness tracking</h1>
              <p className="lead text-muted">
                React 19, Vite, Express, TypeScript, and MongoDB are now wired together for the initial app shell.
              </p>

              <div className="mt-4 d-flex flex-wrap gap-2">
                <span className="badge text-bg-success">Frontend: 5173</span>
                <span className="badge text-bg-info">Backend: 8000</span>
                <span className="badge text-bg-secondary">MongoDB: 27017</span>
              </div>

              <div className="mt-4 p-3 rounded bg-light">
                <p className="mb-1 fw-semibold">Backend status</p>
                <p className="mb-0">{status}</p>
              </div>

              {users.length > 0 && (
                <div className="mt-4">
                  <h2 className="h5">Sample users</h2>
                  <ul className="list-group">
                    {users.map((user) => (
                      <li className="list-group-item" key={user._id || user.email}>
                        {user.name || user.email}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
