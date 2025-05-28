"use client";
import { useState } from "react";
// import { toast } from "sonner";
import { cn } from "@/lib/utils";
import UploadFile from "@/components/ui/upload-file";
import { CareerMenu } from "@/components/ui/compobox";
import { ApplyCareer, Career } from "@/types/career";
import { applyJob } from "@/app/actions/apply-job";
import { toast } from "sonner";


type CareerFormProps = {
    careers: Career[];
}


export default function CareerForm({ careers }: CareerFormProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [state, setState] = useState<ApplyCareer>({
        fullName: "",
        email: "",
        message: "",
        phone_number: "",
        career: 0,
        cv: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFile) return alert("Please upload a file.");
        if (!state.career) return alert("Please select a career.");

        try {
            setLoading(true);
            await applyJob({
                ...state,
                cv: selectedFile,
            });
            toast.success("Application submitted successfully!");
            // Reset form state
            setSelectedFile(null);
            setState({ fullName: "", email: "", phone_number: "", career: 0, message: "", cv: null });
        } catch (err) {
            console.error(err);
            toast.error("Error submitting application");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={cn("space-y-8 md:space-y-14")}>
            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8")}>
                <div>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={state.fullName}
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
                        value={state.email}
                        onChange={handleChange}
                        className={cn("w-full bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500 ")}
                        required
                    />
                </div>
            </div>

            <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8")}>
                <div>
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Your Number"
                        value={state.phone_number}
                        onChange={handleChange}
                        className={cn("w-full bg-transparent border-b-2 border-neutral-700 py-2 px-1 focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-500 ")}
                    />
                </div>
                <div className={cn("w-full")}>
                    <CareerMenu careers={careers} onSelect={(id) => setState((prev) => ({ ...prev, career: id }))} />
                </div>
            </div>
            <div className={cn("w-full")}>
                <textarea
                    name="message"
                    placeholder="Additional Message"
                    value={state.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn("w-full bg-transparent border-b-2 border-neutral-700 placeholder:text-neutral-500 py-2 px-1 focus:outline-none focus:border-primary transition-colors resize-none ")}
                ></textarea>
            </div>

            <div className={cn("flex gap-8 items-start mb-20")}>
                <UploadFile onFileSelect={(file) => setSelectedFile(file)} initialFile={selectedFile} />
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
