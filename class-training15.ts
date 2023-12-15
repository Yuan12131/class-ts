import React, { useEffect, useState } from 'react';

const fetchProducts = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve ([
        { id: 1, title: '김치', price: '5000원' },
        { id: 2, title: '라면', price: '3000원' },
        { id: 1, title: '삼겹살', price: '15000원' },
      ]);
    }, 500)
  })
}