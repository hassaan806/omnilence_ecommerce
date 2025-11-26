import React from 'react';
import ProductDetails from './components/ProductDetails';
import Step from './components/Step';
import Review from './components/Review';
import ItemDetails from './components/ItemDetails';
import { Row } from 'react-bootstrap';
import { getProductById } from '@/helpers/data';
import { notFound } from 'next/navigation';
import PageTItle from '@/components/PageTItle';

// For static export, we need to define which product IDs to generate
export async function generateStaticParams() {
  // In a real app, you would fetch all product IDs
  // For this demo, we'll use the IDs from 1 to 12
  const productIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  
  return productIds.map((id) => ({
    productId: id,
  }));
}

export const generateMetadata = async ({ params }) => {
  const product = await getProductById(params.productId);
  return {
    title: product?.id ?? 'Product Details'
  };
};

const ProductDetailsPage = async ({ params }) => {
  const product = await getProductById(params.productId);
  if (!product) notFound();
  
  return (
    <>
      <PageTItle title="PRODUCT DETAILS" />
      <ProductDetails />
      <Step />
      <Row>
        <ItemDetails />
        <Review />
      </Row>
    </>
  );
};

export default ProductDetailsPage;