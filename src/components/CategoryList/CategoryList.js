import styled from 'styled-components'

export const CategoryBtn = styled.button`
  outline: none;
  border: 0;
  padding: 14px 24px;
  //   margin-left: 5px;
  min-width: max-content;
  background-color: ${props =>
    props.isactive === 'true' ? '#dddddd' : 'transparent'};
  color: #e7a331;
  font-weight: 600;
  border-radius: ${props =>
    props.isactive === 'true' ? '0px 0px  0px 0px' : '20px'};
  border-bottom: ${props =>
    props.isactive === 'true' ? '3px solid #e7a331' : ''};
  //   border-top: 3px solid
  //     ${props => (props.isactive === 'true' ? ' #e7a331' : '#fff')};
  //   border-left: 3px solid
  //     ${props => (props.isactive === 'true' ? ' #e7a331' : '#fff')};
`
export const CategoryBtn1 = styled.button`
  outline: none;
  border: 0;
`
