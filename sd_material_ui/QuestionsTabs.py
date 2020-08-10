# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class QuestionsTabs(Component):
    """A QuestionsTabs component.


Keyword arguments:
- id (string; required): Component ID
- questionSectionProps (list; required): Array of props for each QuestionSection
- n_clicks (number; default 0): Number of clicks by the user on the Questions component
- n_clicks_previous (number; default 0): The previous number of clicks from the Questions component
- value (bool | number | str | dict | list; required): The value currently selected by clicking on a question answer prompt
- tabsProps (dict; optional): Tabs props"""
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, questionSectionProps=Component.REQUIRED, n_clicks=Component.UNDEFINED, n_clicks_previous=Component.UNDEFINED, value=Component.REQUIRED, tabsProps=Component.UNDEFINED, fireEvent=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'questionSectionProps', 'n_clicks', 'n_clicks_previous', 'value', 'tabsProps']
        self._type = 'QuestionsTabs'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'questionSectionProps', 'n_clicks', 'n_clicks_previous', 'value', 'tabsProps']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id', 'questionSectionProps', 'value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(QuestionsTabs, self).__init__(**args)
