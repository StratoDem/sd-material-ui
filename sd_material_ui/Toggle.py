# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toggle(Component):
    """A Toggle component.


Keyword arguments:

- id (string; required):
    Toggle ID.

- className (string; default ''):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   edgeStart   edgeEnd   switchBase
    colorPrimary   colorSecondary   sizeSmall   checked   disabled
    input   thumb   tract.

    `classes` is a dict with keys:

    - root (string; optional)

    - edgeStart (string; optional)

    - edgeEnd (string; optional)

    - switchBase (string; optional)

    - colorPrimary (string; optional)

    - colorSecondary (string; optional)

    - sizeSmall (string; optional)

    - checked (string; optional)

    - disabled (string; optional)

    - input (string; optional)

    - thumb (string; optional)

    - tract (string; optional)

- disabled (boolean; default False):
    Whether the toggle is disabled (True) or not (False).

- label (string; default ''):
    The label for the toggle.

- labelPlacement (string; default "end"):
    If using a single label, its position can be: \"top\", \"start\",
    \"bottom\", or \"end\".

- labelSpacing (default 1):
    The space between the label(s) and toggle.

- secondaryLabel (string; default ''):
    A second label for the toggle. If this is used, the labelPlacement
    value is ignored, and the secondaryLabel will be positioned to the
    right of the toggle, and the first label to the left.

- toggled (boolean; required):
    Whether toggle is on (True) or off (False)."""
    @_explicitize_args
    def __init__(self, classes=Component.UNDEFINED, className=Component.UNDEFINED, disabled=Component.UNDEFINED, id=Component.REQUIRED, label=Component.UNDEFINED, labelPlacement=Component.UNDEFINED, labelSpacing=Component.UNDEFINED, secondaryLabel=Component.UNDEFINED, toggled=Component.REQUIRED, **kwargs):
        self._prop_names = ['id', 'className', 'classes', 'disabled', 'label', 'labelPlacement', 'labelSpacing', 'secondaryLabel', 'toggled']
        self._type = 'Toggle'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'classes', 'disabled', 'label', 'labelPlacement', 'labelSpacing', 'secondaryLabel', 'toggled']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id', 'toggled']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Toggle, self).__init__(**args)
