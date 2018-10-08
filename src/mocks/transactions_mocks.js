import axios from "axios";
import MockAdapter from "axios-mock-adapter";


if (process.env.NODE_ENV === 'development') {
    const mock = new MockAdapter(axios)

    mock
        .onGet('/transactions').reply( () => {
            return (
                [
                    200,
                    [
                        {
                            id: 100,
                            title: 'BG56BUIN65431544786321',
                            balance: '342.00',
                            currency: 'EUR'
                        },
                        {
                            id: 101,
                            title: 'BG56BUIN65431544786321',
                            balance: '900.00',
                            currency: 'BGN'
                        }
                    ]
                ]
            )
        })
} 
