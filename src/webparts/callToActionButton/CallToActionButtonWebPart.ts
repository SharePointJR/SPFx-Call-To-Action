import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneChoiceGroup,
  PropertyPaneDropdown,
  PropertyPaneDropdownOptionType,
  PropertyPaneToggle,
  PropertyPaneCheckbox
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, IPropertyPaneDropdownOption } from '@microsoft/sp-webpart-base';

import * as strings from 'CallToActionButtonWebPartStrings';
import CallToActionButton from './components/CallToActionButton';
import { ICallToActionButtonProps } from './components/ICallToActionButtonProps';



export interface ICallToActionButtonWebPartProps {
  buttonText: string;
  buttonShape: string;
  buttonColor: string;
  buttonFontColor: string;
  animation: string;
  redirect: string;
  altText: string;
  openInNewWindow: boolean;
}

export default class CallToActionButtonWebPart extends BaseClientSideWebPart<ICallToActionButtonWebPartProps> {
  private animationList: IPropertyPaneDropdownOption[];

  private loadAnimationOptions(): Promise<IPropertyPaneDropdownOption[]> {
    return new Promise<IPropertyPaneDropdownOption[]>((resolve: (options: IPropertyPaneDropdownOption[]) => void, reject: (error: any) => void ) => {
      resolve([{
        key: 'bounceOut',
        text: 'Bounce Out'
        },
        {
          key: 'bounce',
          text: 'Bounce'
        },
        {
          key: 'bounceIn',
          text: 'Bounce In'
        },
        {
          key: 'bounceInDown',
          text: 'Bounce In Down'
        },
        {
          key: 'bounceInLeft',
          text: 'Bounce In Left'
        },
        {
          key: 'bounceInRight',
          text: 'Bounce In Right'
        },
        {
          key: 'bounceInUp',
          text: 'Bounce In Up'
        },
        {
          key: 'bounceOutDown',
          text: 'Bounce Out Down'
        },
        {
          key: 'bounceOutLeft',
          text: 'Bounce Out Left'
        },
        {
          key: 'bounceOutRight',
          text: 'Bounce Out Right'
        },
        {
          key: 'bounceOutUp',
          text: 'Bounce Out Up'
        },
        {
          key: 'fadeIn',
          text: 'Fade In'
        },
        {
          key: 'fadeInDown',
          text: 'Fade In Down'
        },
        {
          key: 'fadeInDownBig',
          text: 'Fade In Down Big'
        },
        {
          key: 'fadeInLeft',
          text: 'Fade In Left'
        },
        {
          key: 'fadeInLeftBig',
          text: 'Fade In Left Big'
        },
        {
          key: 'fadeInRight',
          text: 'Fade In Right'
        },
        {
          key: 'fadeInRightBig',
          text: 'Fade In Right Big'
        },
        {
          key: 'fadeInUp',
          text: 'Fade In Up'
        },
        {
          key: 'fadeInUpBig',
          text: 'Fade In UP Big'
        },
        {
          key: 'fadeOut',
          text: 'Fade Out'
        },
        {
          key: 'fadeOutDown',
          text: 'Fade Out Down'
        },
        {
          key: 'fadeOutDownBig',
          text: 'Fade Out Down Big'
        },
        {
          key: 'fadeOutLeft',
          text: 'Fade Out Left'
        },
        {
          key: 'fadeOutLeftBig',
          text: 'Fade Out Left Big'
        },
        {
          key: 'fadeOutRight',
          text: 'Fade Out Right'
        },
        {
          key: 'fadeOutRightBig',
          text: 'Fade Out Right Big'
        },
        {
          key: 'fadeOutUp',
          text: 'Fade Out Up'
        },
        {
          key: 'fadeOutUpBig',
          text: 'Fade Out Up Big'
        },
        {
          key: 'flash',
          text: 'Flash'
        },
        {
          key: 'flip',
          text: 'Flip'
        },
        {
          key: 'flipInX',
          text: 'Flip In X'
        },
        {
          key: 'flipInY',
          text: 'Flip In Y'
        },
        {
          key: 'flipOutX',
          text: 'Flip Out X'
        },
        {
          key: 'flipOutY',
          text: 'Flip Out Y'
        },
        {
          key: 'headShake',
          text: 'Head Shake'
        },
        {
          key: 'hinge',
          text: 'Hinge'
        },
        {
          key: 'jello',
          text: 'Jello'
        },
        {
          key: 'lightSpeedIn',
          text: 'Light Speed In'
        },
        {
          key: 'lightSpeedOut',
          text: 'Light Speed Out'
        },
        {
          key: 'pulse',
          text: 'Pulse'
        },
        {
          key: 'rollIn',
          text: 'Roll In'
        },
        {
          key: 'rollOut',
          text: 'Roll Out'
        },
        {
          key: 'rotateIn',
          text: 'Rotate In'
        },
        {
          key: 'rotateInDownLeft',
          text: 'Rotate In Down Left'
        },
        {
          key: 'rotateInDownRight',
          text: 'Rotate In Down Right'
        },
        {
          key: 'rotateInUpLeft',
          text: 'Rotate In Up Left'
        },
        {
          key: 'rotateInUpRight',
          text: 'Rotate In Up Right'
        },
        {
          key: 'rotateOut',
          text: 'Rotate Out'
        },
        {
          key: 'rotateOutDownLeft',
          text: 'Rotate Out Down Left'
        },
        {
          key: 'rotateOutDownRight',
          text: 'Rotate Out Down Right'
        },
        {
          key: 'rotateOutUpLeft',
          text: 'Rotate Out Up Left'
        },
        {
          key: 'rotateOutUpRight',
          text: 'Rotate Out Up Right'
        },
        {
          key: 'rubberBand',
          text: 'Rubber Band'
        },
        {
          key: 'shake',
          text: 'Shake'
        },
        {
          key: 'slideInDown',
          text: 'Slide In Down'
        },
        {
          key: 'slideInLeft',
          text: 'Slide In Left'
        },
        {
          key: 'slideInRight',
          text: 'Slide In Right'
        },
        {
          key: 'slideInUp',
          text: 'Slide In Up'
        },
        {
          key: 'slideOutDown',
          text: 'Slide Out Down'
        },
        {
          key: 'slideOutLeft',
          text: 'Slide Out Left'
        },
        {
          key: 'slideOutRight',
          text: 'Slide Out Right'
        },
        {
          key: 'slideOutUp',
          text: 'Slide Out Up'
        },
        {
          key: 'swing',
          text: 'Swing'
        },
        {
          key: 'tada',
          text: 'Tada'
        },
        {
          key: 'wobble',
          text: 'Wobble'
        },
        {
          key: 'zoomIn',
          text: 'Zoom In'
        },
        {
          key: 'zoomInDown',
          text: 'Zoom In Down'
        },
        {
          key: 'zoomInLeft',
          text: 'Zoom In Left'
        },
        {
          key: 'zoomInRight',
          text: 'Zoom In Right'
        },
        {
          key: 'zoomInUp',
          text: 'Zoom In Up'
        },
        {
          key: 'zoomOut',
          text: 'Zoom Out'
        },
        {
          key: 'zoomOutDown',
          text: 'Zoom Out Down'
        },
        {
          key: 'zoomOutLeft',
          text: 'Zoom Out Left'
        },
        {
          key: 'zoomOutRight',
          text: 'Zoom Out Right'
        },
        {
          key: 'zoomOutUp',
          text: 'Zoom Out Up'
        }

      ]);
    });
  }

