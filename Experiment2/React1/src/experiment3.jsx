import { useEffect, useState } from 'react'

export function StateCounter() {
  const [count, setCount] = useState(0)
  return <div><h2>React useState Hook</h2><h3>Counter: {count}</h3><button onClick={() => setCount(value => value + 1)}>Increment</button></div>
}

export function ApiUsers() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    const controller = new AbortController()
    fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error('Request failed'); return response.json() })
      .then(setUsers)
      .catch(err => { if (err.name !== 'AbortError') setError('Could not load users. Check your internet connection.') })
    return () => controller.abort()
  }, [])
  return <div><h2>User List</h2>{error && <p role="alert">{error}</p>}<ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul></div>
}

function Student({ name, department }) {
  return <div><h2>Student Details</h2><p>Name: {name}</p><p>Department: {department}</p></div>
}

export function PropsExample() {
  return <Student name="Ganesh" department="Computer Science" />
}

export function StudentForm() {
  const [name, setName] = useState('')
  const handleSubmit = event => { event.preventDefault(); alert('Student Name: ' + name) }
  return <div><h2>Student Form</h2><form onSubmit={handleSubmit}><input type="text" aria-label="Student name" placeholder="Enter Name" value={name} onChange={event => setName(event.target.value)} /><br /><br /><button type="submit">Submit</button></form></div>
}

export function StudentList() {
  const students = ['Ganesh', 'Arun', 'Priya', 'Karthik', 'Divya']
  return <div><h2>Student List</h2><ul>{students.map(student => <li key={student}>{student}</li>)}</ul></div>
}
