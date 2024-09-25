import ChatWrapper from "@/components/ChatWrapper"
import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis"
import { cookies } from "next/headers"


interface PageProps{
    params: {
        url : string | string[] | undefined
    }
}

function reconstructUrl({url}: {url: string[]}) {
    const decodedComponent = url.map((component) => decodeURIComponent(component))

    return decodedComponent.join("/")
}

const Page = async ({params} : PageProps) => {
    const sessionCookie = cookies().get("sessionId")?.value

    const originalURL = reconstructUrl({ url: params.url as string[] })

    const sessionId = (originalURL + "---" + sessionCookie).replace(/\//g,"")

    const isAlreadyPresent = await redis.sismember("index-url", originalURL)

    const oldMessages = await ragChat.history.getMessages({
        amount:10,
        sessionId
    })

    if(!isAlreadyPresent){
        await ragChat.context.add({
            type: "html",
            source: originalURL,
            config: {chunkOverlap: 50, chunkSize: 200 },
        })

        await redis.sadd("index-url",originalURL)
    }




    return <ChatWrapper sessionId={sessionId} oldMessages={oldMessages} />

}

export default Page