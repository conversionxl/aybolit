import {
  throttle as throttleTemp,
  debounce as debounceTemp
} from 'throttle-debounce/dist/index.esm.js';

export default class {
  static throttle(fn) {
    return throttleTemp(125, fn);
  }

  static debounce(fn) {
    return debounceTemp(125, fn);
  }

  static shouldUpdate(lastKnownScrollY = 0, currentScrollY = 0, props = {}, state = {}) {
    const scrollDirection = currentScrollY >= lastKnownScrollY ? 'down' : 'up';
    const distanceScrolled = Math.abs(currentScrollY - lastKnownScrollY);

    // We're disabled
    if (props.disable) {
      return {
        action: 'none',
        scrollDirection,
        distanceScrolled
      };
      // We're at the top and not fixed yet.
    }

    if (currentScrollY <= props.pinStart && state.state !== 'unfixed') {
      return {
        action: 'unfix',
        scrollDirection,
        distanceScrolled
      };
      // We're unfixed and headed down. Carry on.
    }

    if (currentScrollY <= state.height && scrollDirection === 'down' && state.state === 'unfixed') {
      return {
        action: 'none',
        scrollDirection,
        distanceScrolled
      };
    }

    if (
      currentScrollY > state.height + props.pinStart &&
      scrollDirection === 'down' &&
      state.state === 'unfixed'
    ) {
      return {
        action: 'unpin-snap',
        scrollDirection,
        distanceScrolled
      };
      // We're past the header and scrolling down.
      // We transition to "unpinned" if necessary.
    }

    if (
      scrollDirection === 'down' &&
      ['pinned', 'unfixed'].indexOf(state.state) >= 0 &&
      currentScrollY > state.height + props.pinStart &&
      distanceScrolled > props.downTolerance
    ) {
      return {
        action: 'unpin',
        scrollDirection,
        distanceScrolled
      };
      // We're scrolling up, we transition to "pinned"
    }

    if (
      scrollDirection === 'up' &&
      distanceScrolled > props.upTolerance &&
      ['pinned', 'unfixed'].indexOf(state.state) < 0
    ) {
      return {
        action: 'pin',
        scrollDirection,
        distanceScrolled
      };
      // We're scrolling up, and inside the header.
      // We transition to pin regardless of upTolerance
    }

    if (
      scrollDirection === 'up' &&
      currentScrollY <= state.height &&
      ['pinned', 'unfixed'].indexOf(state.state) < 0
    ) {
      return {
        action: 'pin',
        scrollDirection,
        distanceScrolled
      };
    }

    return {
      action: 'none',
      scrollDirection,
      distanceScrolled
    };
  }
}
