import { useState } from 'react'
import { ClassCounter, FunctionalCounter, ButtonClickEvent, ConditionalRendering, StringLiterals } from './2a.jsx'
import { StateCounter, ApiUsers, PropsExample, StudentForm, StudentList } from './experiment3.jsx'
import './lab.css'

const examples = [
  { id: '2a', title: '2(a) Class counter', Component: ClassCounter },
  { id: '2b', title: '2(b) Functional counter', Component: FunctionalCounter },
  { id: '2c', title: '2(c) Button click event', Component: ButtonClickEvent },
  { id: '2d', title: '2(d) Conditional rendering', Component: ConditionalRendering },
  { id: '2e', title: '2(e) String literals', Component: StringLiterals },
  { id: '3a', title: '3(a) useState counter', Component: StateCounter },
  { id: '3b', title: '3(b) useEffect API', Component: ApiUsers },
  { id: '3c', title: '3(c) Props', Component: PropsExample },
  { id: '3d', title: '3(d) Form', Component: StudentForm },
  { id: '3e', title: '3(e) map() list', Component: StudentList },
]

export default function Lab() {
  const [selected, setSelected] = useState('2a')
  const current = examples.find(example => example.id === selected)
  const Example = current.Component
  return <main className="lab"><h1>React Lab Experiments</h1><p>Choose an experiment to view its sample output.</p><nav aria-label="Experiments">{examples.map(example => <button key={example.id} type="button" aria-pressed={selected === example.id} onClick={() => setSelected(example.id)}>{example.title}</button>)}</nav><section aria-label={current.title} className="output"><Example /></section></main>
}
