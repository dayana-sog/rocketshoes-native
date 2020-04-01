import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { formatPrice } from '../../util/format';

import api from '../../services/api';

import {
  Container,
  HeaderContainer,
  LogoImg,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  PruductDescription,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddProduct = (item) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      item,
    });
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;

    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <PruductDescription>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
        </PruductDescription>
        <AddButton onPress={() => this.handleAddProduct(item)}>
          <ProductAmount>
            <Feather name="shopping-cart" color="#454777" size={20} />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <HeaderContainer>
          <LogoImg />
        </HeaderContainer>

        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={(item) => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default connect()(Home);
