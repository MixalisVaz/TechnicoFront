// import { Component, AfterViewInit } from '@angular/core';
// import { tsParticles } from 'tsparticles-engine';

// @Component({
//   selector: 'app-snow-effect',
//   templateUrl: './snow-effect.component.html',
//   styleUrls: ['./snow-effect.component.scss'],
// })
// export class SnowEffectComponent implements AfterViewInit {
//   ngAfterViewInit(): void {
//     console.log('Initializing tsParticles...');

//     tsParticles
//       .load('tsparticles', {
//         particles: {
//           number: {
//             value: 300, 
//           },
//           color: {
//             value: '#ffffff', 
//           },
//           shape: {
//             type: 'circle', 
//           },
//           opacity: {
//             value: 0.8,
//             random: true,
//           },
//           size: {
//             value: 20,
//             random: true,
//           },
//           move: {
//             enable: true,
//             speed: 1, 
//             direction: 'bottom',
//             random: false,
//             straight: false,
//           },
//         },
//           interactivity: {
//             events: {
//               onHover: {
//                 enable: true,
//                 mode: 'repulse', 
//               },
//             },
//           },
//           background: {
//             color: {
//               value: 'transparent', 
//             },
//           },
//         })
//       .then(() => console.log('tsParticles loaded successfully!'))
//       .catch((error) => console.error('tsParticles failed to load:', error));
//       console.log('Canvas container:', document.getElementById('tsparticles'));

//   }
// }
