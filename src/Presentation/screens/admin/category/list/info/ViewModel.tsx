import React, { useContext } from "react";
import { AuthContext } from "../../../../../context/auth/AuthContext";

const CategoryInfoViewModel = () => {
    const { user } = useContext(AuthContext);

    const categories = [
        {
            id: 1,
            title: "ALMUERZOS",
            description: "Encuentra y disfruta tu almuerzo perfecto en minutos.",
            image: require('../../../../../assets/imagen almuerzo.jpg'),
            smallImages: [
                require('../../../../../assets/icono-basurero.png'),
                require('../../../../../assets/boligrafo.png')
            ]
        },
        {
            id: 2,
            title: "DESAYUNOS",
            description: "Tu mejor opcion para empezar el dia",
            image: require('../../../../../assets/imagen desayunos.jpg'),
            smallImages: [
                require('../../../../../assets/icono-basurero.png'),
                require('../../../../../assets/boligrafo.png')
            ]
        },
        {
            id: 3,
            title: "POSTRES",
            description: "Explora y disfruta tus postres favoritos",
            image: require('../../../../../assets/imagen pie de limon.jpg'),
            smallImages: [
                require('../../../../../assets/icono-basurero.png'),
                require('../../../../../assets/boligrafo.png')
            ]
        },
        {
            id: 4,
            title: "BEBIDAS",
            description: "Refresca tu dia con nuestras bebidas",
            image: require('../../../../../assets/imagen jugos naturales.jpg'),
            smallImages: [
                require('../../../../../assets/icono-basurero.png'),
                require('../../../../../assets/boligrafo.png')
            ]
        },
    ];

    return {
        user,
        categories,
    };
};

export default CategoryInfoViewModel;
