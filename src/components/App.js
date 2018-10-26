import styled from 'styled-components';

export const Main = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Logo = styled.img`
    src: ${props => props.src}
    alt: ${props => props.alt || 'logo'}
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
`;

export const Link = styled.a`
    href: ${props => props.href}
    rel: ${props => props.rel}
    target: ${props => props.target}
    color: #61dafb;
`