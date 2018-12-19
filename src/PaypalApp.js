import React from 'react';
import PaypalButton from "./PaypalButton";

const CLIENT = {
    sandbox: 'AdxJQDwV_PrFrhstc2U3k6QpuyVva2A-x4TXkd8_GmG3ESMilRd-WBUtg2b4SOYfxtqlfwLpypeUYNht',
    production: 'AdxJQDwV_PrFrhstc2U3k6QpuyVva2A-x4TXkd8_GmG3ESMilRd-WBUtg2b4SOYfxtqlfwLpypeUYNht',

};

const ENV = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'sandbox';

class PaypalApp extends React.Component {
    render() {
        const onSuccess = (payment) =>
            console.log('Successful payment!', payment);

        const onError = (error) =>
            console.log('Erroneous payment OR failed to load script!', error);

        const onCancel = (data) =>
            console.log('Cancelled payment!', data);

        return (
            <div>
                <PaypalButton
                    client={CLIENT}
                    env={ENV}
                    commit={true}
                    currency={'EUR'}
                    total={100}
                    onSuccess={onSuccess}
                    onError={onError}
                    onCancel={onCancel}
                />
            </div>
        );
    }
}

export default PaypalApp;
