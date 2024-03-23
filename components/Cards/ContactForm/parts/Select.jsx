"use client";
import { Children, cloneElement, isValidElement } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { HiExclamationCircle } from "react-icons/hi";
import {
	SelectValue,
	SelectTrigger,
	SelectItem,
	SelectContent,
	Select,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function FormSelect({
	label,
	helperText,
	id,
	placeholder,
	defaultValue,
	readOnly = false,
	validation,
	...rest
}) {
	const {
		register,
		formState: { errors },
		control,
	} = useFormContext();

	return (
		<div>
			<Label htmlFor={id}>{label}</Label>
			<div>
				<Controller
					control={control}
					rules={validation}
					defaultValue={defaultValue}
					name={id}
					render={({ field: { onChange, onBlur, value } }) => (
						<Select
							{...register(id, validation)}
							// defaultValue to value blank, will get overriden by ...rest if needed
							{...rest}
							name={id}
							id={id}
							aria-describedby={id}
							onValueChange={onChange}
							onBlur={onBlur}
							value={value}
							defaultValue={value}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="social_media">Social Media</SelectItem>
								<SelectItem value="friend">Friend</SelectItem>
								<SelectItem value="advertisement">Advertisement</SelectItem>
								<SelectItem value="other">Other</SelectItem>
							</SelectContent>
						</Select>
					)}
				/>

				{errors[id] && (
					<div>
						<HiExclamationCircle />
					</div>
				)}
			</div>
			<div>
				{helperText && <p>{helperText}</p>}
				{errors[id] && <span>{errors[id].message}</span>}
			</div>
		</div>
	);
}
