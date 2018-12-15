import React, { Component } from 'react';
import '../../../style/style.css';


class Sunday extends Component {


    render() {
        return (
            <div className="food-schedule">
                <h3>Breakfast (271 calories)</h3>
                <ul>
                    <li>1 serving Avocado Egg Toast</li>
                </ul>
                <h3>A.M. Snack (115 calories)</h3>
                <ul>
                    <li>3/4 cup blueberries</li>
                    <li>1 Tbsp. unsalted dry-roasted almonds</li>
                </ul>
                <h3>Lunch (308 calories)</h3>
                <ul>
                    <li>Tuna & White Bean Spinach Salad</li>
                    <li>2 cups spinach</li>
                    <li>2.5 oz. chunk light tuna in water, drained</li>
                    <li>1/2 cup canned white beans, rinsed</li>
                    <li>3/4 cup veggies of your choice (try tomatoes & cucumbers)</li>
                    <li>Combine ingredients and top salad with 1 Tbsp. red-wine vinegar and 2 tsp. olive oil.</li>
                </ul>
                <h3>P.M. Snack (62 calories)</h3>
                <ul>
                    <li>1 medium orange</li>
                </ul>
                <h3>Dinner (440 calories)</h3>
                <ul>
                    <li>1 serving Lemongrass Pork & Spaghetti Squash Noodle Bowl</li>
                </ul>
            </div>
        );
    }
}

export default Sunday;
