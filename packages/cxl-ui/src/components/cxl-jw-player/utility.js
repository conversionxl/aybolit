export const mixin = (baseClass, mixins) =>
  // eslint-disable-next-line no-shadow
  mixins.reduce((parentClass, mixin) => mixin(parentClass), baseClass);
