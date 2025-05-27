"use client"
import type React from "react"
import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"

export default function UploadFile() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleClearFile = () => {
        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    return (
        <div className="w-full max-w-md">
            <div className="border border-neutral-500 p-1 overflow-hidden">
                <div className="flex">
                    <button
                        type="button"
                        onClick={handleUploadClick}
                        className="bg-primary hover:bg-primary/90 cursor-pointer text-white px-6 py-3 rounded-none border-0 flex items-center gap-2 font-medium"
                    >
                        <Upload className="w-4 h-4" />
                        Upload
                    </button>
                    <div className="flex-1 px-4 py-3 text-neutral-400 flex items-center justify-between">
                        <span>{selectedFile ? selectedFile.name : "No file chosen"}</span>
                        {selectedFile && (
                            <button
                                type="button"
                                onClick={handleClearFile}
                                className="text-neutral-400 hover:text-white hover:bg-neutral-600/50 p-1 h-auto"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-neutral-400 text-sm mt-3">*Upload your resume in pdf, jpg, png, or doc format.</p>
            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"

            />
        </div>
    )
}
