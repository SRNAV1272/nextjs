import { NextResponse } from "next/server"
import logger from "../../../../logger/logger"

export async function GET(request, response) {
    logger.info(`Request headers: ${JSON.stringify(request.headers)}`)
    try {
        throw new Error('Oops there was an error .')
        // return NextResponse.json({ name: 'sai' })
    } catch (error) {
        logger.error(error.stack)
        return NextResponse.error({ msg: 'Error !' })
    }
    // return NextResponse.error({msg:})
    // return response.status(200).json({ msg: 'data recieved !' })
}