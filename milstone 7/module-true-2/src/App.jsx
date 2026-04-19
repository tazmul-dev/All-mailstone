
import './App.css'
import Controlled from './component/controled/Controlled'
import HookForm from './component/HookForm/HookForm'
import ProductManegment from './component/productManegmetn/ProductManegment'
import SubmitAction from './component/submitAction/SubmitAction'
import SubmitionForm from './component/SubmitionForm'

function App() {
 

  return (
    <>
     <h1>Explor react from</h1>
     {/* <Controlled></Controlled> */}
     <ProductManegment></ProductManegment>
     
    </>
  )
}

export default App
/**
 * get form value stape:
 * 1. e.target.[name of the input fild].value
 * 2. use form action and formData in the action handeler. formData.get("name of the input field")
 * 3. controlled component.one per of each fied. use state on chage of the field. usefull to dynamically handeler error
 * 4.make custom hook.
 */