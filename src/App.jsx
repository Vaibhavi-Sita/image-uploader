import './App.scss'
import { useLayout } from './contexts/layoutContext'
import Load from './layouts/Load/Load'
import Upload from './layouts/Upload/Upload'
import Success from './layouts/Success/Success'

function App() {
  const { load, layout } = useLayout()

  return (
    <div className="App">
      {
        load === true ? <Load />
        : layout === 'Upload' ? <Upload /> 
        : layout === 'Success' && <Success />
      }
    </div>
  )
}

export default App
