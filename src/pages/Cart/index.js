import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  HeaderContainer,
  LogoImg,
  ContainerProducts,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  ProductTable,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <HeaderContainer>
        <LogoImg />
      </HeaderContainer>

      <ContainerProducts>
        <Product>
          <ProductInfo>
            <ProductImage />
            <ProductDetails>
              <ProductTitle>Titulo</ProductTitle>
              <ProductPrice>R$ 120,00</ProductPrice>
            </ProductDetails>
            <ProductDelete onPress={() => {}}>
              <Feather name="trash-2" size={24} color="#454777" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton onPress={() => {}}>
              <Feather name="minus-circle" size={20} color="#454777" />
            </ProductControlButton>
            <ProductAmount>0</ProductAmount>
            <ProductControlButton onPress={() => {}}>
              <Feather name="plus-circle" size={20} color="#454777" />
            </ProductControlButton>
            <ProductSubtotal>R$122,00</ProductSubtotal>
          </ProductControls>
        </Product>

        <ProductTable>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>R$ 1200,00</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
          <EmptyContainer>
            <Feather name="trash-2" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        </ProductTable>
      </ContainerProducts>
    </Container>
  );
}
