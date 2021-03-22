// @flow

import React, {Component} from 'react';
import MuiSelect from '@material-ui/lab/Select';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

type Props = {
    id: string,
    autoFocus?: boolean,
    autoWidth: boolean,
    classes?: {},
    disabled?: boolean,
    inputRef?: () => void,
    MenuProps?: Object,
    multiple: boolean,
    options?: Array<Object>,
    /** Dash callback to update props on the server */
    setProps?: () => void,
    name?: string,
    native: boolean,
    onChange?: () => void,
    onClose?: () => void,
    onOpen?: () => void,
    open?: boolean,
    readOnly?: boolean,
    renderValue?: Node,
    tabIndex?: number,
    value?: T,
    variant?: 'standard' | 'outlined' | 'filled',
};

type State = {
    dataSourceRender: Array<string>,
    selectedValue: string,
};

const defaultProps = {
    autoWidth: false,
    classes: {},
    disabled: false,
    multiple: false,
    options: [],
    setProps: () => {},
    value: null,
    variant: 'standard',
};

export default class Select extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedValue: this.props.selectedValue,
            dataSourceRender: this.props.dataSource,
        };
        /** _.debounce used to provide delay in callback to avoid firing callback every
         * time user input changes - waits this.props.dashCallbackDelay ms to fire callback */
        this.updateTextProps = _.debounce(
            this._updateTextProps,
            this.props.dashCallbackDelay
        );
    }

    /**
     * detects change in state (user-inputted search text) and fires callback event
     * @param nextProps
     */
    UNSAFE_componentWillReceiveProps(nextProps: Props, nextContext: *): void {
        if (nextProps.text !== null && nextProps.text !== this.props.text) {
            this.handleChange(this.props.dataSource, nextProps.text);
        }
        if (this.props.dataSource !== nextProps.dataSource)
            this.setState({dataSourceRender: this.getDataSource(nextProps)});
    }

    getDataSource = (props: Props): Array<any> => {
        return props.dataSource;
    };

    /**
     * calls function to fire callback and updates text in state
     * @param text
     * @param params
     */
    handleChange = (event) => {
        const index = childrenArray
            .map((child) => child.props.value)
            .indexOf(event.target.value);

        if (index === -1) {
            return;
        }

        const child = childrenArray[index];
        this.setState({value: child.props.value});

        if (onChange) {
            onChange(event, child);
        }
    };

    render() {
        const {id, className, classes, open} = this.props;
        this.handleChange = this.handleChange.bind(this);
        return (
            <div className={className}>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <MuiSelect
                        classes={classes}
                        id={id}
                        open={open}
                        getOptionLabel={(option) => option.label}
                        options={this.state.dataSourceRender}
                        onChange={this.handleChange}
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}

Select.defaultProps = defaultProps;
