import * as React from 'react';
import styles from './CallToActionButton.module.scss';
import { ICallToActionButtonProps } from './ICallToActionButtonProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { string } from 'prop-types';

import  * as animations from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

export default class CallToActionButton extends React.Component<ICallToActionButtonProps, {}> {
  public render(): React.ReactElement<ICallToActionButtonProps> {

    const wpstyles = StyleSheet.create({
      animatedControl: {
        animationName: animations[this.props.animation],
        animationDuration: '1s'
      },
      ctaButton: {
        backgroundColor: this.props.buttonColor,
        color: this.props.buttonFontColor,
        padding: `5px 15px`,
        borderRadius : this.props.buttonShape
      }

      
    });
    return (
     

        <div className={css(wpstyles.animatedControl)} >
          <button
            onClick = {()=> {
               window.open(this.props.redirect, (this.props.openInNewWindow) ? "_blank" : "_self")
            } }
            className={css(wpstyles.ctaButton) }
            
            >
              {this.props.buttonText}

          </button>
    
        </div>
              
    );
  }
}
