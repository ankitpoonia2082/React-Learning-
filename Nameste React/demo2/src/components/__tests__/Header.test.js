import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import Store from "../utils/store";
import {StaticRouter} from 'react-router-dom/server'

// Test Case 1--->
test(
    "Testing header logo and card default value(should be 0)",
    ()=>{
        const header = render(
        <StaticRouter>
        <Provider store={Store}>
        <Header />
        </Provider>
        </StaticRouter>
        );
        // Complete Header Data
        // console.log(header);

        // For checking Logo
        const logo = header.getByTestId('logo');
        expect(logo.alt).toBe("Logo");
    }
);

// Test Case 2 ---->
test(
    "Checking online Value (Should be true)",
    ()=>{
        const header = render(
        <StaticRouter>
        <Provider store={Store}>81
        <Header />
        </Provider>
        </StaticRouter>
        );

        // For UseOnline
        const online = header.getByTestId("online-status");
        expect(online.innerHTML).toBe('🟢');

    }
);
// Test Case 3 ---->
test(
    "Checking cart value on 1st render(should be  0)",
    ()=>{
        const header = render(
        <StaticRouter>
        <Provider store={Store}>81
        <Header />
        </Provider>
        </StaticRouter>
        );

        // For UseOnline
        const cartValue = header.getByTestId("cartValue");
        expect(cartValue.innerHTML).toBe("Cart 0");

    }
);