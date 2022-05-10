export const mixin = (baseClass, mixins) =>
  mixins.reduce((parentClass, mixin) => mixin(parentClass), baseClass);
