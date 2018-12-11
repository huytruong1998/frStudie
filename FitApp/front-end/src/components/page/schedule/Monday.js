import React, { Component } from 'react';
import '../../../style/style.css';


class Monday extends Component {


    render() {
        return (
            <div className="food-schedule">
                <h3>Breakfast (271 calories)</h3>
                <ul>
                    <li>1 serving Avocado Egg Toast</li>
                </ul>
                <h3>A.M. Snack (63 calories)</h3>
                <ul>
                    <li>3/4 cup blueberries</li>
                </ul>
                <h3>Lunch (316 calories)</h3>
                <ul>
                    <li>Chickpea & Veggie Salad</li>
                    <li>2 cups mixed greens</li>
                    <li>3/4 cup veggies of your choice (try cucumbers and tomatoes)</li>
                    <li>2/3 cup chickpeas, rinsed</li>
                    <li>1 Tbsp. almonds, chopped</li>
                    <li>Combine ingredients and top salad with 1 Tbsp. red-wine vinegar, 2 tsp. olive oil and freshly ground pepper.</li>
                </ul>
                <h3>P.M. Snack (62 calories)</h3>
                <ul>
                    <li>1 medium orange</li>
                </ul>
                <h3>Dinner (470 calories)</h3>
                <ul>
                    <li>1 serving Seared Salmon with Green Peppercorn Sauce</li>
                    <li>1 cup steamed green beans</li>
                    <li>1 baked medium red potato, drizzled with 1/2 Tbsp. olive oil and a pinch each of salt and pepper.</li>
                </ul>
            </div>
        );
    }
}

export default Monday;
