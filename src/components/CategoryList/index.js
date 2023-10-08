import {CategoryBtn} from './CategoryList'

const CategoryList = ({item, isActiveBtn, selectCategory}) => {
  const {menuCategoryId, menuCategory} = item

  const CategorySelection = () => {
    selectCategory(menuCategoryId)
  }

  return (
    <CategoryBtn onClick={CategorySelection} isactive={isActiveBtn.toString()}>
      {' '}
      {menuCategory}{' '}
    </CategoryBtn>
  )
}

export default CategoryList
