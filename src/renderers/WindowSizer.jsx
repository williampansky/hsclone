import { useDispatch, useSelector } from 'react-redux';
import { setStageHeight, setStageWidth } from 'features/layout/layout.slice';
import exists from 'utils/element.exists';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import WindowSizeListener from 'react-window-size-listener';

const WindowSizer = ({ children }) => {
  let { innerHeight } = window;
  const dispatch = useDispatch();
  const { footerHeight, headerHeight } = useSelector(s => s.layout);

  /**
   * Dispatches `setStageHeight()` with one of two arguments:
   *  1. Returns `height - (footerHeight + headerHeight)`
   *  2. Returns `height`
   *
   * @param {Number} height window.innerHeight
   * @requires React.useCallback()
   * @requires redux>dispatch()
   * @requires redux>layout>footerHeight
   * @requires redux>layout>headerHeight
   * @requires redux>stage>setStageHeight()
   * @requires utils>exists()
   */
  const handleAppHeight = useCallback(
    height => {
      if (exists(footerHeight) && exists(headerHeight)) {
        /* 1 */
        const uiCombinedHeight = footerHeight + headerHeight;
        const newAppHeight = height - uiCombinedHeight;
        return dispatch(setStageHeight(newAppHeight));
      } else {
        /* 2 */
        return dispatch(setStageHeight(height));
      }
    },
    [dispatch, footerHeight, headerHeight]
  );

  useEffect(() => {
    handleAppHeight(innerHeight);
  }, [handleAppHeight, innerHeight]);

  return (
    <WindowSizeListener
      onResize={windowSize => {
        const { windowWidth, windowHeight } = windowSize;
        dispatch(setStageWidth(windowWidth));
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
