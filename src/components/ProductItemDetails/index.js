import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'

import './index.css'

class ProductItemDetails extends Component {
  state = {
    productDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/products/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      this.setState({productDetails: fetchedData})
    }
  }

  renderProductDetails = () => {}

  render() {
    const {productDetails, isLoading} = this.state

    return (
      <>
        <Header />
        <div className="product-card">
          <div className="product-details1">
            {/* Render product details here using productDetails */}
          </div>
        </div>
      </>
    )
  }
}

export default ProductItemDetails
