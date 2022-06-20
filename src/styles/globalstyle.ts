import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.default};
    }
    
    html{
        font-family: monospace;
        scroll-behavior: smooth;
    }
    body{
        overflow-x: hidden;
        width: 100%;
        height: 100vh;
    }
    button{
        display: flex;
        justify-content: center;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 4px;
    }
    li, ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    
    .active-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 320px;
        height: 240px;
        padding: 1rem;
        background: ${(props) => props.theme.colors.element_base};
        border-radius: 4px;
        margin: 25% auto;
        h3{
            font-size: 1.24rem;
            color: ${(props) => props.theme.colors.black100}
        }
        @media(max-width: 720px){
            width: 92%;
        }
  }

  .video-modal{
      background: transparent;
      @media (max-width: 720px) {
        margin: 12px auto;
        align-self: center;
     }
  }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }

  .react-modal-overlay-video{
        background: rgba(0, 0, 0, .88);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
  }

  .collapsible-info-parent{
    width: 100%;
    cursor: pointer;
  }

  .headerScrolling {
    position: fixed;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .headerNotScrolling {
    background-color: transparent;
  }

  .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
  }
  .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }

  .lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }
   .lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

  .testimonialCard{
    background-color: ${({ theme }) => theme.colors.black100};
    color: ${({ theme }) => theme.colors.white100};
  }

  .metricIcon{
    color: ${({ theme }) => theme.colors.secondary_light};
    width: 32px;
    height: 32px;
  }

  .countUp{
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 800;
    font-size: ${({ theme }) => theme.sizes.xxhuge};
    @media(max-width: 1080px){
      font-size: ${({ theme }) => theme.sizes.xhuge};
    }
    @media(max-width: 720px){
      font-size: ${({ theme }) => theme.sizes.huge};
    }
  }

  .collapsibleContent{
    padding: 14px;
    color: ${({ theme }) => theme.colors.secondary_light};
    font-size: ${({ theme }) => theme.sizes.medium};
  }
  
  .collapsibleContainer{
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 800;
  }
  .openedCollapsibleContainer{
    color: ${({ theme }) => theme.colors.primary_light};
    font-weight: 500;
    padding: 14px 32px 0;
  }

  


`;
