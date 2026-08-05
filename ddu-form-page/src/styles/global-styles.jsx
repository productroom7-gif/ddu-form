import { styled, createGlobalStyle } from 'styled-components'
import user from '../config';
import { Blue, Black, Red, LightBlue, BorderGrey, LightGrey } from "./colors";

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap');

  body {
    font-family: 'Montserrat', serif;
    background-color: #f4f7fc;
    position: relative;
    width: 100%;
    height: 100%;
    color: #000;
    .col-md-12 {
      @media screen and (max-width: 767.5px) {
        padding-left: 24px;
        padding-right: 24px;
      }
    }
  }

  header {
    background-color: #fff;
    padding: 10px 0;
    border-bottom: 1px solid rgb(241, 242, 244);
    .header-logo {
      max-width: 120px;
    }

     @media screen and (max-width: 580px) {
      .header-logo {
        max-width: 90px;
      }
    }
  }

  footer {
    padding: 12px 0;
    background: ${LightGrey};
    font-size: 14px;

    @media screen and (max-width: 580px) {
      .footer-col {
        flex-wrap: wrap;
      }
      .copyright, .dev {
        width: 100%;
      }
      .dev {
        margin-top: 12px;
      }
    }
    
    p {
      font-size: 14px;
      line-height: 20px;
    }
    .dev {
      display: flex;
      align-items: center;
      gap: 6px;
      p {
        margin-top: 3px;
      }
    }
  }

  main {
    padding: 80px 0;
  }

  #root {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  .contain-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .cover-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    font-size: calc(1.3rem + 0.6vw);
    font-weight: 700;
    color: ${user === "meest" ? Blue : Black};
    margin-bottom: 48px;
  }

  h3 {
    font-size: calc(1.278125rem + 0.3375vw);
    font-weight: 700;
    color: ${user === "meest" ? Blue : Black};
  }

  h5 {
    font-size: 17.5px;
    font-weight: 700;
    color: ${user === "meest" ? Blue : Black};
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 24.5px;
    }
  }
`

export const HeaderEmail = styled.p`
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 26px;
  i {
    display: block;
    font-size: 20px;
    position: absolute;
    top: 2px;
    left: 0;
    color: ${Blue};
  }

  @media screen and (max-width: 580px) {
    font-size: 12px;
    padding-left: 20px;
    i {
      font-size: 16px;
      top: 4px;
    }
  }
`

export const LanguageSwitcher = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  @media screen and (max-width: 580px) {
    font-size: 12px;
    p {
      font-size: 12px;
      line-height: 18px;
    }
  }
`

export const LanguageEmoji = styled.span`
  font-family: 'Noto Color Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;

  justify-content: ${({ justifycontent }) => justifycontent || "flex-start"};
  align-items: ${({ alignitems }) => alignitems || "stretch"};
  flex-direction: ${({ flexdirection }) => flexdirection || "row"};
  flex-wrap: ${({ flexwrap }) => flexwrap || "nowrap"};
  gap: ${({ gap }) => gap || "0"};
  margin-bottom: ${({ marginbottom }) => marginbottom || "0"};
  div {
    width: ${({ innerelementswidth }) => innerelementswidth || "100%"};
  }
  p {
    b {
      color: ${Blue};
    }
  }
`

export const Dropdown = styled.div`
  position: absolute;
  background-color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${BorderGrey};
  top: 100%;
  left: -50%;
  width: max-content !important;
  p {
    display: block;
    padding: 8px 4px;
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (max-width: 991.5px) {
    left: -150%;
  }

  @media screen and (max-width: 580px) {
    left: -250%;
    p {
      font-size: 12px;
      line-height: 16px;
    }
  }
`

export const SectionTitle = styled.h3`
    padding: 25px 30px 25px 50px;
    background-color: white;
    position: relative;
    border-radius: 8px;
    margin-bottom: 24px;
    color: ${user === "meest" ? Blue : Black};
    font-weight: 700;
    &:before {
        display: block;
        content:'';
        width: 11px;
        height: 20px;
        background: transparent url(../src/assets/img/arrow-icon.svg) center no-repeat;
        background-size: contain;
        position: absolute;
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
        left: 30px;
    }

    @media screen and (max-width: 767.5px) {
        padding: 15px 20px 15px 40px;
        &:before {
          left: 20px;
        }
    }
`

export const SectionContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #eaecee;
  margin-bottom: ${({ marginbottom }) => marginbottom || "24px"};
  &:last-child {
    margin-bottom: 0;
  }

   @media screen and (max-width: 767.5px) {
      padding: 24px 20px;
  }
`
export const FileLabelContainer = styled.label`
  display: block;
  background-color: #f8f9fa;
  padding: 32px;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
  overflow: hidden;
  cursor: pointer;
  transition: .3s all ease;
  text-align: center;
  &:hover {
    background-color: ${LightBlue};
    border-color: ${Blue};
  }

  input {
    display: none;
  }

  i {
    display: block;
    width: 34px;
    height: 34px;
    font-size: 32px;
    margin: 0 auto;
    margin-bottom: 8px;
  }

  h6 {
    font-size: 16px;
    font-weight: 400;
    color: #000;
    span {
      color: ${Blue};
      font-weight: 500;
    }
  }
  p {
    display: block;
    font-size: 14px;
    line-height: 21px;
    color: #6C757D;
  }

  @media screen and (max-width: 767.5px) {
    padding: 32px 24px;
  }
`

export const SubmitButton = styled.button.attrs({ type: "submit" })`
  display: block;
  width: 100%;
  background-color: ${Blue};
  color: #fff;
  font-weight: 700;
  padding: 14px 15px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: .2s all ease;
  text-transform: uppercase;
  border: 0;
  &:hover {
    background-color: #008cff;
  }
  &:focus {
    outline: none;
  }
`

export const ErrorMessage = styled.div`
  color: ${Red};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  margin-top: 8px;
  width: 100%;
`

export default GlobalStyles