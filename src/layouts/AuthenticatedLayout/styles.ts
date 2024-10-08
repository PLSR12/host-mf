import styled from 'styled-components'

import { Layout } from 'antd'
import { type LayoutProps } from 'antd/lib/layout'
const { Content } = Layout

// @ts-ignore
export const ContentContainer: typeof Content = styled(Content)<LayoutProps>`
  min-height: 100vh;
  background: #ebeadb;
  padding: 2rem;
`

export const LayoutStyled = styled(Layout)`
  overflow-y: auto;
`
