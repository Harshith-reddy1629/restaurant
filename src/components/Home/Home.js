import styled from 'styled-components'

export const C = styled.div`
  margin: 0;
`
export const C1 = styled.div`
  background-color: #e7a331dd;
  padding: 12px 30px;
  margin: 10px 18px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0px 4px #aaa;
  @media (max-width: 768px) {
    padding: 18px 13px;
    color: #333;
    margin: 10px 12px;
    margin-bottom: 16px;
  }
`
export const H = styled.h1`
  margin: 0;
  //   color: #fff;
  font-size: 24px;
  font-family: cursive;
  font-weight: bold;
  @media (max-width: 768px) {
    font-family: 'Times New Roman';
    font-weight: 500;
  }
`
export const ButtonsContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  min-width: max-content;
  background-color: #ccc;
  gap: 8px;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 768px) {
    background-color: #eee;
    border-radius: 0px;
  }
`
