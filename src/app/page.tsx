"use client"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "./page.module.css"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	const [workHistory, setWorkHistory] = useState<string>("")
	const [jobDescription, setJobDescription] = useState<string>("")
	const [content, setContent] = useState<string>("")

	const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
		event.preventDefault()
		const clipboardData = event.clipboardData || window.Clipboard.toString()
		const pastedData = clipboardData.getData("text/html")
		setWorkHistory(pastedData)
	}

	return (
		<main className="main-container">
			<div className="work-history-container">
				<label htmlFor="test">Work History</label>
				<textarea
					name="test"
					id="test"
					cols={50}
					rows={10}
					// onPaste={handlePaste}
					value={workHistory}
					placeholder="Paste your work history here"
					onChange={(e) => setWorkHistory(e.target.value)}
				></textarea>
			</div>
			<div className="job-description-container">
				<label htmlFor="job-description">Job Description</label>
				<textarea
					name="job-description"
					id="job-description"
					cols={50}
					rows={10}
					// onPaste={handlePaste}
					value={jobDescription}
					onChange={(e) => setJobDescription(e.target.value)}
				></textarea>
			</div>
		</main>
	)
}
