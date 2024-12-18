import { CheckCircledIcon} from "@radix-ui/react-icons";

export const FormSuccess = ({message}) => {
    if (!message) return null;

    return (
        <div className="bg-emerald-500/15 mx-4 mb-2 rounded-md flex items-center 
        gap-x-2 text-xs text-emerald-500">
            <CheckCircledIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )

}