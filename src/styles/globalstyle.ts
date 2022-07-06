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

  .collapsibleContainer{
    color: ${({ theme }) => theme.colors.white100};
    padding: 24px 0;
    width: 100%;
    border-radius: 4px;
    text-align: center;
    display: flex;
    justify-content: center;
    background: -webkit-linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  background: linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  
}
.openedCollapsibleContainer{
    background: -webkit-linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
  background: linear-gradient(-35deg, rgb(0, 0, 0), rgb(31, 31, 31));
    font-size: ${({ theme }) => theme.sizes.medium};
    color: ${({ theme }) => theme.colors.white500};
    padding: 24px 0;
    text-align: center;
    font-weight: 700;
    width: 99%;
    border-radius: 4px;
    text-align: center;
    margin: 8px auto;
}
.collapsibleContent {
    text-align: center;
    width: 100%;
    border-radius: 4px;
    margin: 8px auto;
 
     p {
      color: ${({ theme }) => theme.colors.white500};
      font-size: ${({ theme }) => theme.sizes.normal};
      text-align: center;
      width: 100%;
      @media (max-width: 720px) {
        font-size: ${({ theme }) => theme.sizes.small};
      }
    }
  }
  


`;
