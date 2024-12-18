"use client";
import { useRouter } from "next/navigation";

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}) => {
    const router = useRouter();

    const onClick = () => {
        router.push('/auth/login');
    };

    if (mode === "modal") {
        return (
            <span>
                TODO
            </span>
        );
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};
export const RegisterButton = ({
    children,
    mode = "redirect",
    asChild }) => {
        const router = useRouter();

        const onClick = () => {
            router.push('/auth/register');
        }
        
        if(mode==="modal"){
            return (
                <span>
                    TODO
                </span>
            )
        }
        return (
            <span onClick={onClick} className="cursor-pointer">
                {children}
            </span>
        )
    }; 