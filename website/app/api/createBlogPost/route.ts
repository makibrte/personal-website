import {NextResponse, NextRequest} from "next/server";
import {supabase} from "@/app/lib/supabase";

interface BlogData  {
    title: string,
    ///Content is a string that is just an encoding of html that will later be rendered by the blogs page
    content : string,
    category : string[]
}
function isBlogData(obj: any): obj is BlogData {
    ///Checks if the data received by the API is of type BlogData
    return (
        obj &&
        typeof obj.title === 'string' &&
        typeof obj.content === 'string' &&
        Array.isArray(obj.category) &&
        obj.category.every((c: any) => typeof c === 'string')
    );
}
export const POST = async(req:NextResponse) : Promise<NextResponse> =>{
    const body = await req.json();
    /// Status code 502 means error in object format. I will keep the same standard across all the API calls
    if(!isBlogData(body.data)){
        return NextResponse.json({message:'Blog data is in invalid format'}, {status: 502});
    }
    ///Adding the blog post to the database
    const {data, error} = await supabase.from('blogs')
        .insert(body.data);
    if(error){
        ///501 error code means supabase error. Will keep the same across all the API calls
        return NextResponse.json({message:'Error adding blog', error:error}, {status: 501});
    }
    return NextResponse.json({message: 'Success adding new blog', data:data}, {status:200});
}