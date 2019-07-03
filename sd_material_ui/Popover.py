# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Popover(Component):
    """A Popover component.
Material UI Popover component

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): The content of the popover
- anchorOrigin (optional): This is the point on the anchor where the popover's targetOrigin will attach to.
Options: vertical: [top, center, bottom] horizontal: [left, middle, right].. anchorOrigin has the following type: dict containing keys 'vertical', 'horizontal'.
  Those keys have the following types:
  - vertical (optional)
  - horizontal (optional)
- animated (boolean; optional): If true, the popover will apply transitions when it is added to the DOM.
- autoCloseWhenOffScreen (boolean; optional): If true, the popover will hide when the anchor is scrolled off the screen
- buttonLabel (string; optional): For Dash use - user can assign label to button
- buttonType (optional): For Dash use - user can anchor the popover to flat, icon, or raised button
- buttonIcon (string; optional): For Dash use - specify what icon to use when using an icon button
- buttonStyle (dict; optional): For Dash use - specify the styles for the button
- canAutoPosition (boolean; optional): If true, the popover (potentially) ignores targetOrigin and anchorOrigin to make itself fit
on screen, which is useful for mobile devices.
- className (string; optional): The CSS class name of the root element
- open (boolean; optional): If true, the popover is visible.
- scrollableContainer (string; optional): Represents the parent scrollable container. It can be an element or a string like window.
- style (dict; optional): Override the inline-styles of the root element.
- targetOrigin (optional): This is the point on the popover which will attach to the anchor's origin.
Options: vertical: [top, center, bottom] horizontal: [left, middle, right].. targetOrigin has the following type: dict containing keys 'vertical', 'horizontal'.
  Those keys have the following types:
  - vertical (optional)
  - horizontal (optional)
- useLayerForClickAway (boolean; optional): If true, the popover will render on top of an invisible layer, which will prevent clicks
to the underlying elements, and trigger an onRequestClose('clickAway') call.
- zDepth (optional): The zDepth of the popover."""
    @_explicitize_args
    def __init__(self, children=None, anchorOrigin=Component.UNDEFINED, animated=Component.UNDEFINED, autoCloseWhenOffScreen=Component.UNDEFINED, buttonLabel=Component.UNDEFINED, buttonType=Component.UNDEFINED, buttonIcon=Component.UNDEFINED, buttonStyle=Component.UNDEFINED, canAutoPosition=Component.UNDEFINED, className=Component.UNDEFINED, open=Component.UNDEFINED, scrollableContainer=Component.UNDEFINED, style=Component.UNDEFINED, targetOrigin=Component.UNDEFINED, useLayerForClickAway=Component.UNDEFINED, zDepth=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'anchorOrigin', 'animated', 'autoCloseWhenOffScreen', 'buttonLabel', 'buttonType', 'buttonIcon', 'buttonStyle', 'canAutoPosition', 'className', 'open', 'scrollableContainer', 'style', 'targetOrigin', 'useLayerForClickAway', 'zDepth']
        self._type = 'Popover'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'anchorOrigin', 'animated', 'autoCloseWhenOffScreen', 'buttonLabel', 'buttonType', 'buttonIcon', 'buttonStyle', 'canAutoPosition', 'className', 'open', 'scrollableContainer', 'style', 'targetOrigin', 'useLayerForClickAway', 'zDepth']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Popover, self).__init__(children=children, **args)
