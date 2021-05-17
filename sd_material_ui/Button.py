# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Button(Component):
    """A Button component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    This is what will be displayed inside the button. If a label is
    specified, the text within the label prop will be displayed.
    Otherwise, the component will expect children which will then be
    displayed. (In our example, we are nesting an `<input
    type=\"file\" />` and a `span` that acts as our label to be
    displayed.) This only applies to flat and disableShadow buttons.

- id (string; optional):
    Element ID.

- className (string; default ''):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   label   text   textPrimary
    textSecondary   outline   outlinedPrimary   outlinedSecondary
    contained   containedPrimary   containedSecondary
    disableElevation   focusVisible   disabled   colorInherit
    textSizeSmall   textSizeLarge   outlinedSizeSmall
    outlinedSizeLarge   containedSizeSmall   containedSizeLarge
    sizeSmall   sizeLarge   fullWidth   startIcon   endIcon
    iconSizeSmall   iconSizeMedium   iconSizeLarge    OR    root
    edgeStart   edgeEnd   colorInherit   colorPrimary   colorSecondary
    disabled   sizeSmall   label  See
    https://material-ui.com/api/button/#css and
    https://material-ui.com/api/icon-button/#css.

    `classes` is a dict with keys:

    - root (string; optional)

    - label (string; optional)

    - text (string; optional)

    - textPrimary (string; optional)

    - textSecondary (string; optional)

    - outline (string; optional)

    - outlinedPrimary (string; optional)

    - outlinedSecondary (string; optional)

    - contained (string; optional)

    - containedPrimary (string; optional)

    - containedSecondary (string; optional)

    - disableElevation (string; optional)

    - focusVisible (string; optional)

    - disabled (string; optional)

    - colorInherit (string; optional)

    - textSizeSmall (string; optional)

    - textSizeLarge (string; optional)

    - outlinedSizeSmall (string; optional)

    - outlinedSizeLarge (string; optional)

    - containedSizeSmall (string; optional)

    - containedSizeLarge (string; optional)

    - sizeSmall (string; optional)

    - sizeLarge (string; optional)

    - fullWidth (string; optional)

    - startIcon (string; optional)

    - endIcon (string; optional)

    - iconSizeSmall (string; optional)

    - iconSizeMedium (string; optional)

    - iconSizeLarge (string; optional)

- disableShadow (string; optional):
    Hide the shadow behind the button.

- disableTouchRipple (boolean; default False):
    If True, the element's ripple effect will be disabled.

- disabled (boolean; default False):
    Disable the button?.

- fullWidth (boolean; default False):
    If True, the button will take up the full width of its container.

- href (string; default ''):
    The URL to link to when the button is clicked.

- iconClass (a list of or a singular dash component, string or number; optional):
    Sets the class of a span element inside the button.

- n_clicks (number; default 0):
    An integer that represents the number fo times that this element
    has been clicked.

- n_clicks_previous (number; default 0):
    An integer that represents the previous number of times this
    element has been clicked.

- style (dict; optional):
    Override the inline styles of the root element.

- useIcon (boolean; optional):
    If True, this object is rendered as an IconButton.

- variant (string; default 'text'):
    'contained' | 'outlined' | 'text', Button type if not an
    IconButton."""
    @_explicitize_args
    def __init__(self, children=None, classes=Component.UNDEFINED, className=Component.UNDEFINED, disableTouchRipple=Component.UNDEFINED, disabled=Component.UNDEFINED, fireEvent=Component.UNDEFINED, fullWidth=Component.UNDEFINED, href=Component.UNDEFINED, iconClass=Component.UNDEFINED, id=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_previous=Component.UNDEFINED, disableShadow=Component.UNDEFINED, style=Component.UNDEFINED, useIcon=Component.UNDEFINED, variant=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'classes', 'disableShadow', 'disableTouchRipple', 'disabled', 'fullWidth', 'href', 'iconClass', 'n_clicks', 'n_clicks_previous', 'style', 'useIcon', 'variant']
        self._type = 'Button'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'classes', 'disableShadow', 'disableTouchRipple', 'disabled', 'fullWidth', 'href', 'iconClass', 'n_clicks', 'n_clicks_previous', 'style', 'useIcon', 'variant']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Button, self).__init__(children=children, **args)
