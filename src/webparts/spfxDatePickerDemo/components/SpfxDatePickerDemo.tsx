import * as React from 'react';
import styles from './SpfxDatePickerDemo.module.scss';
import { ISpfxDatePickerDemoProps } from './ISpfxDatePickerDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DateTimePicker, DateConvention, TimeConvention } from '@pnp/spfx-controls-react/lib/DateTimePicker';

//state object definition
export interface ISpfxDatePickerState {
  startRangeDate:Date;
  endRangeDate:Date;
  selectedDate:Date;
}


export default class SpfxDatePickerDemo extends React.Component<ISpfxDatePickerDemoProps,ISpfxDatePickerState> {

  constructor(props: ISpfxDatePickerDemoProps, state: ISpfxDatePickerState) {
    super(props);
    //get todays date
    let today:Date = new Date();
    //number of days before and after today
    let daysRange:number = 7;
    //start range days before
    var startDateRange:Date = new Date(today.getTime() - ((24*60*60*1000) * daysRange));
    //end rage days after
    let endRangeDate:Date = new Date(today.getTime() + ((24*60*60*1000) * daysRange));
    //initialize state
    this.state = {
      startRangeDate: startDateRange,
      endRangeDate: endRangeDate,
      selectedDate: null
    };
  }

  //on change handler for date picker
  public onDatePickerChange = (date: any) => {  
    console.log('onDatePickerChange(' + date.toString() + ')');
    //store selected date in state
    this.setState({ selectedDate: date});  
  }   
  
  //render function, called every time state is changed
  public render(): React.ReactElement<ISpfxDatePickerDemoProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.spfxDatePickerDemo} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          { 
            this.state.selectedDate && 
            <div>
              Selected Date is:{this.state.selectedDate.toString()}
            </div>
          }
          <DateTimePicker label="DateTime Picker - 12h"
                dateConvention={DateConvention.DateTime}
                timeConvention={TimeConvention.Hours12}
                onChange={this.onDatePickerChange}
                minDate={this.state.startRangeDate}
                maxDate={this.state.endRangeDate}
          />
        </div>
      </section>
    );
  }
}
