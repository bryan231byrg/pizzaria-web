import StyleInputForm from "./style.module.css";

function InputForm({ legend, type, value, onChange, maxLength }) {
    return (
        <fieldset className={StyleInputForm.fieldset}>
            <legend className={StyleInputForm.legend}>
                {legend}
            </legend>

            <input
                className={StyleInputForm.input}
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