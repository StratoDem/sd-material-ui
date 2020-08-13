# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Toggle(Component):
    """A Toggle component.


Keyword arguments:
- className (string; default ''): CSS class name of the root element
- classNameRoot (string; default ''): The classname of the root of the toggle switch
- disabled (boolean; default False): Whether the toggle is disabled (true) or not (false)
- id (string; required): Toggle ID
- label (string; default ''): The label for the toggle
- labelPlacement (string; default "right"): If using a single label, its position can be: "top", "start", "bottom", or "end"
- labelSpacing (default 1): The space between the label(s) and toggle
- secondaryLabel (string; default ''): A second label for the toggle. If this is used, the labelPlacement value is ignored, and the
secondaryLabel will be positioned to the right of the toggle, and the first label to the left
- toggled (boolean; required): Whether toggle is on (true) or off (false)"""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, classNameRoot=Component.UNDEFINED, disabled=Component.UNDEFINED, id=Component.REQUIRED, label=Component.UNDEFINED, labelPlacement=Component.UNDEFINED, labelSpacing=Component.UNDEFINED, secondaryLabel=Component.UNDEFINED, toggled=Component.REQUIRED, **kwargs):
        self._prop_names = ['className', 'classNameRoot', 'disabled', 'id', 'label', 'labelPlacement', 'labelSpacing', 'secondaryLabel', 'toggled']
        self._type = 'Toggle'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className', 'classNameRoot', 'disabled', 'id', 'label', 'labelPlacement', 'labelSpacing', 'secondaryLabel', 'toggled']
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
