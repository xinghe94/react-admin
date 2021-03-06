import './Checkbox.styl';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Checkbox extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        // const { checked } = this.props;
        const { className, disabled, children, checked, value } = this.props;
        const baseName = 'radio';

        const wrapperCls = cx(`${baseName}-wrapper`, className);
        const cls = cx(`${baseName}`, {
            [`${baseName}--checked`]: !!checked,
            [`${baseName}--disabled`]: disabled,
        });

        return (
            <label className={wrapperCls}>
                <div className={cls}>
                    <div className={`${baseName}__inner`} />
                    <input
                        type="checkbox"
                        checked={!!checked}
                        disabled={disabled}
                        onChange={()=>{this._onChange(value)}}
                        value={value} />
                </div>
                <span>{ children }</span>
            </label>
        );
    }

    _onChange(e) {
        if (this.props.onChange) this.props.onChange(e);
    }
}

Checkbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default Checkbox;
