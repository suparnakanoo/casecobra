import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: String
    dark?: boolean
}
const Phone =({imgSrc,className,dark=false,...props}: PhoneProps) =>{
    return (
        <div 
            className={cn(
                "relative pointer-events-none z-50 overflow-hidden",
                className
            )}
            {...props}>
                <img src={
                    dark
                    ? "/phone-template-dark-edges.png" 
                    : "/phone-template-white-edges.png"
                } 
                alt="phone image" 
                className="pointer-events-none z-50 select-none"
                />

                <div className="absolute -z-10 inset-0">
                    <img className="object-cover"  src={imgSrc} alt="overlaying phone image" />
                </div>
        </div>
    )
}
export default Phone