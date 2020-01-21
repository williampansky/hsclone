import React, { useCallback, useEffect } from 'react';
import { setBoardHeight, setBoardWidth } from 'features/layout/layout.slice';
import { useDispatch, useSelector } from 'react-redux';
import exists from 'utils/element.exists';
import PropTypes from 'prop-types';
import WindowSizeListener from 'react-window-size-listener';

const WindowSizer = ({ children }) => {
  let { innerHeight } = window;
  const dispatch = useDispatch();
  const { debugBarHeight, footerHeight, headerHeight } = useSelector(
    s => s.layout
  );

  /**
   * Dispatches `setBoardHeight()` with one of two arguments:
   *  1. Returns `height - (debugBarHeight + footerHeight + headerHeight)`
   *  2. Returns `height`
   *
   * @param {Number} height window.innerHeight
   * @requires React.useCallback()
   * @requires redux>dispatch()
   * @requires redux>layout>debugBarHeight
   * @requires redux>layout>footerHeight
   * @requires redux>layout>headerHeight
   * @requires redux>stage>setBoardHeight()
   * @requires utils>exists()
   */
  const handleAppHeight = useCallback(
    height => {
      if (
        exists(debugBarHeight) &&
        exists(footerHeight) &&
        exists(headerHeight)
      ) {
        /* 1 */
        const uiCombinedHeight = debugBarHeight + footerHeight + headerHeight;
        const newAppHeight = height - uiCombinedHeight;
        return dispatch(setBoardHeight(newAppHeight));
      } else {
        /* 2 */
        return dispatch(setBoardHeight(height));
      }
    },
    [dispatch, debugBarHeight, footerHeight, headerHeight]
  );

  useEffect(() => {
    handleAppHeight(innerHeight);
  }, [handleAppHeight, innerHeight]);

  return (
    <WindowSizeListener
      onResize={windowSize => {
        const { windowWidth, windowHeight } = windowSize;
        dispatch(setBoardWidth(windowWidth));
        handleAppHeight(windowHeight);
      }}
    >
      {children}
    </WindowSizeListener>
  );
};

WindowSizer.propTypes = {
  children: PropTypes.node.isRequired
};

export default WindowSizer;
