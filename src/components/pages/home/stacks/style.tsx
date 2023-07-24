import styled from 'styled-components';

export const StacksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-template-rows: repeat(2, 49%);
  gap: 0.6em;
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 49%);
    grid-template-rows: repeat(4, 24%);
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 49%);
    grid-template-rows: repeat(4, 24%);
    gap: 1em;
  }
`;

export const StacksItems = styled.div`
  height: 180px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 1em;
  padding-bottom: 0.5em;
  -webkit-box-shadow: 8px 8px 30px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 30px 0px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 30px 0px rgba(66, 68, 90, 0.21);
  & .react-icon {
    width: 120px;
    height: 120px;
    transition: transform ease-in-out 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
  span {
    margin: 0px;
    text-transform: uppercase;
    font-family: 'Roboto' sans-serif;
    font-weight: 300;
    text-align: center;
  }
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    height: 100%;
    width: 100%;
    & .react-icon {
      width: 100px;
      height: 150px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    height: 300px;
    width: 350px;
  }
  @media only screen and (min-width: 1201px) and (max-width: 1500px) {
    height: 160px;
    width: 160px;
  }
`;
