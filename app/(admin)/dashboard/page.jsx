'use client'
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
export default function Dashboard() {
    const inputRef = useRef(null)
    const [image, setImage] = useState(null)
    const [coverImage, setCoverImage] = useState('')
    const [loader, setLoader] = useState(false)
    async function submitHandler(e) {
        e.preventDefault();
        try {
            setLoader(true)
            if (!image) {
                return toast.error("Please select an image");
            }
            const form = new FormData();
            form.append("image", image);
            const response = await axios.post("/api/upload-image", form);
            console.log(response)
            setCoverImage(response.data.data.secure_url)
            return toast.success(response.data.message)
        } catch (error) {
            setLoader(true)
            return toast.error(error.response.data.message)
        } finally {
            setLoader(false)
        }
    }
    return (
        <main className="w-screen h-screen absolute top-0 left-0 bg-white  grid grid-cols-4 grid-row-3">
            <div className="row-span-3 p-6 m-2 border rounded-2xl">
                <Image src="/logo.png" width={100} height={100} alt="logo" />
                <div className="border p-5 space-y-3 rounded-xl">
                    <h1 className="px-3 uppercase font-semibold text-slate-700">
                        Upload
                    </h1>
                    <div className="flex flex-col items-start gap-1 w-full">
                        {
                            [
                                {
                                    name: 'Residence Images',
                                    link: '?category=1'
                                },
                                {
                                    name: 'Commercial Images',
                                    link: '?category=2'
                                },
                                {
                                    name: 'Retail Images',
                                    link: '?category=3'
                                },
                                {
                                    name: 'Ongoing Images',
                                    link: '?category=4'
                                },
                            ].map((item, index) => {
                                return <Link key={index} href={item.link} className="w-full transition-all rounded-full hover:bg-gray-200 py-3 px-5">
                                    {item.name}
                                </Link>
                            })
                        }
                    </div>
                </div>
                <br />

                <div className="border p-5 space-y-3 rounded-xl">
                    <h1 className="px-3 uppercase font-semibold text-slate-700">
                        View / Delete
                    </h1>
                    <div className="flex flex-col items-start gap-1 w-full">
                        {
                            [
                                {
                                    name: 'Residence Images',
                                    link: '?category=5'
                                },
                                {
                                    name: 'Commercial Images',
                                    link: '?category=6'
                                },
                                {
                                    name: 'Retail Images',
                                    link: '?category=7'
                                },
                                {
                                    name: 'Ongoing Images',
                                    link: '?category=8'
                                },
                            ].map((item, index) => {
                                return <Link key={index} href={item.link} className="w-full transition-all rounded-full hover:bg-gray-200 py-3 px-5">
                                    {item.name}
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className=" col-span-3 row-span-2 m-2 border rounded-2xl p-8">
                <div className="w-full  h-full grid grid-cols-3 gap-8  rounded-xl">
                    <div className="">
                        <h1 className="text-2xl ">Upload Cover Image</h1>
                        <br />
                        <div>
                            <input type="text" placeholder="Enter Title for the project" className="w-full border outline-none py-2 px-4 rounded-full mb-4"  />
                        </div>
                        <div className="border w-full rounded-xl flex flex-col py-6 mb-2 items-center justify-center">
                            {coverImage.length > 0 ? <Image src={coverImage} alt="cover-image" width={400} height={400} className="w-full object-cover h-full rounded-xl " /> : <p>No image to show!</p> }
                        </div>
                        <form onSubmit={submitHandler} className="w-full">
                            <p className="text-primary text-sm font-semibold py-1">Ratio: 1080/1920</p>
                            <div className="flex items-center justify-center w-full"
                                onClick={() => {
                                    inputRef.current.click()
                                }}
                            >
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                </label>
                            </div>
                            <input ref={inputRef} className="hidden" type="file" accept="image/*" onChange={(e) => {
                                e.target.files && setImage(e.target.files[0]);
                                console.log(e.target.files)
                            }} />
                            <br />
                            <button type="submit" className="w-full bg-blue-500 py-2 rounded-full text-white" > Submit </button>
                        </form>

                    </div>
                    <div className="">
                        <h1 className="text-2xl">Upload Project Images</h1>

                    </div>
                </div>
            </div>
            <div className=" col-span-3 m-2 border rounded-2xl">

            </div>
        </main>
    )
}