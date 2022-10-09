// import { setFips } from 'crypto';
// import React, {FC} from 'react';
// import { DetailedHTMLProps, HTMLAttributes } from 'react';

// interface StepWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
//     activeStep: number;
// }

// const steps = ['Информация о треке', 'Загрузить обложку', 'Загрузите сам трек']

// const StepWrapper:FC<StepWrapperProps> = ({activeStep, children}) => {
//     return (
//         <div>
//             <div activeStep={activeStep}>
//                 {steps.map((step, index) => 
//                 <div key={index}
//                 completed={activeStep > index}
//                 >
//                     {step}
//                 </div>
//                 )}
//             </div>
            
//         </div>
//     );
// };

// export default StepWrapper;