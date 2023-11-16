import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  display: flex;
  height: 4rem;
  background-color: #0E3441;
  align-items: center;
  justify-content: space-around;
`

const Img = styled.img`
  height: 100%;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    color: #00f508;
  }
`

const Header = () => {
  return (
    <WrapperContainer>
      <StyledLink to="/">Cursos</StyledLink>
      <Img src="./src/assets/ia.webp" alt="" />
      <StyledLink to="/student">Estudantes</StyledLink>
    </WrapperContainer>
  )
}

export default Header
