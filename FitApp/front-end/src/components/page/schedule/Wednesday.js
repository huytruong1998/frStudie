import React, { Component } from 'react';
import '../../../style/style.css';


class Wednesday extends Component {


    render() {
        return (
            <div className="food-schedule">
                <h3>Breakfast (276 calories)</h3>
                <ul>
                    <li>1 cup nonfat plain Greek yogurt</li>
                    <li>1/2 cup blueberries</li>
                    <li>1 1/2 Tbsp. slivered almonds</li>
                    <li>2 tsp. honey</li>
                </ul>
                <h3>A.M. Snack (102 calories)</h3>
                <ul>
                    <li>2 medium carrots</li>
                    <li>2 Tbsp. hummus</li>
                </ul>
                <h3>Lunch (320 calories)</h3>
                <ul>
                    <li>1 1/2 cups Roasted Tofu & Peanut Noodle Salad</li>
                </ul>
                <h3>P.M. Snack (46 calories)</h3>
                <ul>
                    <li>1 cup strawberries</li>
                </ul>
                <h3>Dinner (437 calories)</h3>
                <ul>
                    <li>1 serving Grilled Romaine with Avocado-Lime Dressing</li>
                    <li>4 oz. cooked chicken breast, cooked in 1 1/2 tsp. olive oil and seasoned with 1/4 tsp. cumin and a pinch each of salt and pepper</li>
                    <li>3/4 cup cooked quinoa</li>
                </ul>
            </div>
        );
    }
}

export default Wednesday;
