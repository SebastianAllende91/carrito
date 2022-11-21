import { TYPES } from "../actions/types";

const initialState = {
  loading: true,
  articles: [],
  articleSelect: {},
  articlesTopSix: [],
  carrito: [],
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case TYPES.SIX_PRODUCTS:
      return {
        ...state,
        articlesTopSix: action.payload,
        loading: false,
      };
    case TYPES.GET_ARTICLE_SELECT:
      return {
        ...state,
        articleSelect: action.payload,
        loading: false,
      };
    case TYPES.ADD_TO_CARRITO: {
      const { articulo, monto } = action.payload;

      let a = state.carrito.some(
        (el) => el.codArticulo === articulo.codArticulo
      );

      return a
        ? {
            ...state,
            carrito: state.carrito.map((el) =>
              el.codArticulo === articulo.codArticulo
                ? { ...el, monto: el.monto + monto }
                : { el }
            ),
          }
        : {
            ...state,
            carrito: [...state.carrito, { ...articulo, monto }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CARRITO: {
      console.log("reducer :", typeof action.payload);
      return {
        ...state,
        carrito: state.carrito.filter(
          (item) => item.codArticulo !== action.payload
        ),
      };
    }

    // case TYPES.REMOVE_ONE_FROM_MENU: {
    //   let itemToDelete = state.myMenu.find(
    //     (item) => item.id === action.payload
    //   );

    //   return itemToDelete.quantity > 1
    //     ? {
    //         ...state,
    //         myMenu: state.myMenu.map((item) =>
    //           item.id === action.payload
    //             ? { ...item, quantity: item.quantity - 1 }
    //             : item
    //         ),
    //       }
    //     : {
    //         ...state,
    //         myMenu: state.myMenu.filter((item) => item.id !== action.payload),
    //       };
    // }
    // case TYPES.GET_RECIPES_SEARCH:
    //   return {
    //     ...state,
    //     recipesSearch: action.payload,
    //     loading: false,
    //   };

    // case TYPES.CLEAR_MENU:
    //   return {
    //     ...state,
    //     myMenu: [],
    //   };
    default:
      return state;
  }
};
export default ArticlesReducer;
