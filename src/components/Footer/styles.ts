import { Footer } from 'antd/es/layout/layout'
import styled from 'styled-components'

export const FooterStyled = styled(Footer)`
  background: #38592f;
  display: flex;
  align-items: center;
  height: 40px;
  flex-direction: row;
  justify-content: end;

  @media (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 1280px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const TextCopyRight = styled.p`
  color: white;
  font-size: 16px;
  margin: 0px;
`
