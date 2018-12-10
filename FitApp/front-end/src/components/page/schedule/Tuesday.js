import React, { Component } from 'react';
import '../../../style/style.css';


class Tuesday extends Component {


    render() {
        return (
            <div className="food-schedule">
                <h3>Breakfast (287 calories)</h3>
                <ul>
                    <li>1 cup bran cereal</li>
                    <li>1 cup skim milk</li>
                    <li>1/2 cup blueberries</li>
                </ul>
                <h3>A.M. Snack (95 calories)</h3>
                <ul>
                    <li>1 medium apple</li>
                </ul>
                <h3>Lunch (325 calories)</h3>
                <ul>
                    <li>1 serving Veggie-Hummus Sandwich</li>
                </ul>
                <h3>P.M. Snack (80 calories)</h3>
                <ul>
                    <li>3/4 medium red bell pepper, sliced</li>
                    <li>2 Tbsp. hummus</li>
                </ul>
                <h3>Dinner (426 calories)</h3>
                <ul>
                    <li>2 cups Roasted Tofu & Peanut Noodle Salad</li>
                </ul>
            </div>
        );
    }
}

export default Tuesday;
