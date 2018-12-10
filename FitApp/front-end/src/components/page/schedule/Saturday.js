import React, { Component } from 'react';
import '../../../style/style.css';


class Saturday extends Component {


    render() {
        return (
            <div className="food-schedule">
                <h3>Breakfast (286 calories)</h3>
                <ul>
                    <li>1 cup bran cereal</li>
                    <li>1 cup skim milk</li>
                    <li>1/2 cup blueberries</li>
                </ul>
                <h3>A.M. Snack (62 calories)</h3>
                <ul>
                    <li>1 medium orange</li>
                </ul>
                <h3>Lunch (347 calories)</h3>
                <ul>
                    <li>1 1/4 cups Chicken Cauliflower Fried "Rice"</li>
                    <li>1 kiwi fruit</li>
                </ul>
                <h3>P.M. Snack (46 calories)</h3>
                <ul>
                    <li>1 cup strawberries</li>
                </ul>
                <h3>Dinner (457 calories)</h3>
                <ul>
                    <li>1 serving Toaster-Oven Tostada</li>
                </ul>
            </div>
        );
    }
}

export default Saturday;
