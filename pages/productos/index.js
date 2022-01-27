import React from 'react';
import axios from 'axios'
import Products from '../../components/Products';
import Page from '../../components/Page';

export async function getServerSideProps({req}){
    // Lunes: Una solución a este problema
    const {data:products} = await axios.get(`http://${req.headers.host}/api/productos`)

    return {
        props:{
            products
        }
    }
}


export default function index({products}) {
  return <Page>
        <main className='p-5'>
            <Products products={products}/>
        </main>
  </Page>;
}
