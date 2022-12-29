export const FLUID__02 = "clamp(0.4375rem, 0.39rem + 0.19vw, 0.625rem)";
export const FLUID__01 = "clamp(0.625rem, 0.53rem + 0.39vw, 1rem)";
export const FLUID_00 = "clamp(1rem, 0.88rem + 0.52vw, 1.5rem)";
export const FLUID_01 = "clamp(1.5rem, 1.32rem + 0.78vw, 2.25rem)";
export const FLUID_02 = "clamp(2.25rem, 1.98rem + 1.17vw, 3.375rem)";
export const FLUID_03 = "clamp(3.375rem, 2.97rem + 1.75vw, 5.0625rem)";
export const FLUID_04 = "clamp(5.0625rem, 4.46rem + 2.59vw, 7.5625rem)";
export const FLUID_05 = "clamp(7.5625rem, 6.64rem + 3.95vw, 11.375rem)";

export const fluid__02 = () => {
  return `
    font-size: ${FLUID__02};
    line-height: 1.5;
  `;
};

export const fluid__01 = () => {
  return `
    font-size: ${FLUID__01};
    line-height: 1.5;
  `;
};

export const fluid_00 = () => {
  return `
    font-size: ${FLUID_00};
    line-height: 1.5;
  `;
};

export const fluid_01 = () => {
  return `
    font-size: ${FLUID_01};
    line-height: 1.5;
  `;
};

export const fluid_02 = () => {
  return `
    font-size: ${FLUID_02};
    line-height: 1.3;
  `;
};

export const fluid_03 = () => {
  return `
    font-size: ${FLUID_03};
    line-height: 1.1;
    letter-spacing: -0.01em;
  `;
};

export const fluid_04 = () => {
  return `
    font-size: ${FLUID_04};
    line-height: 1.1;
    letter-spacing: -0.02em;
  `;
};

export const fluid_05 = () => {
  return `
    font-size: ${FLUID_05};
    line-height: 1.1;
    letter-spacing: -0.02em;
  `;
};

export const fancyLinks = () => {
  return `
    position: relative;

    &::after {
      content: "";
      width: 0;
      height: 0.05em;
      position: absolute;
      bottom: 0.05em;
      left: 0;
      background: currentColor;
      transition: 0.25s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &:not(:hover):after {
      right: 0;
      left: auto;
    }
  `;
};
