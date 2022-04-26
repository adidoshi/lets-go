import "./App.css";
import EnrollmentForm from "./components/EnrollmentForm";
// import RegistrationForm from "./components/RegistrationForm";
// import LoginForm from "./components/LoginForm";
// import FormikContainer from './components/FormikContainer'
import { theme, ChakraProvider } from "@chakra-ui/react"

function App() {

  return (
    <>
    <ChakraProvider theme={theme}>
    <div className="App">
    {/* <FormikContainer /> */}
    {/* <LoginForm /> */}
    {/* <RegistrationForm /> */}
    <EnrollmentForm />
    </div>
    </ChakraProvider>
    </>
  )
}

export default App;
