import styled from 'styled-components'

export const ItemName = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin: 0 0 3px 0;
`
export const ItemAmount = styled.p`
  font-weight: bold;
  margin: 0;
  display: flex;
  align-items: center;
`
export const ItemDesc = styled.p`
  margin: 0;
  color: #666;
  font-size: 11px;
  margin: 0 0 3px 0;
`
export const ItemCalories = styled.p`
  margin: 0;
  color: #e27733;
  font-size: 12px;
  font-weight: bold;
  margin: 0 0 3px 0;
`
export const CartController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //   flex-grow: 1;
  padding: 12px;
  gap: 8px;
  border-radius: 20px;
  background-color: #006f45;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 8px;
  }
`
export const Itemcontainer = styled.div`
  //   display: grid;
  //   grid-template-columns: calc(100% - 250px) 150px 100px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #999;
  border-radius: 3px;
  margin: 8px;
  padding: 12px;
  box-shadow: 0 0 4px #ccc;
  background: linear-gradient(
    140deg,
    transparent,
    transparent,
    transparent,
    goldenrod
  );
  @media (max-width: 768px) {
    display: flex;
    border: 0;
  }
`
export const ItemImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 5px;
`
export const IncDecBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`
