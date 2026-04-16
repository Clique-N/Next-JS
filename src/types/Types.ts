export interface Travel {
    id: string;
    route: string;
    image: string;
    description: string;
    price: string;
}

export interface CarouselDest {
    id: string;
    route: string;
    image: string;
    description?: string;
    price?: string;
}

export interface DealsTravel {
    id: string;
    route: string;
    image: string;
    description: string;
    oldPrice: string;
    newPrice: string;
}