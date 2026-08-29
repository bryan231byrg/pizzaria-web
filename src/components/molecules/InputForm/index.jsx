function InputForm({ legend, type, value, onChange }) {

    return (

        <fieldset>

            <legend>{legend}</legend>

            <input
                type={type}
                id={`ipt-${legend}`}
                value={value}
                onChange={onChange}
            />

        </fieldset>
    );
}

export default InputForm;