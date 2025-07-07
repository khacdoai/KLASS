
import './App.css'
import ButtonClickCounter from './components/ButtonClickCounter'
import InputFieldTracker from './components/InputFieldTracker'
import { ToggleSwitch } from './components/ToggleSwitch'
import HoverHighlight from './components/HoverHighlight'
import FormSubmissionAlert from './components/FormSubmissionAlert'
import KeyPressDisplay from './components/KeyPressDisplay'
import DoubleClickMessage from './components/DoubleClickMessage'
import DropdownSelect from './components/DropdownSelect'
import CheckboxToggle from './components/CheckboxToggle'
import SearchFilter from './components/SearchFilter'

function App() {


  return (
    <div>
      <ButtonClickCounter />
      <InputFieldTracker />
      <ToggleSwitch />
      <HoverHighlight />
      <FormSubmissionAlert />
      <KeyPressDisplay />
      <DoubleClickMessage />
      <DropdownSelect />
      <CheckboxToggle />
      <SearchFilter />
    </div>
  )
}

export default App
