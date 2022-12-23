import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserContext, UserContextWrapper } from "./components/context";
import { Home } from "./home-page/home";
import { CreateAccount } from "./components/create-account";
import { Deposit } from "./transactions/deposit";
import { Withdraw } from "./transactions/withdraw";
import { AllData } from "./components/all-data";
import { NavBar } from "./navigation/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Transactions from "./transactions/Transactions";

function App() {
  return (
    <UserContextWrapper>
      <NavBar />
      <Container className="pt-5">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/alldata" element={<AllData />} />
          <Route path="/transactions/:id" element={<Transactions />} />
        </Routes>
      </Container>
    </UserContextWrapper>
  );
}

export default App;
