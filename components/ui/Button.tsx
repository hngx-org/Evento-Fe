type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}

const Button = (props:Props) => {
    return (
        <button
        onClick={props?.handleClick}
        className={`${props.styles} px-3 py-2 rounded-lg hover:bg-violet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-black hover:ring-violet-700`}
        type={props?.type}
        title={props.title}
        disabled={props?.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button
