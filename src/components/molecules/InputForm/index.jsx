function InputForm({ legend, type, value, onChange, maxLength }) {

    return (
        <fieldset>
            <legend>{legend}</legend>

            <input
                type={type}
                id={`ipt-${legend}`}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
            />

        </fieldset>
    );
}

export default InputForm;