  public render(): void {
    const element: React.ReactElement<ICallToActionButtonProps> = React.createElement(
      CallToActionButton,
      {
        buttonText: this.properties.buttonText,
        buttonShape: this.properties.buttonShape,
        buttonColor: this.properties.buttonColor,
        buttonFontColor: this.properties.buttonFontColor,
        animation: this.properties.animation,
        redirect: this.properties.redirect,
        openInNewWindow: this.properties.openInNewWindow
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  // this function creates an apply button in the property pane so 
  // that settings aren't saved unless specified.
  protected get disableReactivePropertyChanges(): boolean {
    return true;
  }

  private validateString(value: string): string {
    let result = "";

    if (value == null || value.trim().length === 0) {
      result = "please enter a value";
    }

    return result;
  }

  protected onPropertyPaneConfigurationStart(): void {
    this.loadAnimationOptions()
      .then( (listOptions: IPropertyPaneDropdownOption[]): void => {
        this.animationList = listOptions;
        this.context.propertyPane.refresh();
        this.render();
      })
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                
                PropertyPaneTextField('buttonText', {
                  label: 'Button Text',
                  onGetErrorMessage: this.validateString.bind(this)
                }),
                PropertyPaneDropdown("buttonShape", { 
                  label: 'Button Shape',
                  options: [
                    { key: "1px", text: "Sharp edges" },
                    { key: "8px", text: "Rounded Corners" },
                    { key: "50%", text: "Cirlce" }
                  ]
                }),
                PropertyPaneTextField("buttonColor", {label: 'Button Color'}),
                PropertyPaneTextField("buttonFontColor", {label: 'Button Font Color'}),
                PropertyPaneDropdown("animation", { 
                  label: 'Animation',
                  options: this.animationList
                }),
                PropertyPaneTextField("redirect", {label: 'Redirect URL'}),
                PropertyPaneToggle("openInNewWindow", { label: 'Open in a New Window'})
              ]
            }
          ]
        }
      ]
    };
  }
}
