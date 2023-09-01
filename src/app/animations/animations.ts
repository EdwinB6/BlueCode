import {
    animate,
    state,
    style,
    transition,
    trigger,
    group
  } from '@angular/animations';

/**
 * @author dptorri
 * @linkcode https://stackblitz.com/edit/angular-slide-down?file=app%2Fanimations.ts
 */
export const SlideInOutAnimation = [
      trigger('slideInOut', [
        state('visible', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('hidden', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('visible => hidden', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('hidden => visible', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ])
]
