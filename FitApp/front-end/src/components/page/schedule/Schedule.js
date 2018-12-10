import React, { Component } from 'react';
import '../../../style/style.css';

import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import Saturday from './Saturday';
import Sunday from './Sunday';



class Schedule extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isDisplay: false,
            day: '',
        }
    }


    showSchedule = (event) => {
        let target = event.target;
        let name = target.name;

        this.setState(() => ({
            isDisplay: true,
            day: name,
        }));
    };



    render() {
        // let scheduleContent = this.state[key] ? <{this.state[key]} /> : "";
        // let a = ["Monday", "Tuesday"];
        // a.forEach(key => this.state[key] ? console.log(key) : console.log("a"));

        const components = {
            Monday: Monday,
            Tuesday: Tuesday,
            Wednesday: Wednesday,
            Thursday: Thursday,
            Friday: Friday,
            Saturday: Saturday,
            Sunday: Sunday,
        };

        const DayComponent = React.createElement(components[this.state.day]);

        let scheduleContent = this.state.isDisplay ? DayComponent : "";


        return (
            <div className="schedule">
                <div className="week-day-line">
                    <input className={this.state.day === "Monday" ? "week-day-active": "week-day"} onClick={this.showSchedule} name="Monday" value="m" readOnly></input>
                    <input className={this.state.day === "Tuesday" ? "week-day-active": "week-day"} onClick={this.showSchedule} name="Tuesday" value="t" readOnly></input>
                    <input className={this.state.day === "Wednesday" ? "week-day-active": "week-day"} onClick={this.showSchedule} name="Wednesday" value="w" readOnly></input>
                    <input className={this.state.day === "Thursday" ? "week-day-active": "week-day"} onClick={this.showSchedule} name="Thursday" value="t" readOnly></input>
                    <input className={this.state.day === "Friday" ? "week-day-active": "week-day"} onClick={this.showSchedule} name="Friday" value="f" readOnly></input>
                    <input className={this.state.day === "Saturday" ? "week-day-active": "week-day"} onClick={this.showSchedule} name="Saturday" value="s" readOnly></input>
                    <input className={this.state.day === "Sunday" ? "week-day-active": "week-day"} onClick={this.showSchedule} name="Sunday" value="s" readOnly></input>
                </div>

                <div id="schedule-holder">
                    {scheduleContent}
                </div>
            </div>
        );
    }
}

export default Schedule;
