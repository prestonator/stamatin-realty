import { Button } from "@/components/ui/button";

function FormButton({ children, onClick, ...rest }) {
	return (
		<Button onClick={onClick} {...rest}>
			{children}
		</Button>
	);
}

export default FormButton;