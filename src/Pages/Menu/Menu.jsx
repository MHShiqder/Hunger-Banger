import React from 'react';
import { Helmet } from 'react-helmet';
import CoverWithImage from '../../Components/CoverWithImage';
import coverImage from "../../assets/menu/banner3.jpg"
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from '../../Components/MenuCategory';

import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import drinksImage from '../../assets/menu/banner3.jpg'




const Menu = () => {
    const [menu] = useMenu()
    const distinctRoles = [...new Set(menu.map(item => item.category))];
    console.log(distinctRoles)


    const salad = menu.filter(item => item.category == "salad")
    const drinks = menu.filter(item => item.category == "drinks")
    const popular = menu.filter(item => item.category == "popular")
    const dessert = menu.filter(item => item.category == "dessert")
    const pizza = menu.filter(item => item.category == "pizza")
    const soup = menu.filter(item => item.category == "soup")
    const offered = menu.filter(item => item.category == "offered")

    return (
        <div>

            <Helmet>
                <title>Menu-Page | Hunger-Banger</title>
            </Helmet>
            <CoverWithImage
                img={coverImage}
                title={"OUR MENU"}
                subTitle={"Would you like to try a dish"}
            ></CoverWithImage>
            <div className="mt-20">
            <SectionTitle SubHeading={"Don't miss"} Heading={"Todays Offer"} ></SectionTitle>
            </div>

            

            <MenuCategory category={offered}  ></MenuCategory>
            <MenuCategory img={dessertImage } category={dessert} title={"dessert"} subTitle={" " } ></MenuCategory>
            <MenuCategory img={pizzaImage } category={pizza} title={"pizza"} subTitle={ " "} ></MenuCategory>
            <MenuCategory img={ soupImage} category={soup} title={"soup"} subTitle={" " } ></MenuCategory>
            <MenuCategory img={ saladImage} category={salad} title={"salad"} subTitle={" " } ></MenuCategory>
            <MenuCategory img={ drinksImage} category={drinks} title={"drinks"} subTitle={" " } ></MenuCategory>

        </div>
    );
};

export default Menu;