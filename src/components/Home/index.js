import {Component} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {C1, H, C, ButtonsContainer} from './Home'
import FoodItem from '../FoodItem'
import CategoryList from '../CategoryList'

const pageStatus = {
  inProgress: 'LOADING',
  success: 'SUCCESS',
  failed: 'FAILURE',
}

class Home extends Component {
  state = {
    statusOfPage: pageStatus.inProgress,
    dataOfRestaurant: {},
    activeCategory: '11',
  }

  componentDidMount() {
    this.fetchData()
  }

  selectCategory = id => {
    this.setState({activeCategory: id})
  }

  fetchData = async () => {
    this.setState({statusOfPage: pageStatus.inProgress})
    try {
      const response = await fetch(
        'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099',
      )

      const result = await response.json()

      const convertedData = {
        branchName: result[0].branch_name,
        restaurantId: result[0].restaurant_id,
        restaurantImage: result[0].restaurant_image,
        restaurantName: result[0].restaurant_name,
        tableMenuList: result[0].table_menu_list.map(each => ({
          menuCategory: each.menu_category,
          categoryDishes: each.category_dishes,
          menuCategoryId: each.menu_category_id,
          menuCategoryImage: each.menu_category_image,
        })),
      }

      if (response.ok) {
        this.setState({
          statusOfPage: pageStatus.success,
          dataOfRestaurant: convertedData,
        })
      } else {
        this.setState({statusOfPage: pageStatus.failed})
      }
    } catch (error) {
      this.setState({statusOfPage: pageStatus.failed})
    }
  }

  successView = () => {
    const {dataOfRestaurant, activeCategory} = this.state

    const {restaurantName, tableMenuList} = dataOfRestaurant

    const menuItems = tableMenuList.find(
      each => each.menuCategoryId === activeCategory,
    )

    console.log(menuItems)

    return (
      <C>
        <C1>
          <H> {restaurantName} </H>
          <AiOutlineShoppingCart size={25} />
        </C1>
        <div style={{overflowX: 'auto', display: 'flex'}}>
          <ButtonsContainer>
            {tableMenuList.map(each => (
              <CategoryList
                isActiveBtn={each.menuCategoryId === activeCategory}
                key={each.menuCategoryId}
                item={each}
                selectCategory={this.selectCategory}
              />
            ))}
          </ButtonsContainer>
        </div>
        {menuItems.categoryDishes.map(each => (
          <FoodItem key={each.dish_id} item={each} />
        ))}
      </C>
    )
  }

  tobeRendered = () => {
    const {statusOfPage} = this.state

    switch (statusOfPage) {
      case pageStatus.inProgress:
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
            }}
          >
            LOADING...
          </div>
        )
      case pageStatus.failed:
        return <div>TRY AGAIN...</div>
      case pageStatus.success:
        return this.successView()

      default:
        return null
    }
  }

  render() {
    return <>{this.tobeRendered()}</>
  }
}

export default Home
