import * as React from 'react';
import styles from './SpfxDatePickerDemo.module.scss';
import { ISpfxDatePickerDemoProps } from './ISpfxDatePickerDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { DateTimePicker, DateConvention, TimeConvention } from '@pnp/spfx-controls-react/lib/DateTimePicker';

export default class SpfxDatePickerDemo extends React.Component<ISpfxDatePickerDemoProps, {}> {
  
  public handleChange = (date: any) => {  
    alert(date);  
    //this.setState({ date: date });  
  }   
  
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
          
        <DateTimePicker label="DateTime Picker - 12h"
                dateConvention={DateConvention.DateTime}
                timeConvention={TimeConvention.Hours12}
                onChange={this.handleChange}
                />

        </div>
      </section>
    );
  }
}
