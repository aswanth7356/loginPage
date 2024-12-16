import './App.css'
import styled from 'styled-components'

function App() {

  const Container = styled.div`
  display: flex ;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #f5f5f5;
  margin-top:5rem;
`;

  const LoginBox = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;


  const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #333333;
`;

  const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

  const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

  const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

  const FooterText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
  color: #666666;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;



  return (
    <>
      <Container>
        <LoginBox>
          <Title>Login</Title>
          <Form>
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
          </Form>
          <FooterText>
            Don't have an account? <a href="#">Sign up</a>
          </FooterText>
        </LoginBox>
      </Container>
    </>
  )
}

export default App
