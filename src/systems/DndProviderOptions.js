/**
 * @see https://react-dnd.github.io/react-dnd/docs/backends/touch#options
 */
export const TouchBackendOptions = {
  /**
   * A flag indicating whether touch-based event processing is enabled.
   */
  enableTouchEvents: true,

  /**
   * A flag indicating whether to enable click-based event processing.
   * NOTE: This is buggy due to the difference in touchstart/touchend event
   * propagation compared to mousedown/mouseup/click.
   */
  enableMouseEvents: true,

  /**
   * A flag indicating whether to enable keyboard event processing.
   */
  enableKeyboardEvents: false,

  /**
   * The amount in ms to delay processing for all events
   */
  delay: 0,

  /**
   * The amount in ms to delay processing of touch events
   */
  delayTouchStart: 0,

  /**
   * The amount in ms to delay processing of mouse events
   */
  delayMouseStart: 0,

  /**
   * Specifies the pixel distance moved before a drag is signaled.
   */
  touchSlop: 25,

  /**
   * If true, prevents the contextmenu event from canceling a drag.
   */
  ignoreContextMenu: false,

  /**
   * Specifies ranges of angles in degrees that drag events should be
   * ignored. This is useful when you want to allow the user to scroll in a
   * particular direction instead of dragging. Degrees move clockwise,
   * 0/360 pointing to the left.
   */
  scrollAngleRanges: null,

  /**
   * Continue dragging of currently dragged element when pointer leaves
   * DropTarget area.
   */
  enableHoverOutsideTarget: null,

  /**
   * Specify a custom function to find drop target elements at the given
   * point. Useful for improving performance in environments (iOS Safari)
   * where document.elementsFromPoint is not available.
   */
  getDropTargetElementsAtPoint: null
};
