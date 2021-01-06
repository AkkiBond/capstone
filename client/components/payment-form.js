import React, { Component } from 'react';

class RazorPanel extends Component {
    constructor(props) {
        super(props)

    }
    RequestOrderPayment(){
                var options = {
                    "key_id": "rzp_test_BXuuvSnv4i88g9",
                    "key_secret": "UwnwdougBKgb4Z5Vl0zMiJq6",
                    "amount": '2000',
                    "currency": "INR",
                    "name": "Acme Corp",
                    "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
                    "order_id": 'order_GLzK9bK7ltYbK7',
                    "prefill": {
                        "name": "Gaurav Kumar",
                        "email": "gaurav.kumar@example.com",
                        "contact": "9999999999",
                    },
                    "notes": {
                        "address": "note value",
                    },
                    "theme": {
                        "color": "#F37254"
                    }
                };
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
            }

    render() {
        return (
            <div>
                <button id="rzp-button1" onClick={() => this.RequestOrderPayment()}>Pay</button>
            </div>
        )
    }
}
export default RazorPanel;
