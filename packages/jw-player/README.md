# JW Player

## Features:

* [X] Player
* [X] Captions
* [X] Chapters
* [X] Audio/Captions sync, highlight, and scroll
* [X] Captions click and seek
* [X] Captions search and highlight
* [X] Save position
* [ ] Theater mode

## Dependencies:
* [mark.js](https://github.com/julmot/mark.js/)
* [subtitle](https://github.com/gsantiago/subtitle.js)

---

## Mixins

This component uses mixins as opposed to the JW Player plugin system. This allows us to leverage lit's declarative capabilities such as conditional attributes/properties as well as event listeners. It also allows us to better diagnose errors as JW Player's plugin system fails with a generic error message.

Mixins are a form of multiple inheritance and allow the consumer to extend multiple classes.

The syntax for mixins is:

```
class MyClass extends MixinThree(MixinTwo(MixinOne(MyClass))) {}
```

This has been abstracted to:

```
// utility.js
const mixin = (baseClass, mixins) =>
  mixins.reduce((parentClass, mixin) => mixin(parentClass), baseClass);
```

```
// my-class.js
import { mixin } from '../../utility';

class MyClass extends mixin(BaseClass, [MixinOne, MixinTwo, MixinThree]) {}
```

Order is important as each mixin extends the previous one. In this case, `MixinThree` extends `MixinTwo` which extends `MixinOne`.

There are currently two methods which are important to the lifecycle of the component:

`__setup()`

This method is async and called when the component is first created. You must call `await super.__setup()` at the beginning of this method to make sure each parent class's setup method is called.

`__onTimeListener()`

This method is async and called when the player's time changes. As with `__setup()`, you must call `await super.__onTimeListener()` at the beginning of this method.

Current mixins available for use:
* BaseMixin (Required) - Responsible for setting up the player, loading the media.
* CaptionMixin - Responsible for loading the captions, auto-scrolling, click to seek, search.
* SavePositionMixin - Responsible for saving the position of the player.

## Templating

For a quick overview of lit's templating capabilities, see the [lit-html](https://lit.dev/docs/templates/overview/) documentation.

---

## Issues

* https://github.com/jwplayer/jwplayer/issues/3444
* https://github.com/jwplayer/jwplayer-sdks/blob/master/jw6-plugin-sdk/docs/plugins-js.md
* https://lit.dev/docs/components/decorators/#avoiding-issues-with-class-fields (Cannot use typescript)