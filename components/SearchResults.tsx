import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
    results: Array<{
        id: number;
        price: number;
        priceFormatted: string;
        title: string;
    }>
    onAddToWishlist: (id: number) => void;
    totalPrice: number;
}

export function SearchResults({totalPrice, results, onAddToWishlist }: SearchResultsProps) {

    return (
        <div>
            <h2>{totalPrice}</h2>

            {results.map(product => {
                return (
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToWishList={onAddToWishlist}
                    />
                );
            })}
        </div>
    );
}