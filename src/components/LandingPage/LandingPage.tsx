import styled, { keyframes } from "styled-components";

const slidein = keyframes`
    from {
        margin-left: 100%;
        width: 300%;
    }
    to {
        margin-left: 0%;
        width: 100%;
    }
`
const opacity = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Content = styled.div`
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between; 
    padding: 0rem 1.5rem 9rem 1.5rem;
    width: 100%;
    --tw-text-opacity: 1;

    @media (min-width: 768px) {
        padding-bottom: 2.5rem;
        padding-left: 8rem;
        padding-right: 8rem;
    }
`
const Header = styled.h1`
    animation-name: ${slidein};
    animation-duration: 1000ms;
    animation-delay: 150ms;
    color: rgba(107, 114, 128, var(--tw-text-opacity));
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    --tw-text-opacity: 1;
    
    @media (min-width: 768px) {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
`
const Subheader = styled.h2`
    animation-name: ${opacity};
    animation-duration: 2000ms;
    animation-delay: 150ms;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    padding-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 2.25rem;
        line-height: 2.5rem;
    }

`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-top: 3rem;
`
const Wrapper = styled.div`
    background-color: #00071c;
    height: 100vh;
    position: relative;
    scroll-snap-align: start;
    width: 100vw;
    z-index: 10;
`
const Link = styled.a`
    :hover {
        color: ${props => props.color || 'rgba(16, 185, 129, var(--tw-text-opacity))'};
        transition: color ease-in-out 150ms; 
        --tw-text-opacity: 1;
    }
`

export const LandingPage = () => {
    return (
        <Wrapper>
            <Content>
                <TextBox>
                    <Header>Jacob Caldwell</Header>
                    <Subheader>Product Development Engineer from Memphis, TN</Subheader>
                    <Subheader>Currently @ <Link href="https://abb.com">ABB</Link></Subheader>
                </TextBox>
                <span className="animate-bounce">↓ scroll</span>
            </Content>
        </Wrapper>
    )
}