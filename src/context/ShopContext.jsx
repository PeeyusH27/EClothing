import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();//This is context
//Context API

//Setting up a provider with a value
const ShopContextProvider = (props) => { // This is Provider of values to be passed

    const currency = '₹'
    const deliveryFee = 20

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)

    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()
   
   //Add items to cart
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select product size');
            return
        }
        let cartData = structuredClone(cartItems)
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
                // console.log('Firse add kra hai value change hogi', cartData[itemId]);
            } else {
                cartData[itemId][size] = 1;
                // console.log(cartData, 'ek hi added hai');
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
            // console.log("Bina size ki");
        }
        setCartItems(cartData)
        console.log('Here are the items', cartData);
        
    }


//Display No of items in cart
    const getCartCount = () => {
        let totalCount = 0;
        //Iterate Items
        for (const items in cartItems) { 
            for (const item in cartItems[items]) { //Iterate Size
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalCount
    }


//Deleting items
    const updateQuantity = async(itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        console.log('Items updated');
        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }



    const getCartAmount = () => {
        let total = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items)
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        total += itemInfo.price * cartItems[items][item]
                    }
                }catch(error){
                    console.log(error);
                    
                }
            }
        }
        return total;
    }



    const value = {
        products, currency, deliveryFee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity, getCartAmount,
        navigate
    }
    //Value is passed below as props
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider