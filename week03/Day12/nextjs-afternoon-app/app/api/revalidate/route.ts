import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try{
        const { searchParams } = new URL(request.url);
        const secret = searchParams.get('secret');
        const path = searchParams.get('path');
        const tag = searchParams.get('tag');

        if (secret !== 'nextjs-revalidate-secret') {
            return new Response('Invalid secret', { status: 401 });
        }
        if (path) {
            revalidatePath(path);
            return NextResponse.json({ revalidated: true, path: path, now: Date.now, });
        
        }
        if (tag) {
            revalidatePath(tag);
            return NextResponse.json({ revalidated: true, tag: tag, now: Date.now, });
        }
        return NextResponse.json ({message: 'No path or tag provided', status: 400});
    } catch (error) {
        console.error('Revalidation error:', error);
        return NextResponse.json(
            {
                message: 'Revalidation failed',
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500
            }
        );
    }
}