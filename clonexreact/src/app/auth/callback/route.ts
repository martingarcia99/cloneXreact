import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function  GET (request: NextRequest) {
    // nos crea una instancia de la url para que podamos acceder a sus parámetros
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if ( code != null ) {
        const supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code)
    }
    
    return NextResponse.redirect(requestUrl.origin)
}