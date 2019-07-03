# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RadioButtonGroup(Component):
    """A RadioButtonGroup component.
A Dash material-ui RadioButtonGroup component

Keyword arguments:
- className (string; optional): the css class name of the root element
- defaultSelected (bool | number | str | dict | list; optional): the value property of the radio button that will
be selected by default
- id (string; required): the element's ID
- labelPosition (optional): where the label will be placed for all child radio buttons;
takes precedence over labelPosition property of the RadioButton elements
- name (string; required): the name that will be applied to all child radio buttons
- options (list; optional): used to create the RadioButtons to populate the RadioButtonGroup with. A Dash user passes in a
list of dict items, each one having at least a `value` and `label`. If that value is selected,
valueSelected will be updated
- style (optional): override the inline-styles of the root element. style has the following type: dict containing keys .
  Those keys have the following types:

- valueSelected (bool | number | str | dict | list; optional): value of the currently selected radio button"""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, defaultSelected=Component.UNDEFINED, fireEvent=Component.UNDEFINED, id=Component.REQUIRED, labelPosition=Component.UNDEFINED, name=Component.REQUIRED, options=Component.UNDEFINED, style=Component.UNDEFINED, valueSelected=Component.UNDEFINED, **kwargs):
        self._prop_names = ['className', 'defaultSelected', 'id', 'labelPosition', 'name', 'options', 'style', 'valueSelected']
        self._type = 'RadioButtonGroup'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className', 'defaultSelected', 'id', 'labelPosition', 'name', 'options', 'style', 'valueSelected']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id', 'name']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(RadioButtonGroup, self).__init__(**args)
