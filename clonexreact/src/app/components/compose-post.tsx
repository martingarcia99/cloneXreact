'use client'

import { useRef } from "react"
import { addPost } from "../actions/add-post"

export function ComposePost ({
    userAvatarUrl
}:{
    userAvatarUrl : string
}) {

    const formRef = useRef<HTMLFormElement>(null)

    return (
        <form ref={formRef} action={async (formData) => {
            await addPost(formData)
            formRef.current?.reset() 
        }} className="flex flex-row p-4 border-b border-white/20">
            <img className="rounded-full w-10 h-10 object-contain mr-4" src={userAvatarUrl} />
            <div className="flex flex-l flex-col gap-y-4 w-full">
                <textarea 
                    name='content' 
                    rows={4} 
                    className='w-full text-xl bg-black placeholder-gray-500 p-4'
                    placeholder="¡¿Qué está pasand?!"
                ></textarea>
                <button type='submit' className="bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end">
                    Postear
                </button>
            </div>
        </form>
    )
}