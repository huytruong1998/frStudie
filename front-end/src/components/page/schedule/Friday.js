import React, { Component } from 'react';
import '../../../style/style.css';


class Friday extends Component {


    render() {
        return (
            <div className="food-schedule">
                <h3>Breakfast (293 calories)</h3>
                <ul>
                    <li>1/2 cup rolled oats, cooked in 1 cup milk</li>
                    <li>1/2 cup sliced strawberries</li>
                    <li>Cook oats and top with strawberries and a pinch of cinnamon.</li>
                </ul>
                <h3>A.M. Snack (64 calories)</h3>
                <ul>
                    <li>1/2 bell pepper, sliced</li>
                    <li>2 Tbsp. hummus</li>
                </ul>
                <h3>Lunch (319 calories)</h3>
                <ul>
                    <li>Toaster-Oven Tostadas</li>
                    <li>2 corn tortillas</li>
                    <li>2/3 cup canned black beans, rinsed</li>
                    <li>1/2 bell pepper, sliced</li>
                    <li>2 Tbsp. shredded Cheddar cheese</li>
                    <li>2 Tbsp. salsa or pico de gallo</li>
                </ul>
                <h3>P.M. Snack (42 calories)</h3>
                <ul>
                    <li>1/2 cup blueberries</li>
                </ul>
                <h3>Dinner (410 calories)</h3>
                <ul>
                    <li>1 1/4 cups Chicken Cauliflower Fried "Rice"</li>
                    <li>2 cups mixed greens, topped with 1 Tbsp. red wine vinegar and 2 tsp. olive oil.</li>
                </ul>
                <h3>P.M. Snack (92 calories)</h3>
                <ul>
                    <li>3/4 cup Mango & Kiwi with Fresh Lime Zest</li>
                </ul>
            </div>
        );
    }
}

export default Friday;
