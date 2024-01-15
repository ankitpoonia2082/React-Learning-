import '@testing-library/jest-dom'
import Body from '../Body';
import { render, fireEvent, waitFor } from "@testing-library/react";
import Store from '../utils/store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { filteredRestraut } from '../mocks/data'

// faking the api call
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(filteredRestraut)
            console.log(filteredRestraut)
        }
    })
});

// Shimmer test
test("Testing App's homepage shimmer", () => {

    const body = render(
        <StaticRouter>
            <Provider store={Store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    const shimmer = body.getByTestId('Shimmer');
    expect(shimmer.children.length).toBe(16);
});

// Restaurant card test
test("Testing App's restaurant data/card", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={Store}>
                <Body />
            </Provider>
        </StaticRouter>
    );
    await waitFor(() => expect(body.getByTestId("Restaurant")))
    const restaurant = body.getByTestId('Restaurant')
    const card = body.getAllByTestId('Card')
    expect(card.length).toBe(9)
});

// Search Feature testing
test("Testing Search feature", () => {
    const body = render(
        <StaticRouter>
            <Provider store={Store}>
                <Body />
            </Provider>
        </StaticRouter>
    )
    const searchBox = body.getByTestId('searchBox')

    fireEvent.change(input ,{
        
    })

    const searchBtn = body.getByTestId('searchBtn')
    // console.log("🚀", searchBtn)
})