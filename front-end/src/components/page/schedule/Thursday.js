import React, { Component } from 'react';
import '../../../style/style.css';


class Thursday extends Component {


    render() {
        return (
            <div className="food-schedule">
                <h3>Breakfast (265 calories)</h3>
                <ul>
                    <li>1 cup bran cereal</li>
                    <li>1 cup skim milk</li>
                    <li>1/4 cup blueberries</li>
                </ul>
                <h3>A.M. Snack (95 calories)</h3>
                <ul>
                    <li>1 medium apple</li>
                </ul>
                <h3>Lunch (335 calories)</h3>
                <ul>
                    <li>Green Salad with Chicken</li>
                    <li>3 cups mixed greens</li>
                    <li>3 oz. leftover cooked chicken breast</li>
                    <li>5 cherry tomatoes, halved</li>
                    <li>1/2 cup cucumber slices</li>
                    <li>1/4 cup shredded carrot</li>
                </ul>
                <h3>P.M. Snack (62 calories)</h3>
                <ul>
                    <li>1 medium orange</li>
                </ul>
                <h3>Dinner (461 calories)</h3>
                <ul>
                    <li>1 serving Cod with Tomato Cream Sauce</li>
                    <li>1/2 cup cooked brown rice</li>
                    <li>2 cups mixed greens, topped with 1 Tbsp. balsamic vinegar and 2 tsp. olive oil.</li>
                </ul>
            </div>
        );
    }
}

export default Thursday;
