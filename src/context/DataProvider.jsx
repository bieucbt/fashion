import axios from 'axios'
import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { COMMUNE_URL, DISTRICT_URL, PRODUCT_URL, PROVINCE_URL, USER_URL } from '../config/constants'
import { showToast } from '../utils/toastUtils'
import { useImmer } from 'use-immer'


export const DataContext = createContext()

const DataProvider = ({ children }) => {

    const [headerHeight, setHeaderHeight] = useState(0)

    const [products, setProducts] = useState(() => {
        try {
            const storageProduct = localStorage.getItem('products');
            return storageProduct ? JSON.parse(storageProduct) : [];
        } catch (error) {
            console.error('Error parsing products from localStorage:', error);
            return [];
        }
    })


    const [cart, setCart] = useImmer({})
    const [token, setToken] = useState('')
    const [email, setEmail] = useState('')
    // set login signup mobile xem cái nào sẽ được hiển thị
    const [isLogin, setIsLogin] = useState(true)

    // state quản lý thông tin mua hàng
    const [province, setProvince] = useState(JSON.parse(localStorage.getItem('province')) || [])
    const [district, setDistrict] = useState(JSON.parse(localStorage.getItem('district')) || [])
    const [commune, setCommune] = useState(JSON.parse(localStorage.getItem('commune')) || [])
    const [idProvince, setIdProvince] = useState('01')
    const [idDistrict, setIdDistrict] = useState('001')
    const [idCommune, setIdCommune] = useState('00001')

    const handleUpdateCart = (newCart) => {
        axios.patch(
            `${USER_URL}cart`,
            { cart: JSON.stringify(newCart) },
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .catch(err => showToast('error', err.message));
    }

    const addToCart = (productId, CartQuantity) => {
        setCart(draft => {
            draft[productId] = CartQuantity || 1; // Nếu CartQuantity falsy, dùng 1
            const updatedCart = { ...draft };
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
            setCart(updatedCart)
            handleUpdateCart(updatedCart)
        });
    }

    const removeItemCart = (productId) => {
        setCart(draft => {
            delete draft[productId];
            const updatedCart = { ...draft };
            sessionStorage.setItem('cart', JSON.stringify(updatedCart));
            axios.patch(
                `${USER_URL}cart`,
                { cart: JSON.stringify(updatedCart) },
                { headers: { Authorization: `Bearer ${token}` } }
            )
                .then(res => setCart(JSON.parse(res.data.cart)))
                .catch(err => showToast('error', err.message));
        });
    }

    const login = (data) => {
        if (!data) {
            showToast('error', 'Đăng nhập thất bại: Dữ liệu không hợp lệ');
            return;
        }
        try {
            sessionStorage.setItem('data', JSON.stringify(data));
            const { token, email, cart } = data;
            setToken(token);
            setEmail(email);
            setCart(typeof cart === 'string' ? JSON.parse(cart) : cart || {});
            sessionStorage.setItem('cart', cart || '{}');
            showToast('success', 'Đăng nhập thành công');
        } catch (error) {
            showToast('error', `Đăng nhập thất bại: ${error.message}`);
        }
    }


    const logout = () => {
        sessionStorage.removeItem('data');
        sessionStorage.removeItem('cart');
        setToken('');
        setEmail('');
        setCart({});
    }

    useEffect(() => {
        axios.get(PROVINCE_URL)
            .then(res => {
                localStorage.setItem('province', JSON.stringify(res.data))
                setProvince(res.data)
                setIdProvince(res.data[0].idProvince)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get(DISTRICT_URL + (idProvince || '001'))
            .then(res => {
                setIdDistrict(res.data[0].idDistrict || '001')
                setDistrict(res.data)
                localStorage.setItem('district', JSON.stringify(res.data))
                axios.get(COMMUNE_URL + (res.data[0].idDistrict))
                    .then(res => {
                        setCommune(res.data)
                        setIdCommune(res.data[0].idCommune)
                        localStorage.setItem('commune', JSON.stringify(res.data))
                    })
            })
    }, [idProvince])

    useEffect(() => {

        axios.get(COMMUNE_URL + (idDistrict || '01'))
            .then(res => {
                setCommune(res.data)
                setIdCommune(res.data[0].idCommune)
                localStorage.setItem('commune', JSON.stringify(res.data))
            })
    }, [idDistrict])


    useEffect(() => {

        try {
            if (JSON.parse(sessionStorage.getItem('data'))) {
                const { token, email } = JSON.parse(sessionStorage.getItem('data'));
                setToken(token);
                setEmail(email);

                const storedCart = sessionStorage.getItem('cart');
                if (storedCart) {
                    setCart(JSON.parse(storedCart) || {});
                }

            }

        } catch (error) {
            console.error('Error parsing sessionStorage data:', error);
        }

        const fetchProducts = async () => {
            try {
                const res = await axios.get(PRODUCT_URL);
                if (res.status >= 200 && res.status < 300) {
                    localStorage.setItem('products', JSON.stringify(res.data));
                    setProducts(res.data); // Cập nhật state để UI phản ánh ngay
                }
            } catch (err) {
                showToast('error', `Lỗi khi lấy sản phẩm: ${err.message}`);
            }
        };
        fetchProducts();

    }, [])

    const data = {
        headerHeight, setHeaderHeight,
        products,
        cart, setCart,
        isLogin, setIsLogin,
        addToCart, login, logout,
        token, email, removeItemCart,
        handleUpdateCart,
        province, district, setDistrict, commune, setCommune,
        idProvince, setIdProvince, idDistrict, setIdDistrict,
        idCommune, setIdCommune
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider