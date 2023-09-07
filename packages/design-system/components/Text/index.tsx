
import styled from 'styled-components'

const StyledText = styled.span`
`;
interface Props  {
tag: 'h1' | 'h2' | 'h3' | 'span' | 'p'
children: React.ReactNode
}
export function Text({children, tag, ...props}: Props){
  return (<StyledText as={tag} {...props}>
    {children}
  </StyledText>)
}
