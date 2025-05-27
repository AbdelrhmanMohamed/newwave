"use client";
import { useState } from "react";
// import { toast } from "sonner";
import { cn } from "@/lib/utils";
import UploadFile from "@/components/ui/upload-file";
import { ComboboxDemo } from "@/components/ui/compobox";


type CarrerForm = {
    fullName: string;
    email: string;
    mobileNumber: string;
    jobPosition: string;
    message: string;
}

export default function CareerForm() {
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<CarrerForm>({
        fullName: "",
        email: "",
        mobileNumber: "",
        jobPosition: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.log("formData", formData);
        // const res = await send_message(formData);

        // setLoading(false);
        // if (res) {
        //     toast.success("Message sent successfully! Thanks for contacting us!");
        //     setFormData({
        //         firstName: "",
        //         lastName: "",
        //         phoneNumber: "",
        //         email: "",
        //         companyName: "",
        //         message: "",
        //     })
        // } else toast.error("Failed to send message");
    };

    return (
        <form onSubmit={handleSubmit} className={cn("space-y-8 md:space-y-14")}>
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8")}>
                <div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={cn("w-full bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500")}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={cn("w-full bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500 ")}
                        required
                    />
                </div>
            </div>

            <div className={cn("grid grid-cols-2 md:grid-cols-2 gap-8")}>
                <div>
                    <input
                        type="text"
                        name="mobileNumber"
                        placeholder="Your Number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className={cn("w-full bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500 ")}
                    />
                </div>
                <div className={cn("w-full")}>
                    <ComboboxDemo />
                </div>
            </div>
            <div className={cn("w-full")}>
                <textarea
                    name="message"
                    placeholder="Additional Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn("w-full bg-transparent border-b-2 border-neutral-700 placeholder:text-neutral-500 py-2 px-1 focus:outline-none focus:border-primary transition-colors resize-none ")}
                ></textarea>
            </div>

            <div className={cn("flex gap-8 items-start mb-20")}>
                <UploadFile />
                <button
                    type="submit"
                    className={cn("border flex border-neutral-500 px-8 py-4 font-medium  items-center cursor-pointer hover:border-primary hover:text-primary transition duration-500 group")}
                >
                    <span className="bg-primary mr-2 rounded-full size-1 group-hover:bg-white transition duration-500" />
                    {loading ? "Sending...." : "Submit"}
                </button>
            </div>
        </form >
    );
}
