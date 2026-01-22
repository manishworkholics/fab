import { useMutation } from "@apollo/client";
import {
    AddToFavoritesDocument,
    RemoveFromFavoritesDocument,
} from "@/__generated__/graphql";

export const useFavoriteQuote = () => {
    const [addFavMutation] = useMutation(AddToFavoritesDocument);
    const [removeFavMutation] = useMutation(RemoveFromFavoritesDocument);

    const addToFavorite = (quoteId: string) =>
        addFavMutation({ variables: { quoteId } });

    const removeFromFavorite = (quoteId: string) =>
        removeFavMutation({ variables: { quoteId } });

    return {
        addToFavorite,
        removeFromFavorite,
    };
};
