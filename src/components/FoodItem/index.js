import {useState} from 'react'
import {BiRupee, BiFoodTag} from 'react-icons/bi'

import {
  ItemName,
  ItemDesc,
  Itemcontainer,
  ItemCalories,
  ItemImage,
  IncDecBtn,
  CartController,
  ItemAmount,
} from './FoodItem'

const FoodItem = props => {
  const {item} = props

  const [ItemCount, setItemCount] = useState(0)

  const IncItem = () => {
    setItemCount(ItemCount + 1)
  }

  const DecItem = () => {
    if (ItemCount > 0) setItemCount(ItemCount - 1)
  }

  const convertedItem = {
    addonCat: item.addonCat,
    dishAvailability: item.dish_Availability,
    dishType: item.dish_Type,
    dishCalories: item.dish_calories,
    dishCurrency: item.dish_currency,
    dishName: item.dish_name,
    dishPrice: item.dish_price,
    dishDescription: item.dish_description,
    dishImage: item.dish_image,
    dishId: item.dish_id,
  }

  const {
    dishName,
    dishAvailability,
    dishType,
    dishCalories,
    // dishCurrency,
    dishDescription,
    dishPrice,
    dishImage,
  } = convertedItem

  return (
    <Itemcontainer>
      <div style={{marginTop: '2px', marginRight: '3px'}}>
        <BiFoodTag color={dishType === 1 ? '#e30c07' : 'green'} />{' '}
      </div>
      <div style={{width: '60%', flexGrow: '3'}}>
        <ItemName>{dishName}</ItemName>
        <ItemDesc>{dishDescription}</ItemDesc>
        <ItemCalories>{dishCalories} Calories</ItemCalories>
        <ItemAmount>
          <BiRupee /> {Math.round(dishPrice * 22.16)}
        </ItemAmount>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: '1',
          width: '50px',
        }}
      >
        {dishAvailability && (
          <CartController>
            {' '}
            <IncDecBtn onClick={DecItem}>-</IncDecBtn> {ItemCount}{' '}
            <IncDecBtn onClick={IncItem}>+</IncDecBtn>{' '}
          </CartController>
        )}
      </div>
      <div>
        {' '}
        <ItemImage src={dishImage} alt="dish" />{' '}
        {!dishAvailability && (
          <p
            style={{
              fontSize: '10px',
              margin: 0,
              padding: 0,
              //   fontWeight: '600',
              color: '#e30c07',
            }}
          >
            Not Available
          </p>
        )}
      </div>
    </Itemcontainer>
  )
}

export default FoodItem
