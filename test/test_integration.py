"""
StratoDem Analytics : test_integration
Principal Author(s) : Michael Clawar
Secondary Author(s) :
Description :

Notes :

December 29, 2017
"""

import time

import dash
import dash_html_components as html
from dash.dependencies import Input, Output

from .IntegrationTests import IntegrationTests
from .utils import invincible, wait_for, waiter

import sd_material_ui


class Tests(IntegrationTests):
    def setUp(self):
        def wait_for_element_by_id(id):
            wait_for(lambda: None is not invincible(
                lambda: self.driver.find_element_by_id(id)
            ))
            return self.driver.find_element_by_id(id)
        self.wait_for_element_by_id = wait_for_element_by_id

        def wait_for_element_by_css_selector(css_selector):
            wait_for(lambda: None is not invincible(
                lambda: self.driver.find_element_by_css_selector(css_selector)
            ))
            return self.driver.find_element_by_css_selector(css_selector)
        self.wait_for_element_by_css_selector = (
            wait_for_element_by_css_selector
        )

    def test_flat_button(self):
        app = dash.Dash(__name__)

        app.layout = html.Div([
            html.Div(id='waitfor'),
            sd_material_ui.SDFlatButton('test', id='flat-button'),
            html.Div(children=[
                html.Span('num clicks:'),
                html.Span(0, id='test-span-output'),
            ], id='test-output')
        ])

        @app.callback(
            output=Output(component_id='test-span-output', component_property='children'),
            inputs=[Input(component_id='flat-button', component_property='n_clicks')])
        def click_button(n_clicks: int) -> int:
            if n_clicks is not None and n_clicks > 0:
                return n_clicks

        self.startServer(app)

        waiter(self.wait_for_element_by_id)

        self.driver.find_element_by_css_selector('#flat-button button').click()
        self.assertEqual(self.driver.find_element_by_id('test-span-output').text, '1')

        self.driver.find_element_by_css_selector('#flat-button button').click()
        self.assertEqual(self.driver.find_element_by_id('test-span-output').text, '2')

    def test_raised_button(self):
        app = dash.Dash(__name__)

        app.layout = html.Div([
            html.Div(id='waitfor'),
            sd_material_ui.SDRaisedButton('test', id='raised-button'),
            html.Div(children=[
                html.Span('num clicks:'),
                html.Span(0, id='test-span-output'),
            ], id='test-output')
        ])

        @app.callback(
            output=Output(component_id='test-span-output', component_property='children'),
            inputs=[Input(component_id='raised-button', component_property='n_clicks')])
        def click_button(n_clicks: int) -> int:
            if n_clicks is not None and n_clicks > 0:
                return n_clicks

        self.startServer(app)

        waiter(self.wait_for_element_by_id)

        self.driver.find_element_by_css_selector('#raised-button button').click()
        self.assertEqual(self.driver.find_element_by_id('test-span-output').text, '1')

        self.driver.find_element_by_css_selector('#raised-button button').click()
        self.assertEqual(self.driver.find_element_by_id('test-span-output').text, '2')
