import Label from '../atoms/Label'
import Input from '../atoms/Input'

function FormField({ id, label, error, ...inputProps }) {
    return (
    <div className="flex flex-col gap-1">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} hasError={Boolean(error)} {...inputProps} />
        {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
    )
}

export default FormField