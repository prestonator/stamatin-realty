import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { HiExclamationCircle } from "react-icons/hi";

export default function FormInput({
	label,
	placeholder = "",
	helperText,
	id,
	type = "text",
	readOnly = false,
	validation,
	...rest
}) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div>
			<Label htmlFor={id}>{label}</Label>
			<Input
				{...register(id, validation)}
				{...rest}
				type={type}
				name={id}
				id={id}
				readOnly={readOnly}
				placeholder={placeholder}
				aria-describedby={id}
			/>
			{helperText && <p>{helperText}</p>}
			{errors[id] && (
				<span>
					<HiExclamationCircle />
					{errors[id].message}
				</span>
			)}
		</div>
	);
}