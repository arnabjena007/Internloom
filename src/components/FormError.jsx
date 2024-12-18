import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const FormError = ({message}) => {
    if (!message) return null;

    return (
        <div className="bg-red-600 mx-4 w-full mb-4  rounded-md flex items-center 
        gap-x-2 text-xs text-red-900">
            <ExclamationTriangleIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )

}