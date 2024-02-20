import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const { data: { user } } = await supabase.auth.getUser()


    if (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/booking' || req.nextUrl.pathname === '/confirmation') {
        // Allow the request to continue for the root path
        return NextResponse.next();
    }

    if (!user) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    return res
}

export const config = {
    matcher: ['/admin/blog'],
}