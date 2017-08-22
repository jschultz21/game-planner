import React, { Component } from 'react';
import moment from "moment";
export default class Game extends Component {
  render() {
    const dateTime = Date.parse(this.props.scheduledFor);
    const formattedTime = moment(dateTime).format('dddd, MMMM Do YYYY, h:mm a')

    return(
      <div>
        {formattedTime}
      </div>
    )
  }
};
